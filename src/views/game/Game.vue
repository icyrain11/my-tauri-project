 <template>
  <div>
    <div ref="enviroment"></div>
  </div>
</template>

<script lang = "ts" setup>
import { onMounted, ref, watchEffect, WatchEffect } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

//get the enviroment of three.js dom
const enviroment = ref<HTMLDivElement>();

/**
 * scene
 */
const scene: THREE.Scene = new THREE.Scene();

/**
 * camera
 */
const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  1500
);

const initCamera = (): void => {
  camera.position.set(0, 0, 3);
  camera.lookAt(scene.position);
  scene.add(camera);
};

/**
 * renderer
 */
const renderer = new THREE.WebGL1Renderer({
  alpha: true,
  antialias: true,
});

const initRenderer = () => {
  renderer.setClearColor(0xffffff);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  enviroment.value?.appendChild(renderer.domElement);
};

/**
 * OrbitControls
 */
const orbitControls = new OrbitControls(camera, renderer.domElement);
const initorbitControls = () => {
  orbitControls.enableZoom = true;
  orbitControls.enableDamping = false;
  orbitControls.enablePan = false;
  orbitControls.maxDistance = 3;
  orbitControls.minDistance = 0;
};

//AxesHelper
const axesHelper: THREE.AxesHelper = new THREE.AxesHelper(50);
scene.add(axesHelper);
//init the basic enviroment of  three.js
const init = (): void => {
  //camera
  initCamera();

  //renderer
  initRenderer();

  //OrbitControls
  initorbitControls();

  //animatie
  renderScene();

  function renderScene() {
    requestAnimationFrame(renderScene);
    renderer.render(scene, camera);
  }
};

//onMounted
onMounted(() => {
  init();
});

//watchEffect of the three.js
watchEffect(() => {
  //resize the window
  window.addEventListener("resize", (): void => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
});

//add some cube to test
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.position.set(0, 0, 0);
scene.add(cube);
</script>


<style scoped>
html,
body {
  overflow: hidden;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.enviroment {
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
  z-index: 0;
}
</style>



    
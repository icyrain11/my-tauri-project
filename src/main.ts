import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import router from "@/router";

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(Antd);
app.mount("#app");

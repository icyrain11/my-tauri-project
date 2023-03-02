export default class Game {
  //single instance to warp the three.js

  static instance: Game;

  static getInstac() {
    return Game.instance;
  }

  constructor() {
    //if the game have been constructed
    if (Game.instance) {
      return Game.instance;
    }
    //else
    Game.instance = this;

    window.addEventListener("resize", () => {
      this.resize();
    });
  }

  resize() {
    
  }

  update() {
    window.requestAnimationFrame(() => {
      this.update();
    });
  }
}

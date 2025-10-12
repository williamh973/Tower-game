import { update } from "./update.js";
import { draw } from "./draw.js";
import { Canvas } from "./models/canvas/canvas.model.js";
import { dashboard } from "./models/selectionScreen/selectionScreen.instance.js";
import { game } from "./gameVariable.js";

export const canvas = document.getElementById("canvas");
export const canvasManager = new Canvas(canvas);
export const context = canvasManager.getContext();

export const animate = (timestamp) => {
  requestAnimationFrame(animate);
  canvasManager.clear();
  canvasManager.drawImage();
  draw();

  if (dashboard.isStepLoaded) {
    dashboard.map.updateWaveHudMask();
    game.player.gameOver();
    dashboard.map.deadDemons();
  }
  update(timestamp);

  // const mouse = canvasManager.getMousePosition();
  // console.log("Mouse on canvas:", mouse.position.x, mouse.position.y);
};

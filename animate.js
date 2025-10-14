import { update } from "./update.js";
import { draw } from "./draw.js";
import { Canvas } from "./models/canvas/canvas.model.js";

export const canvas = document.getElementById("canvas");
export const canvasManager = new Canvas(canvas);
export const context = canvasManager.getContext();

export const animate = (timestamp) => {
  requestAnimationFrame(animate);
  canvasManager.clear();
  canvasManager.draw();

  draw();
  update(timestamp);

  // const mouse = canvasManager.getMousePosition();
  // console.log("Mouse on canvas:", mouse.position.x, mouse.position.y);
};

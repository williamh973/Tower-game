import { update } from "./update.js";
import { draw } from "./draw.js";
import { handleDeadDemons } from "./playerActions.js";
import { Canvas } from "./models/canvas/canvas.model.js";
import { updateWaveHudMask } from "./spawnHandle/campaign/step/wave/wave.js";
import { gameOver } from "./gameOver.js";
import { gameVariable } from "./gameVariable.js";

export const canvas = document.getElementById("canvas");
export const canvasManager = new Canvas(canvas);
export const context = canvasManager.getContext();

export const animate = (timestamp) => {
  requestAnimationFrame(animate);
  canvasManager.clear();
  canvasManager.drawImage();

  if (gameVariable.campaign.isStepLoaded) {
    updateWaveHudMask();
    gameOver();
    handleDeadDemons();
  }

  update(timestamp);
  draw();
};

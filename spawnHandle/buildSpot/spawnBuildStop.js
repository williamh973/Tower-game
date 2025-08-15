import { gameVariable } from "../../gameVariable.js";
import { BuildSpot } from "../../models/buildSpot/buildSpot.model.js";

export const spawnBuildSpot = (positions) => {
  positions.forEach((pos) => {
    gameVariable.battle.buildSpotList.push(new BuildSpot(pos));
  });
};

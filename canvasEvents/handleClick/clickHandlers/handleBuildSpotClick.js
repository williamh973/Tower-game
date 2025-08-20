import { gameVariable } from "../../../gameVariable.js";
import { isHovering, x, y } from "../../../shared/utils.js";
import { openBuildSpotMenu } from "../../../../../spawnHandle/buildSpot/buildSpotMenu.js";

export const buildSpotList = () => {
  for (const spot of gameVariable.battle.buildSpotList) {
    if (
      isHovering(
        x,
        y,
        spot.position.x,
        spot.position.y,
        spot.width,
        spot.height
      ) &&
      !spot.isOccupied &&
      gameVariable.game.player.isCanBuildTower
    ) {
      openBuildSpotMenu(spot);
    }
  }
};

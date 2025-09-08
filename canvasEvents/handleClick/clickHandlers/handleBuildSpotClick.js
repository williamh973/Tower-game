import { gameVariable } from "../../../gameVariable.js";
import { isHovering, x, y } from "../../../shared/utils.js";
import { openBuildSpotMenu } from "../../../../../spawnHandle/buildSpot/buildSpotMenu.js";
import { dashboard } from "../../../models/selectionScreen/selectionScreen.instance.js";

export const buildSpots = () => {
  for (const spot of dashboard.map.buildSpots) {
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

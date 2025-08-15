import { canvas } from "../../../../animate.js";
import { gameVariable } from "../../../../gameVariable.js";
import { playerBuildTower } from "../../../../spawnHandle/tower.js";
import { isHovering, mouseDetect, x, y } from "../../../../shared/utils.js";
import { buildSpotMenu } from "../../../../models/selectionScreen/selectionScreen.instance.js";
import {
  arrowIconList,
  battleIconList,
} from "./clickHandlers/handleIconClick.js";
import { ghostMod } from "./clickHandlers/handleGhostModClick.js";
import { dashboardIconList } from "./clickHandlers/handleDashboaredClick.js";
import { buildSpotList } from "./clickHandlers/handleBuildSpotClick.js";
import { levelIconList } from "./clickHandlers/handleDifficultyScreenClick.js";

canvas.addEventListener("click", (event) => {
  mouseDetect(event);
  handleClick();
});

export const handleClick = async () => {
  levelIconList();
  arrowIconList();
  dashboardIconList();
  battleIconList();
  buildSpotList();

  let selectedIcon =
    gameVariable.preparation.availableTowerList[
      gameVariable.preparation.currentTowerIndex
    ];

  if (
    gameVariable.preparation.isAvailableTowersMenuOpen &&
    isHovering(
      x,
      y,
      selectedIcon.position.x,
      selectedIcon.position.y,
      selectedIcon.width,
      selectedIcon.height
    ) &&
    selectedIcon.isClickable
  ) {
    selectedIcon.isActivated = true;
    ghostMod(selectedIcon);
  }

  if (gameVariable.preparation.isGhostedMod) {
    for (const slot of buildSpotMenu.buildMenuSlots) {
      if (
        isHovering(
          x,
          y,
          slot.position.x,
          slot.position.y,
          slot.width,
          slot.height
        )
      ) {
        slot.addTowerIconToSlot(
          slot,
          selectedIcon,
          buildSpotMenu.remainingBuildMenuSlots
        );
      }
    }
  }

  for (const buildSpotTowerIcon of gameVariable.tower.buildSpotMenuSlotList) {
    if (
      isHovering(
        x,
        y,
        buildSpotTowerIcon.position.x,
        buildSpotTowerIcon.position.y,
        buildSpotTowerIcon.width,
        buildSpotTowerIcon.height
      )
    ) {
      playerBuildTower(buildSpotTowerIcon);
    }
  }
};

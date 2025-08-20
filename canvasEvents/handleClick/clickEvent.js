import { canvas } from "../../../../animate.js";
import { isHovering, mouseDetect, x, y } from "../../../../shared/utils.js";
import { buildSpotMenu } from "../../../../models/selectionScreen/selectionScreen.instance.js";
import {
  battleIconList,
  towerSetupMenuIcons,
} from "./clickHandlers/handleIconClick.js";
import { ghostMod } from "./clickHandlers/handleGhostModClick.js";
import { dashboardIconList } from "./clickHandlers/handleDashboaredClick.js";
import { buildSpotList } from "./clickHandlers/handleBuildSpotClick.js";
import { levelIconList } from "./clickHandlers/handleDifficultyScreenClick.js";
import { towerSetupMenu } from "../../models/selectionScreen/selectionScreen.instance.js";

canvas.addEventListener("click", (event) => {
  mouseDetect(event);
  handleClick();
});

export const handleClick = async () => {
  levelIconList();
  towerSetupMenuIcons();
  dashboardIconList();
  battleIconList();
  buildSpotList();

  let selectedIcon =
    towerSetupMenu.availableTowerIcons[towerSetupMenu.currentTowerIndex];

  if (
    towerSetupMenu.isTowerSetupMenuOpen &&
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

  if (towerSetupMenu.isGhostedMod) {
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
};

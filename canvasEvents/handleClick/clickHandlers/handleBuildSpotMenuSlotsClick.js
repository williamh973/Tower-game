import {
  buildSpotMenu,
  dashboard,
  towerSetupMenu,
} from "../../../models/selectionScreen/selectionScreen.instance.js";
import { isHovering, x, y } from "../../../shared/utils.js";

export const buildSpotMenuSlots = (selectedIcon) => {
  if (buildSpotMenu.isOpen && buildSpotMenu.isAnimateFinished)
    for (const slot of buildSpotMenu.slots) {
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
        slot.toggle(selectedIcon, buildSpotMenu);
      }
    }
};

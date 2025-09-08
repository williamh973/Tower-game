import {
  dashboard,
  towerSetupMenu,
} from "../../../models/selectionScreen/selectionScreen.instance.js";
import { initStepIconNames, isHovering, x, y } from "../../../shared/utils.js";

export const dashboardIcons = () => {
  for (const icon of dashboard.icons) {
    if (
      isHovering(
        x,
        y,
        icon.position.x,
        icon.position.y,
        icon.width,
        icon.height
      )
    ) {
      switch (icon.name) {
        case "openTowerSetupMenuIcon":
          towerSetupMenu.open(icon);
          break;
      }

      const stepIcons = initStepIconNames();
      if (!stepIcons.includes(icon.name)) return;

      dashboard.loadCampaignStep(icon.name);
    }
  }
};

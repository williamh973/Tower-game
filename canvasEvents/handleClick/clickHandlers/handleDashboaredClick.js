import { openTowerSetupMenu } from "../../../menus/towerSetupMenu/towerSetupMenu.js";
import { dashboard } from "../../../models/selectionScreen/selectionScreen.instance.js";
import { isHovering, x, y } from "../../../shared/utils.js";
import { loadCampaignStep } from "../../../spawnHandle/campaign/step/checkCampaignStep.js";

export const dashboardIconList = () => {
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
        case "openTowerSetupMenu":
          openTowerSetupMenu(icon);
          break;
        default:
          break;
      }

      if (icon.name) {
        loadCampaignStep(icon.name);
      }
    }
  }
};

import { gameVariable } from "../../../gameVariable.js";
import { openAvailableTowerMenu } from "../../../menus/availableTowerMenu/availableTowerMenu.js";
import { isHovering, x, y } from "../../../shared/utils.js";
import { loadCampaignStep } from "../../../spawnHandle/campaign/step/checkCampaignStep.js";

export const dashboardIconList = () => {
  for (const icon of gameVariable.campaign.dashboardIconList) {
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
        case "openAvailableTowerMenu":
          openAvailableTowerMenu(icon);
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

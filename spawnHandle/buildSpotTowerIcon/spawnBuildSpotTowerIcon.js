import { gameVariable } from "../../gameVariable.js";
import { Icon } from "../../models/icon/icon.model.js";

export const spawnBuildSpotTowerIcon = (spot, menuWidth, menuHeight) => {
  const iconWidth = 40;
  const iconHeight = 40;

  let buildSpotArcherIcon = new Icon(
    spot.position.x - 4,
    spot.position.y - menuHeight / 3.3,
    null,
    "transparent",
    iconWidth,
    iconHeight,
    true,
    "",
    "buildSpotArcherIcon"
  );

  let buildSpotWizardIcon = new Icon(
    spot.position.x - menuWidth / 3.3,
    spot.position.y + menuHeight - 200,
    null,
    "transparent",
    iconWidth,
    iconHeight,
    true,
    "",
    "buildSpotWizardIcon"
  );

  let buildSpotCannonIcon = new Icon(
    spot.position.x + menuWidth / 3.6,
    spot.position.y + menuHeight - 200,
    null,
    "transparent",
    iconWidth,
    iconHeight,
    true,
    "",
    "buildSpotCannonIcon"
  );

  let buildSpotFireIcon = new Icon(
    spot.position.x - 4,
    spot.position.y + menuHeight / 3.3,
    null,
    "transparent",
    iconWidth,
    iconHeight,
    true,
    "",
    "buildSpotFireIcon"
  );

  gameVariable.ui.buildSpotIconList.push(
    buildSpotArcherIcon,
    buildSpotWizardIcon,
    buildSpotCannonIcon,
    buildSpotFireIcon
  );

  gameVariable.ui.buildSpotIconList.forEach((buildSpotTowerIcon) => {
    buildSpotTowerIcon.setAssociatedBuildSpot(spot);
  });
};

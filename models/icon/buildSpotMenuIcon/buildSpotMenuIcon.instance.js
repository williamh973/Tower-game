import {
  theImgbuildSpotMenuArcherIcon,
  theImgbuildSpotMenuWizardIcon,
} from "../../../assets/buildSpotMenuTowerIcon.asset.js";
import { Icon } from "../icon.model.js";

export let buildSpotMenuArcherTowerIcon;
export let buildSpotMenuWizardTowerIcon;

export const initBuildspotMenuTowerIcon = async () => {
  buildSpotMenuArcherTowerIcon = new Icon(
    0,
    0,
    theImgbuildSpotMenuArcherIcon,
    "",
    50,
    50,
    true,
    "",
    "buildSpotMenuArcherTowerIcon"
  );
  buildSpotMenuWizardTowerIcon = new Icon(
    0,
    0,
    theImgbuildSpotMenuWizardIcon,
    "",
    50,
    50,
    true,
    "",
    "buildSpotMenuWizardTowerIcon"
  );
};

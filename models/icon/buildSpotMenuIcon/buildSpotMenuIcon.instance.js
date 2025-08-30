import {
  theImgbuildSpotMenuArcherIcon,
  theImgbuildSpotMenuBarrackIcon,
  theImgbuildSpotMenuCannonIcon,
  theImgbuildSpotMenuFireIcon,
  theImgbuildSpotMenuGroundIcon,
  theImgbuildSpotMenuWizardIcon,
} from "../../../assets/buildSpotMenuTowerIcon.asset.js";
import { blackMask } from "../../../shared/utils.js";
import { Icon } from "../icon.model.js";

export let buildSpotMenuArcherTowerIcon;
export let buildSpotMenuWizardTowerIcon;
export let buildSpotMenuCannonTowerIcon;
export let buildSpotMenuGroundTowerIcon;
export let buildSpotMenuBarrackTowerIcon;
export let buildSpotMenuFireTowerIcon;
export let equippedTowersIcon;

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
  buildSpotMenuCannonTowerIcon = new Icon(
    0,
    0,
    theImgbuildSpotMenuCannonIcon,
    "",
    50,
    50,
    true,
    "",
    "buildSpotMenuCannonTowerIcon"
  );
  buildSpotMenuGroundTowerIcon = new Icon(
    0,
    0,
    theImgbuildSpotMenuGroundIcon,
    "",
    50,
    50,
    true,
    "",
    "buildSpotMenuGroundTowerIcon"
  );
  buildSpotMenuBarrackTowerIcon = new Icon(
    0,
    0,
    theImgbuildSpotMenuBarrackIcon,
    "",
    50,
    50,
    true,
    "",
    "buildSpotMenuBarrackTowerIcon"
  );
  buildSpotMenuFireTowerIcon = new Icon(
    0,
    0,
    theImgbuildSpotMenuFireIcon,
    "",
    50,
    50,
    true,
    "",
    "buildSpotMenuFireTowerIcon"
  );

  equippedTowersIcon = new Icon(
    482,
    155,
    null,
    blackMask,
    135,
    28,
    false,
    "Tours équippées",
    "equippedTowersIcon"
  );
};

import {
  theArcherTowerAvailable,
  theLeftArrow,
  theOpenAvailableTowerMenuIcon,
  theReturn,
  theRightArrow,
  theWizardTowerAvailable,
} from "../../../assets/icon.asset.js";
import { Icon } from "../icon.model.js";

export let archerTowerAvailableIcon;
export let openAvailableTowerMenuIcon;
export let wizardTowerAvailableIcon;
export let leftArrow;
export let rightArrow;
export let closeArrow;

export const initAvailableTowerMenuIcons = async () => {
  archerTowerAvailableIcon = new Icon(
    140,
    140,
    theArcherTowerAvailable,
    "transparent",
    80,
    80,
    true,
    "",
    "archerTowerAvailableIcon"
  );
  wizardTowerAvailableIcon = new Icon(
    140,
    140,
    theWizardTowerAvailable,
    "transparent",
    80,
    80,
    true,
    "",
    "wizardTowerAvailableIcon"
  );
  openAvailableTowerMenuIcon = new Icon(
    615,
    90,
    theOpenAvailableTowerMenuIcon,
    "transparent",
    60,
    60,
    true,
    "",
    "openAvailableTowerMenu"
  );
  leftArrow = new Icon(
    50,
    150,
    theLeftArrow,
    "transparent",
    60,
    60,
    true,
    "",
    "leftArrow"
  );
  rightArrow = new Icon(
    250,
    150,
    theRightArrow,
    "transparent",
    60,
    60,
    true,
    "",
    "rightArrow"
  );
  closeArrow = new Icon(
    620,
    50,
    theReturn,
    "transparent",
    60,
    60,
    true,
    "",
    "closeArrow"
  );
};

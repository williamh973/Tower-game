import {
  theArcherTowerAvailable,
  theBarrackTowerAvailable,
  theCannonTowerAvailable,
  theFireTowerAvailable,
  theGroundTowerAvailable,
  theOpenAvailableTowerMenuIcon,
  theWizardTowerAvailable,
} from "../../../../assets/icon.asset.js";
import { Icon } from "../../icon.model.js";
import { AvailableTowerIcon } from "./availableTowerIcon.model.js";

export let archerTowerAvailableIcon;
export let openAvailableTowerMenuIcon;
export let wizardTowerAvailableIcon;
export let cannonTowerAvailableIcon;
export let groundTowerAvailableIcon;
export let barrackTowerAvailableIcon;
export let fireTowerAvailableIcon;

export const initAvailableTowerMenuIcons = async () => {
  archerTowerAvailableIcon = new AvailableTowerIcon(
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
  wizardTowerAvailableIcon = new AvailableTowerIcon(
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
  cannonTowerAvailableIcon = new AvailableTowerIcon(
    140,
    140,
    theCannonTowerAvailable,
    "transparent",
    80,
    80,
    true,
    "",
    "cannonTowerAvailableIcon"
  );
  groundTowerAvailableIcon = new AvailableTowerIcon(
    140,
    140,
    theGroundTowerAvailable,
    "transparent",
    80,
    80,
    true,
    "",
    "groundTowerAvailableIcon"
  );
  barrackTowerAvailableIcon = new AvailableTowerIcon(
    140,
    140,
    theBarrackTowerAvailable,
    "transparent",
    80,
    80,
    true,
    "",
    "barrackTowerAvailableIcon"
  );
  fireTowerAvailableIcon = new AvailableTowerIcon(
    140,
    140,
    theFireTowerAvailable,
    "transparent",
    80,
    80,
    true,
    "",
    "fireTowerAvailableIcon"
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
    "openTowerSetupMenu"
  );
};

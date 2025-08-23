import {
  theOpenAvailableTowerMenuIcon,
  theStepOneIcon,
} from "../../../assets/icon.asset.js";
import { Icon } from "../icon.model.js";

export let openTowerSetupMenuIcon;
export let stepOneIcon;

export const initDashboardIcons = async () => {
  openTowerSetupMenuIcon = new Icon(
    615,
    90,
    theOpenAvailableTowerMenuIcon,
    "transparent",
    60,
    60,
    true,
    "",
    "openTowerSetupMenuIcon"
  );
  stepOneIcon = new Icon(
    0,
    0,
    theStepOneIcon,
    null,
    54,
    57,
    true,
    null,
    "stepOneIcon"
  );
};

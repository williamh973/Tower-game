import {
  theTowerStatDamageIcon,
  theTowerStatRangeIcon,
  theTowerStatRateIcon,
} from "../../../../assets/icon.asset.js";
import { Icon } from "../../icon.model.js";

export let damageStatIcon;
export let rateStatIcon;
export let rangeStatIcon;

export const initTowerStatIcons = async () => {
  const posY = 413;
  damageStatIcon = new Icon(
    50,
    posY,
    theTowerStatDamageIcon,
    null,
    12,
    17,
    false,
    "",
    "towerStatDamageIcon"
  );

  rateStatIcon = new Icon(
    147,
    posY,
    theTowerStatRateIcon,
    null,
    12,
    17,
    false,
    "",
    "towerStatRateIcon"
  );

  rangeStatIcon = new Icon(
    245,
    posY,
    theTowerStatRangeIcon,
    null,
    17,
    17,
    false,
    "",
    "towerStatRangeIcon"
  );
};

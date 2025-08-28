import { theTowerStatDamageIcon } from "../../../../assets/icon.asset.js";
import { Icon } from "../../icon.model.js";

export let damageStatIcon;

export const initTowerStatIcons = async () => {
  damageStatIcon = new Icon(
    50,
    400,
    theTowerStatDamageIcon,
    null,
    14,
    19,
    false,
    "",
    "towerStatDamageIcon"
  );
};

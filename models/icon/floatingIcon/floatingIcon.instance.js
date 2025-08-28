import { blackMask } from "../../../shared/utils.js";
import { FloatingIcon } from "./floatingIcon.model.js";

export let inventoryDuplicataIcon;

export const initFloatingIcons = async () => {
  inventoryDuplicataIcon = new FloatingIcon(
    0,
    0,
    null,
    blackMask,
    50,
    400,
    false,
    "",
    ""
  );
};

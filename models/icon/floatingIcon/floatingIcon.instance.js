import { blackMask } from "../../../shared/utils.js";
import { FloatingIcon } from "./floatingIcon.model.js";

export let toast;

export const initFloatingIcons = async () => {
  toast = new FloatingIcon(0, 0, null, blackMask, 50, 400, false, "", "toast");
};

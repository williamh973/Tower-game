import { theStepOneIcon } from "../../../assets/icon.asset.js";
import { Icon } from "../icon.model.js";

export let stepOneIcon;

export const initCampaignStepIcons = async () => {
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

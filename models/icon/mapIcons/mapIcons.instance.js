import {
  theGoldCoinIcon,
  theStartWaveIcon,
} from "../../../assets/icon.asset.js";
import { blackMask } from "../../../shared/utils.js";
import { Icon } from "../icon.model.js";
import { StartWaveIcon } from "../startWaveIcon/startWaveIcon.model.js";

export let lifeHudMask;
export let goldHudMask;
export let waveHudMask;
export let pauseDisplay;
export let startWaveIcon;
export let goldCoinIcon;

export const initMapIcons = async () => {
  lifeHudMask = new Icon(5, 5, null, blackMask, 52, 25, false, "", "lifeIcon");
  goldHudMask = new Icon(65, 5, null, blackMask, 80, 25, false, "", "goldIcon");
  waveHudMask = new Icon(
    5,
    35,
    null,
    blackMask,
    140,
    25,
    false,
    "",
    "waveIcon"
  );
  pauseDisplay = new Icon(
    330,
    5,
    null,
    blackMask,
    26,
    26,
    true,
    "",
    "pauseIcon"
  );
  startWaveIcon = new StartWaveIcon(
    159,
    5,
    theStartWaveIcon,
    "transparent",
    35,
    35,
    true,
    "",
    "startWaveIcon"
  );
  goldCoinIcon = new Icon(
    70,
    6,
    theGoldCoinIcon,
    "transparent",
    25,
    22,
    true,
    "",
    "goldCoinIcon"
  );
};

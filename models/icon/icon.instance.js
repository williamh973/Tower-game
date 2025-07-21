import { theGoldCoinIcon, theStartWaveIcon } from "../../assets/icon.asset.js";
import { Icon } from "./icon.model.js";

export let lifeHudMask;
export let goldHudMask;
export let waveHudMask;
export let pauseDisplay;
export let startWaveIcon;
export let goldCoinIcon;
export let hardDifficultyIcon;
export let mediumDifficultyIcon;
export let easyDifficultyIcon;

export function initHUDIcons() {
  const blackMask = "rgba(0, 0, 0, 0.75)";
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
  startWaveIcon = new Icon(
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
  hardDifficultyIcon = new Icon(
    250,
    315,
    null,
    null,
    80,
    80,
    true,
    null,
    "hardDifficultyIcon"
  );

  mediumDifficultyIcon = new Icon(
    150,
    315,
    null,
    null,
    80,
    80,
    true,
    null,
    "mediumDifficultyIcon"
  );
  easyDifficultyIcon = new Icon(
    50,
    315,
    null,
    null,
    80,
    80,
    true,
    null,
    "easyDifficultyIcon"
  );
}

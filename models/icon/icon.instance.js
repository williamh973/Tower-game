import { theStartWaveIcon } from "../../assets/icon.asset.js";
import { Icon } from "./icon.model.js";
import { gameVariable } from "../../gameVariable.js";

export let lifeDisplay;
export let goldDisplay;
export let waveDisplay;
export let pauseDisplay;
export let startWaveIcon;
export let hardDifficultyIcon;
export let mediumDifficultyIcon;
export let easyDifficultyIcon;

export function initHUDIcons() {
    const blackMask = "rgba(0, 0, 0, 0.75)";
    lifeDisplay = new Icon(
        5,
        5,
        null,
        blackMask,
        52,
        25,
        false,
        "",
        "lifeIcon"
    );
    goldDisplay = new Icon(
        65,
        5,
        null,
        blackMask,
        80,
        25,
        false,
        "",
        "goldIcon"
    );
    waveDisplay = new Icon(
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
        165,
        5,
        theStartWaveIcon,
        "transparent",
        35,
        35,
        true,
        "",
        "startWaveIcon"
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

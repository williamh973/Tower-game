import { canvas } from "./animate.js";
import { initWave } from "./spawnHandle/campaign/step/wave/wave.js";
import { startWaveIcon } from "./models/icon/icon.instance.js";
import { gameVariable } from "./gameVariable.js";
import { togglePause } from "./gamePauseHandle.js";
import { openBuildSpotMenu } from "./spawnHandle/buildSpot/buildSpotMenu.js";
import { playerBuildTower } from "./spawnHandle/tower.js";
import { player } from "./models/player.model.js";

canvas.addEventListener(
    "touchstart",
    event => {
        event.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const touch = event.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        handleClick(x, y);
    },
    { passive: false }
);

canvas.addEventListener("click", event => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    handleClick(x, y);
});

function handleClick(x, y) {
    for (const icon of gameVariable.ui.iconList) {
        if (icon.isClicked(x, y)) {
            switch (icon.name) {
                case "easyDifficultyIcon":
                    gameVariable.game.setGameDifficulty("easy");
                    break;
                case "mediumDifficultyIcon":
                    gameVariable.game.setGameDifficulty("medium");
                    break;
                case "hardDifficultyIcon":
                    gameVariable.game.setGameDifficulty("hard");
                    break;

                case "startWaveIcon":
                    initWave(icon);
                    break;
                case "pauseIcon":
                    togglePause(icon);
                    break;

                default:
                    break;
            }
            break;
        }
    }

    for (const spot of gameVariable.tower.buildSpotList) {
        if (spot.isClicked(x, y)) {
            if (!spot.isOccupied && player.isCanBuildTower) {
                openBuildSpotMenu(spot);
            } else {
            }
        }
    }

    for (const buildSpotTowerIcon of gameVariable.ui.buildSpotIconList) {
        if (buildSpotTowerIcon.isClicked(x, y)) {
            playerBuildTower(buildSpotTowerIcon);
        }
    }
    //  console.log(gameVariable.game.difficulty);
}

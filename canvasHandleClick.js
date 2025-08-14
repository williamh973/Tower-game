import { canvas } from "./animate.js";
import { initWave } from "./spawnHandle/campaign/step/wave/wave.js";
import { gameVariable } from "./gameVariable.js";
import { togglePause } from "./gamePauseHandle.js";
import { openBuildSpotMenu } from "./spawnHandle/buildSpot/buildSpotMenu.js";
import { playerBuildTower } from "./spawnHandle/tower.js";
import { player } from "./models/player.model.js";
import { hasClicked } from "./shared/methodsUtils.js";
import {
  closeAvailableTowerMenu,
  openAvailableTowerMenu,
} from "./menus/availableTowerMenu/availableTowerMenu.js";
import {
  availableTowerMenuNextStep,
  availableTowerMenuPrevStep,
} from "./menus/availableTowerMenu/handleCarouselSteps.js";
import { buildSpotMenu } from "./models/selectionScreen/selectionScreen.instance.js";
import {
  archerTower,
  barrackTower,
  cannonTower,
  fireTower,
  groundTower,
  wizardTower,
} from "./models/building/building.instance.js";

canvas.addEventListener(
  "touchstart",
  (event) => {
    event.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const touch = event.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    handleClick(x, y);
  },
  { passive: false }
);

canvas.addEventListener("click", (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  handleClick(x, y);
});

const handleClick = async (x, y) => {
  for (const icon of gameVariable.campaign.stepIconList) {
    if (
      hasClicked(
        x,
        y,
        icon.position.x,
        icon.position.y,
        icon.width,
        icon.height
      )
    ) {
      switch (icon.name) {
        case "stepOneIcon":
          loadCampaignStep();
          break;

        default:
          break;
      }
    }
  }

  for (const icon of gameVariable.ui.iconList) {
    if (
      hasClicked(
        x,
        y,
        icon.position.x,
        icon.position.y,
        icon.width,
        icon.height
      )
    ) {
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
        case "openAvailableTowerMenu":
          openAvailableTowerMenu(icon);
          break;
        case "closeArrow":
          closeAvailableTowerMenu();
          break;
        case "rightArrow":
          availableTowerMenuNextStep(icon);
          break;
        case "leftArrow":
          availableTowerMenuPrevStep(icon);
          break;
        case "startWaveIcon":
          await initWave(icon);
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

  let selectedIcon =
    gameVariable.preparation.availableTowerList[
      gameVariable.preparation.currentTowerIndex
    ];

  if (
    gameVariable.preparation.isAvailableTowersMenuOpen &&
    hasClicked(
      x,
      y,
      selectedIcon.position.x,
      selectedIcon.position.y,
      selectedIcon.width,
      selectedIcon.height
    ) &&
    selectedIcon.isClickable
  ) {
    switch (gameVariable.preparation.currentTowerIndex) {
      case 0:
        buildSpotMenu.activateGhostMod(archerTower, selectedIcon);
        break;
      case 1:
        buildSpotMenu.activateGhostMod(wizardTower, selectedIcon);
        break;
      case 2:
        buildSpotMenu.activateGhostMod(cannonTower, selectedIcon);
        break;
      case 3:
        buildSpotMenu.activateGhostMod(groundTower, selectedIcon);
        break;
      case 4:
        buildSpotMenu.activateGhostMod(barrackTower, selectedIcon);
        break;
      case 5:
        buildSpotMenu.activateGhostMod(fireTower, selectedIcon);
        break;
      default:
        break;
    }
  }

  for (const spot of gameVariable.tower.buildSpotList) {
    if (
      hasClicked(
        x,
        y,
        spot.position.x,
        spot.position.y,
        spot.width,
        spot.height
      ) &&
      !spot.isOccupied &&
      player.isCanBuildTower
    ) {
      openBuildSpotMenu(spot);
    }
  }

  if (gameVariable.preparation.isGhostedMod) {
    for (const slot of buildSpotMenu.buildMenuSlots) {
      if (
        hasClicked(
          x,
          y,
          slot.position.x,
          slot.position.y,
          slot.width,
          slot.height
        )
      ) {
        slot.addTowerIconToSlot(
          slot,
          selectedIcon,
          buildSpotMenu.remainingBuildMenuSlots
        );
      }
    }
  }

  for (const buildSpotTowerIcon of gameVariable.tower.buildSpotMenuSlotList) {
    if (
      hasClicked(
        x,
        y,
        buildSpotTowerIcon.position.x,
        buildSpotTowerIcon.position.y,
        buildSpotTowerIcon.width,
        buildSpotTowerIcon.height
      )
    ) {
      playerBuildTower(buildSpotTowerIcon);
    }
  }
};

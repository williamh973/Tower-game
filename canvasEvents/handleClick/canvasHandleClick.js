import { canvas } from "../../../../animate.js";
import { initWave } from "../../../../spawnHandle/campaign/step/wave/wave.js";
import { gameVariable } from "../../../../gameVariable.js";
import { togglePause } from "../../../../gamePauseHandle.js";
import { openBuildSpotMenu } from "../../../../spawnHandle/buildSpot/buildSpotMenu.js";
import { playerBuildTower } from "../../../../spawnHandle/tower.js";
import { player } from "../../../../models/player.model.js";
import { isHovering, mouseDetect, x, y } from "../../../../shared/utils.js";
import {
  closeAvailableTowerMenu,
  openAvailableTowerMenu,
} from "../../../../menus/availableTowerMenu/availableTowerMenu.js";
import {
  availableTowerMenuNextStep,
  availableTowerMenuPrevStep,
} from "../../../../menus/availableTowerMenu/handleCarouselSteps.js";
import { buildSpotMenu } from "../../../../models/selectionScreen/selectionScreen.instance.js";
import {
  archerTower,
  barrackTower,
  cannonTower,
  fireTower,
  groundTower,
  wizardTower,
} from "../../../../models/building/building.instance.js";

canvas.addEventListener("click", (event) => {
  mouseDetect(event);
  handleClick();
});

canvas.addEventListener("mousemove", (event) => {
  mouseDetect(event);
  handleHover();
});

const handleHover = async () => {
  let isHover = false;
  for (const icon of gameVariable.ui.iconList) {
    if (
      isHovering(
        x,
        y,
        icon.position.x,
        icon.position.y,
        icon.width,
        icon.height
      )
    ) {
      isHover = true;
      break;
    } else {
      isHover = false;
    }
  }
  isHover
    ? (canvas.style.cursor = "pointer")
    : (canvas.style.cursor = "default");
};

const handleClick = async () => {
  for (const icon of gameVariable.campaign.stepIconList) {
    if (
      isHovering(
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
      isHovering(
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
          closeAvailableTowerMenu(icon);
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
    isHovering(
      x,
      y,
      selectedIcon.position.x,
      selectedIcon.position.y,
      selectedIcon.width,
      selectedIcon.height
    ) &&
    selectedIcon.isClickable
  ) {
    selectedIcon.isActivated = true;

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
      isHovering(
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

  const isCheckAvalaibleTowerIconClickable = () => {
    // buildSpotMenu.buildMenuSlots.find((slot) => {
    //   gameVariable.preparation.availableTowerList.find((avalaibleIcon) => {
    //     if (slot.towerIcon && avalaibleIcon.ghostTowerIcon) {
    //       if (slot.towerIcon.name === avalaibleIcon.ghostTowerIcon.name) {
    //         gameVariable.preparation.availableTowerList.every((avalaibleTower) => {
    //         })
    //       }
    //     }
    //   });
    // });
  };
  // const NotClickableIconFounded = !icon.isClickable;
  // if (NotClickableIconFounded) {
  //   console.log(slot.towerIcon);
  // }

  if (gameVariable.preparation.isGhostedMod) {
    for (const slot of buildSpotMenu.buildMenuSlots) {
      if (
        isHovering(
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
        isCheckAvalaibleTowerIconClickable();
      }
    }
  }

  for (const buildSpotTowerIcon of gameVariable.tower.buildSpotMenuSlotList) {
    if (
      isHovering(
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

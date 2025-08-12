import { gameVariable } from "../gameVariable.js";
import { closeBuildSpotMenu } from "../spawnHandle/buildSpot/buildSpotMenu.js";
import { substractPlayerGold } from "../playerActions.js";
import {
  archerTower,
  barrackTower,
  cannonTower,
  crackTower,
  fireTower,
  wizardTower,
} from "../models/building/building.instance.js";

export const playerBuildTower = (buildSpotTowerIcon) => {
  const tower = {
    position: {
      x:
        buildSpotTowerIcon.associatedBuildSpot.position.x -
        buildSpotTowerIcon.associatedBuildSpot.width / 2,
      y:
        buildSpotTowerIcon.associatedBuildSpot.position.y -
        buildSpotTowerIcon.associatedBuildSpot.height / 1.3,
    },
    width: 60,
    height: 60,
  };

  switch (buildSpotTowerIcon.name) {
    case "buildSpotArcherIcon":
      if (gameVariable.player.goldCoin >= archerTower.price) {
        gameVariable.tower.placedTowerList.push(archerTower);
        archerTower.isUnderConstruction();

        buildSpotTowerIcon.associatedBuildSpot.build(archerTower);

        substractPlayerGold(archerTower.price);
      }
      break;

    case "buildSpotWizardIcon":
      if (gameVariable.player.goldCoin >= wizardTower.price) {
        gameVariable.tower.placedTowerList.push(wizardTower);
        wizardTower.isUnderConstruction();

        buildSpotTowerIcon.associatedBuildSpot.build(wizardTower);
        substractPlayerGold(wizardTower.price);
      }
      break;

    case "buildSpotCannonIcon":
      if (gameVariable.player.goldCoin >= cannonTower.price) {
        gameVariable.tower.placedTowerList.push(cannonTower);
        cannonTower.isUnderConstruction();

        buildSpotTowerIcon.associatedBuildSpot.build(cannonTower);

        substractPlayerGold(cannonTower.price);
      }
      break;

    case "buildSpotFireIcon":
      if (gameVariable.player.goldCoin >= fireTower.price) {
        gameVariable.tower.placedTowerList.push(fireTower);
        fireTower.isUnderConstruction();

        buildSpotTowerIcon.associatedBuildSpot.build(fireTower);

        substractPlayerGold(fireTower.price);
      }
      break;

    case "buildSpotBarrackIcon":
      if (gameVariable.player.goldCoin >= barrackTower.price) {
        gameVariable.tower.placedTowerList.push(barrackTower);
        barrackTower.isUnderConstruction();

        buildSpotTowerIcon.associatedBuildSpot.build(barrackTower);

        substractPlayerGold(barrackTower.price);
      }
      break;

    case "buildSpotCrackIcon":
      if (gameVariable.player.goldCoin >= crackTower.price) {
        gameVariable.tower.placedTowerList.push(crackTower);
        crackTower.isUnderConstruction();

        buildSpotTowerIcon.associatedBuildSpot.build(crackTower);

        substractPlayerGold(crackTower.price);
      }
      break;
  }

  gameVariable.ui.selectionScreenList.find((selectionScreen) => {
    gameVariable.ui.isBuildSpotMenuOpen = !gameVariable.ui.isBuildSpotMenuOpen;
    closeBuildSpotMenu(selectionScreen);
  });
};

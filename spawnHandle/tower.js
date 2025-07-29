import { Building } from "../models/building/building.model.js";
import { gameVariable } from "../gameVariable.js";
import { closeBuildSpotMenu } from "../spawnHandle/buildSpot/buildSpotMenu.js";
import {
  theImgArcherTower,
  theImgWizardTower,
  theImgFireTower,
  theImgCannonTower,
} from "..//assets/tower.asset.js";
import { substractPlayerGold } from "../playerActions.js";

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
      let archerTower = new Building(
        tower.position,
        tower.width,
        tower.height,
        theImgArcherTower,
        "normal",
        "archer",
        120,
        70,
        Math.random() * (6 - 4 + 1) + 4,
        1500,
        false
      );

      if (gameVariable.player.goldCoin >= archerTower.price) {
        gameVariable.tower.placedTowerList.push(archerTower);
        archerTower.isUnderConstruction();

        buildSpotTowerIcon.associatedBuildSpot.build(archerTower);

        substractPlayerGold(archerTower.price);
      }
      break;

    case "buildSpotWizardIcon":
      let wizardTower = new Building(
        tower.position,
        tower.width,
        tower.height,
        theImgWizardTower,
        "magic",
        "wizard",
        100,
        90,
        Math.random() * (17 - 9 + 1) + 9,
        2700,
        false
      );
      if (gameVariable.player.goldCoin >= wizardTower.price) {
        gameVariable.tower.placedTowerList.push(wizardTower);
        wizardTower.isUnderConstruction();

        buildSpotTowerIcon.associatedBuildSpot.build(wizardTower);
        substractPlayerGold(wizardTower.price);
      }
      break;

    case "buildSpotCannonIcon":
      let cannonTower = new Building(
        tower.position,
        tower.width,
        tower.height,
        theImgCannonTower,
        "artillery",
        "cannon",
        120,
        120,
        Math.random() * (17 - 9 + 1) + 9,
        3000,
        true
      );
      if (gameVariable.player.goldCoin >= cannonTower.price) {
        gameVariable.tower.placedTowerList.push(cannonTower);
        cannonTower.isUnderConstruction();

        buildSpotTowerIcon.associatedBuildSpot.build(cannonTower);

        substractPlayerGold(cannonTower.price);
      }
      break;

    case "buildSpotFireIcon":
      let fireTower = new Building(
        tower.position,
        tower.width,
        tower.height,
        theImgFireTower,
        "fire",
        "fire",
        90,
        100,
        Math.random() * 3 + 1,
        50,
        true
      );

      if (gameVariable.player.goldCoin >= fireTower.price) {
        gameVariable.tower.placedTowerList.push(fireTower);
        fireTower.isUnderConstruction();

        buildSpotTowerIcon.associatedBuildSpot.build(fireTower);

        substractPlayerGold(fireTower.price);
      }
      break;
  }

  gameVariable.ui.selectionScreenList.find((selectionScreen) => {
    gameVariable.ui.isBuildSpotMenuOpen = !gameVariable.ui.isBuildSpotMenuOpen;
    closeBuildSpotMenu(selectionScreen);
  });
};

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
  switch (buildSpotTowerIcon.name) {
    case "buildSpotArcherIcon":
      let archerTower = new Building(
        {
          x: buildSpotTowerIcon.associatedBuildSpot.position.x,
          y: buildSpotTowerIcon.associatedBuildSpot.position.y,
        },
        60,
        60,
        theImgArcherTower,
        "normal",
        "archer",
        120,
        70,
        Math.random() * (6 - 4 + 1) + 4,
        1000,
        false
      );

      if (gameVariable.playerStats.goldCoin >= archerTower.price) {
        gameVariable.tower.towerList.push(archerTower);
        archerTower.isUnderConstruction();

        buildSpotTowerIcon.associatedBuildSpot.build(archerTower);

        substractPlayerGold(archerTower.price);
      }
      break;

    case "buildSpotWizardIcon":
      let wizardTower = new Building(
        {
          x: buildSpotTowerIcon.associatedBuildSpot.position.x,
          y: buildSpotTowerIcon.associatedBuildSpot.position.y,
        },
        60,
        60,
        theImgWizardTower,
        "magic",
        "wizard",
        120,
        90,
        Math.random() * (17 - 9 + 1) + 9,
        1700,
        false
      );
      if (gameVariable.playerStats.goldCoin >= wizardTower.price) {
        gameVariable.tower.towerList.push(wizardTower);
        wizardTower.isUnderConstruction();

        buildSpotTowerIcon.associatedBuildSpot.build(wizardTower);
        substractPlayerGold(wizardTower.price);
      }
      break;

    case "buildSpotCannonIcon":
      let cannonTower = new Building(
        {
          x: buildSpotTowerIcon.associatedBuildSpot.position.x,
          y: buildSpotTowerIcon.associatedBuildSpot.position.y,
        },
        60,
        60,
        theImgCannonTower,
        "artillery",
        "cannon",
        120,
        120,
        Math.random() * (17 - 9 + 1) + 9,
        3000,
        true
      );
      if (gameVariable.playerStats.goldCoin >= cannonTower.price) {
        gameVariable.tower.towerList.push(cannonTower);
        cannonTower.isUnderConstruction();

        buildSpotTowerIcon.associatedBuildSpot.build(cannonTower);

        substractPlayerGold(cannonTower.price);
      }
      break;

    case "buildSpotFireIcon":
      let fireTower = new Building(
        {
          x: buildSpotTowerIcon.associatedBuildSpot.position.x,
          y: buildSpotTowerIcon.associatedBuildSpot.position.y,
        },
        60,
        60,
        theImgFireTower,
        "fire",
        "fire",
        120,
        100,
        Math.random() * 3 + 1,
        250,
        true
      );

      if (gameVariable.playerStats.goldCoin >= fireTower.price) {
        gameVariable.tower.towerList.push(fireTower);
        fireTower.isUnderConstruction();

        buildSpotTowerIcon.associatedBuildSpot.build(fireTower);

        substractPlayerGold(fireTower.price);
      }
      break;
  }
  closeBuildSpotMenu();
};

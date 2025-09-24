import { gameVariable } from "../gameVariable.js";
import { closeBuildSpotMenu } from "../spawnHandle/buildSpot/buildSpotMenu.js";
import {
  archerTower,
  barrackTower,
  cannonTower,
  fireTower,
  groundTower,
  wizardTower,
} from "../models/building/building.instance.js";
import { towerSetupMenu } from "../models/selectionScreen/selectionScreen.instance.js";

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
      if (gameVariable.game.player.gold >= archerTower.price) {
        gameVariable.tower.placedTowerList.push(archerTower);
        archerTower.isUnderConstruction();

        buildSpotTowerIcon.associatedBuildSpot.build(archerTower);

        gameVariable.game.player.substractGold(archerTower.price);
      }
      break;

    case "buildSpotWizardIcon":
      if (gameVariable.game.player.gold >= wizardTower.price) {
        gameVariable.tower.placedTowerList.push(wizardTower);
        wizardTower.isUnderConstruction();

        buildSpotTowerIcon.associatedBuildSpot.build(wizardTower);
        gameVariable.game.player.substractGold(wizardTower.price);
      }
      break;

    case "buildSpotCannonIcon":
      if (gameVariable.game.player.gold >= cannonTower.price) {
        gameVariable.tower.placedTowerList.push(cannonTower);
        cannonTower.isUnderConstruction();

        buildSpotTowerIcon.associatedBuildSpot.build(cannonTower);

        gameVariable.game.player.substractGold(cannonTower.price);
      }
      break;

    case "buildSpotFireIcon":
      if (gameVariable.game.player.gold >= fireTower.price) {
        gameVariable.tower.placedTowerList.push(fireTower);
        fireTower.isUnderConstruction();

        buildSpotTowerIcon.associatedBuildSpot.build(fireTower);

        gameVariable.game.player.substractGold(fireTower.price);
      }
      break;

    case "buildSpotBarrackIcon":
      if (gameVariable.game.player.gold >= barrackTower.price) {
        gameVariable.tower.placedTowerList.push(barrackTower);
        barrackTower.isUnderConstruction();

        buildSpotTowerIcon.associatedBuildSpot.build(barrackTower);

        gameVariable.game.player.substractGold(barrackTower.price);
      }
      break;

    case "buildSpotCrackIcon":
      if (gameVariable.game.player.gold >= groundTower.price) {
        gameVariable.tower.placedTowerList.push(groundTower);
        groundTower.isUnderConstruction();

        buildSpotTowerIcon.associatedBuildSpot.build(groundTower);

        gameVariable.game.player.substractGold(groundTower.price);
      }
      break;
  }

  gameVariable.game.selectionScreenList.find((selectionScreen) => {
    towerSetupMenu.isOpen = !towerSetupMenu.isOpen;
    closeBuildSpotMenu(selectionScreen);
  });
};

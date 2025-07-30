import { gameVariable } from "../../gameVariable.js";

export const availableTowerMenuNextStep = () => {
  gameVariable.preparation.currentTowerIndex =
    (gameVariable.preparation.currentTowerIndex + 1) %
    gameVariable.preparation.availableTowerList.length;
};

export const availableTowerMenuPrevStep = () => {
  gameVariable.preparation.currentTowerIndex =
    (gameVariable.preparation.currentTowerIndex -
      1 +
      gameVariable.preparation.availableTowerList.length) %
    gameVariable.preparation.availableTowerList.length;
};

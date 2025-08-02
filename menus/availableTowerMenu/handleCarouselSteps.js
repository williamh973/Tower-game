import { gameVariable } from "../../gameVariable.js";

export const availableTowerMenuNextStep = (icon) => {
  icon.isActivated = true;
  const currentIndex = gameVariable.preparation.currentTowerIndex;

  gameVariable.preparation.currentTowerIndex =
    (currentIndex + 1) % gameVariable.preparation.availableTowerList.length;
};

export const availableTowerMenuPrevStep = (icon) => {
  icon.isActivated = true;
  const currentIndex = gameVariable.preparation.currentTowerIndex;

  gameVariable.preparation.currentTowerIndex =
    (currentIndex - 1 + gameVariable.preparation.availableTowerList.length) %
    gameVariable.preparation.availableTowerList.length;
};

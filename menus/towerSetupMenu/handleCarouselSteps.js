import { gameVariable } from "../../gameVariable.js";
import { towerSetupMenu } from "../../models/selectionScreen/selectionScreen.instance.js";

export const availableTowerMenuNextStep = (icon) => {
  icon.isActivated = true;
  const currentIndex = towerSetupMenu.currentTowerIndex;

  towerSetupMenu.currentTowerIndex =
    (currentIndex + 1) % towerSetupMenu.availableTowerIcons.length;
};

export const availableTowerMenuPrevStep = (icon) => {
  icon.isActivated = true;
  const currentIndex = towerSetupMenu.currentTowerIndex;

  towerSetupMenu.currentTowerIndex =
    (currentIndex - 1 + towerSetupMenu.availableTowerIcons.length) %
    towerSetupMenu.availableTowerIcons.length;
};

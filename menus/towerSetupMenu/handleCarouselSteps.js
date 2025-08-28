import { towerSetupMenu } from "../../models/selectionScreen/selectionScreen.instance.js";

export const availableTowerMenuNextStep = (icon, currentIndex) => {
  icon.isActivated = true;
  towerSetupMenu.currentTowerIndex =
    (currentIndex + 1) % towerSetupMenu.availableTowerIcons.length;
};

export const availableTowerMenuPrevStep = (icon, currentIndex) => {
  icon.isActivated = true;
  towerSetupMenu.currentTowerIndex =
    (currentIndex - 1 + towerSetupMenu.availableTowerIcons.length) %
    towerSetupMenu.availableTowerIcons.length;
};

import { TowerDetailsIcon } from "./towerDetailsIcon.model.js";

export let archerDetailsIcon;
export let wizardDetailsIcon;
export let cannonDetailsIcon;
export let groundDetailsIcon;
export let fireDetailsIcon;
export let barrackDetailsIcon;

export const initTowerDetailsIcons = async () => {
  const blackMask = "rgba(0, 0, 0, 0.20)";
  archerDetailsIcon = new TowerDetailsIcon(
    40,
    260,
    null,
    blackMask,
    280,
    180,
    false,
    "Archer",
    "Description de la tour",
    "archerDetailsIcon"
  );
  wizardDetailsIcon = new TowerDetailsIcon(
    40,
    260,
    null,
    blackMask,
    280,
    180,
    false,
    "Sorcier",
    "Description de la tour",
    "archerDetailsIcon"
  );
  cannonDetailsIcon = new TowerDetailsIcon(
    40,
    260,
    null,
    blackMask,
    280,
    180,
    false,
    "Canon",
    "Description de la tour",
    "cannonDetailsIcon"
  );
  groundDetailsIcon = new TowerDetailsIcon(
    40,
    260,
    null,
    blackMask,
    280,
    180,
    false,
    "Sol",
    "Description de la tour",
    "groundDetailsIcon"
  );
  fireDetailsIcon = new TowerDetailsIcon(
    40,
    260,
    null,
    blackMask,
    280,
    180,
    false,
    "Feu",
    "Description de la tour",
    "fireDetailsIcon"
  );
  barrackDetailsIcon = new TowerDetailsIcon(
    40,
    260,
    null,
    blackMask,
    280,
    180,
    false,
    "Caserne",
    "Description de la tour",
    "barrackDetailsIcon"
  );
};

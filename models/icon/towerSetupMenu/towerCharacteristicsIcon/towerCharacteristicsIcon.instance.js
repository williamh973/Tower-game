import { TowerCharacteristicsIcon } from "./towerCharacteristicsIcon.model.js";

export let archerCharacteristicsIcon;
export let wizardCharacteristicsIcon;
export let cannonCharacteristicsIcon;
export let groundCharacteristicsIcon;
export let fireCharacteristicsIcon;
export let barrackCharacteristicsIcon;

export const initTowerCharacteristicsIcons = async () => {
  const blackMask = "rgba(0, 0, 0, 0.50)";
  archerCharacteristicsIcon = new TowerCharacteristicsIcon(
    40,
    260,
    null,
    blackMask,
    280,
    180,
    false,
    "Archer",
    "Description de la tour",
    "archerCharacteristicsIcon"
  );
  wizardCharacteristicsIcon = new TowerCharacteristicsIcon(
    40,
    260,
    null,
    blackMask,
    280,
    180,
    false,
    "Sorcier",
    "Description de la tour",
    "archerCharacteristicsIcon"
  );
  cannonCharacteristicsIcon = new TowerCharacteristicsIcon(
    40,
    260,
    null,
    blackMask,
    280,
    180,
    false,
    "Canon",
    "Description de la tour",
    "cannonCharacteristicsIcon"
  );
  groundCharacteristicsIcon = new TowerCharacteristicsIcon(
    40,
    260,
    null,
    blackMask,
    280,
    180,
    false,
    "Sol",
    "Description de la tour",
    "groundCharacteristicsIcon"
  );
  fireCharacteristicsIcon = new TowerCharacteristicsIcon(
    40,
    260,
    null,
    blackMask,
    280,
    180,
    false,
    "Feu",
    "Description de la tour",
    "fireCharacteristicsIcon"
  );
  barrackCharacteristicsIcon = new TowerCharacteristicsIcon(
    40,
    260,
    null,
    blackMask,
    280,
    180,
    false,
    "Caserne",
    "Description de la tour",
    "barrackCharacteristicsIcon"
  );
};

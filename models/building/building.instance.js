import {
  theImgArcherTower,
  theImgCannonTower,
  theImgFireTower,
  theImgGroundTower,
  theImgWizardTower,
} from "../../assets/tower.asset.js";
import {
  archerTowerAvailableIcon,
  barrackTowerAvailableIcon,
  cannonTowerAvailableIcon,
  fireTowerAvailableIcon,
  groundTowerAvailableIcon,
  wizardTowerAvailableIcon,
} from "../icon/availableTowersMenu/availableTowersMenuIcons.instance.js";
import {
  buildSpotMenuArcherTowerIcon,
  buildSpotMenuBarrackTowerIcon,
  buildSpotMenuCannonTowerIcon,
  buildSpotMenuFireTowerIcon,
  buildSpotMenuGroundTowerIcon,
  buildSpotMenuWizardTowerIcon,
} from "../icon/buildSpotMenuIcon/buildSpotMenuIcon.instance.js";
import { Building } from "./building.model.js";

export let archerTower;
export let wizardTower;
export let cannonTower;
export let groundTower;
export let fireTower;
export let barrackTower;
export let crackTower;

export const initTowers = async () => {
  archerTower = new Building(
    0,
    0,
    0,
    theImgArcherTower,
    "normal",
    "archer",
    120,
    70,
    Math.random() * (6 - 4 + 1) + 4,
    1500,
    false,
    archerTowerAvailableIcon,
    buildSpotMenuArcherTowerIcon
  );

  wizardTower = new Building(
    0,
    0,
    0,
    theImgWizardTower,
    "magic",
    "wizard",
    100,
    90,
    Math.random() * (17 - 9 + 1) + 9,
    2700,
    false,
    wizardTowerAvailableIcon,
    buildSpotMenuWizardTowerIcon
  );

  cannonTower = new Building(
    0,
    0,
    0,
    theImgCannonTower,
    "artillery",
    "cannon",
    120,
    120,
    Math.random() * (17 - 9 + 1) + 9,
    3000,
    true,
    cannonTowerAvailableIcon,
    buildSpotMenuCannonTowerIcon
  );

  groundTower = new Building(
    0,
    0,
    0,
    theImgGroundTower,
    "ground",
    "ground",
    90,
    100,
    Math.random() * 3 + 1,
    50,
    true,
    groundTowerAvailableIcon,
    buildSpotMenuGroundTowerIcon
  );

  barrackTower = new Building(
    0,
    0,
    0,
    undefined,
    "barracks",
    "barrack",
    100,
    70,
    0,
    0,
    true,
    barrackTowerAvailableIcon,
    buildSpotMenuBarrackTowerIcon
  );

  fireTower = new Building(
    0,
    0,
    0,
    theImgFireTower,
    "fire",
    "fire",
    90,
    100,
    Math.random() * 3 + 1,
    50,
    true,
    fireTowerAvailableIcon,
    buildSpotMenuFireTowerIcon
  );

  crackTower = new Building(
    0,
    0,
    0,
    undefined,
    "ground",
    "crack",
    100,
    100,
    Math.random() * 3 + 1,
    50,
    true
  );
};

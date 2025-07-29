import { gameVariable } from "../../gameVariable.js";
import { Building } from "./building.model.js";

export let archerTower;
export let wizardTower;
export let cannonTower;
export let fireTower;
export let barrackTower;
export let crackTower;

export const initAvailableTowers = () => {
  archerTower = new Building(
    0,
    0,
    0,
    undefined,
    "normal",
    "archer",
    120,
    70,
    Math.random() * (6 - 4 + 1) + 4,
    1500,
    false
  );

  wizardTower = new Building(
    0,
    0,
    0,
    undefined,
    "magic",
    "wizard",
    100,
    90,
    Math.random() * (17 - 9 + 1) + 9,
    2700,
    false
  );

  cannonTower = new Building(
    0,
    0,
    0,
    undefined,
    "artillery",
    "cannon",
    120,
    120,
    Math.random() * (17 - 9 + 1) + 9,
    3000,
    true
  );

  fireTower = new Building(
    0,
    0,
    0,
    undefined,
    "fire",
    "fire",
    90,
    100,
    Math.random() * 3 + 1,
    50,
    true
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
    true
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

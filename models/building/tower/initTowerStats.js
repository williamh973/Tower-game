import {
  archerTower,
  barrackTower,
  cannonTower,
  fireTower,
  groundTower,
  wizardTower,
} from "../building.instance.js";

export const initTowerStats = (icons) => {
  const towerStats = {
    archerStat: {
      damages: archerTower.attack,
      rate: archerTower.rateOfFire,
      range: archerTower.range,
    },
    wizardStat: {
      damages: wizardTower.attack,
      rate: wizardTower.rateOfFire,
      range: wizardTower.range,
    },
    cannonStat: {
      damages: cannonTower.attack,
      rate: cannonTower.rateOfFire,
      range: cannonTower.range,
    },
    groundStat: {
      damages: groundTower.attack,
      rate: groundTower.rateOfFire,
      range: groundTower.range,
    },
    barrackStat: {
      damages: barrackTower.attack,
      rate: barrackTower.rateOfFire,
      range: barrackTower.range,
    },
    fireStat: {
      damages: fireTower.attack,
      rate: fireTower.rateOfFire,
      range: fireTower.range,
    },
  };

  if (icons) {
    icons.archerDetailsIcon.towerStats = towerStats.archerStat;
    icons.wizardDetailsIcon.towerStats = towerStats.wizardStat;
    icons.cannonDetailsIcon.towerStats = towerStats.cannonStat;
    icons.groundDetailsIcon.towerStats = towerStats.groundStat;
    icons.barrackDetailsIcon.towerStats = towerStats.barrackStat;
    icons.fireDetailsIcon.towerStats = towerStats.fireStat;
  }

  return towerStats;
};

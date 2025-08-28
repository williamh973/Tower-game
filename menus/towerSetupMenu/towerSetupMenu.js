import { gameVariable } from "../../gameVariable.js";
import {
  archerTowerAvailableIcon,
  barrackTowerAvailableIcon,
  cannonTowerAvailableIcon,
  fireTowerAvailableIcon,
  groundTowerAvailableIcon,
  wizardTowerAvailableIcon,
} from "../../models/icon/towerSetupMenu/availableTowerIcon/availableTowerIcon.instance.js";
import {
  openTowerSetupMenuIcon,
  stepOneIcon,
} from "../../models/icon/dashboardIcons/dashboardIcons.instance.js";
import {
  towerSetupMenu,
  buildSpotMenu,
  dashboard,
} from "../../models/selectionScreen/selectionScreen.instance.js";
import {
  rightArrow,
  leftArrow,
  closeArrow,
} from "../../models/icon/arrowIcon/arrowIcon.instance.js";
import { equippedTowersIcon } from "../../models/icon/buildSpotMenuIcon/buildSpotMenuIcon.instance.js";
import {
  archerCharacteristicsIcon,
  barrackCharacteristicsIcon,
  cannonCharacteristicsIcon,
  fireCharacteristicsIcon,
  groundCharacteristicsIcon,
  wizardCharacteristicsIcon,
} from "../../models/icon/towerSetupMenu/towerCharacteristicsIcon/towerCharacteristicsIcon.instance.js";
import {
  archerTower,
  barrackTower,
  cannonTower,
  fireTower,
  groundTower,
  wizardTower,
} from "../../models/building/building.instance.js";
import { damageStatIcon } from "../../models/icon/towerSetupMenu/statIcons/statIcons.instance.js";

const initCharaIconTowerStat = () => {
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

  archerCharacteristicsIcon.towerStats = towerStats.archerStat;
  wizardCharacteristicsIcon.towerStats = towerStats.wizardStat;
  cannonCharacteristicsIcon.towerStats = towerStats.cannonStat;
  groundCharacteristicsIcon.towerStats = towerStats.groundStat;
  barrackCharacteristicsIcon.towerStats = towerStats.barrackStat;
  fireCharacteristicsIcon.towerStats = towerStats.fireStat;
};

export const openTowerSetupMenu = (openMenuIcon) => {
  openMenuIcon.isActivated = true;

  setTimeout(() => {
    towerSetupMenu.isTowerSetupMenuOpen = !towerSetupMenu.isTowerSetupMenuOpen;

    if (towerSetupMenu.isTowerSetupMenuOpen) {
      gameVariable.game.selectionScreenList.push(towerSetupMenu, buildSpotMenu);
      towerSetupMenu.arrowIcons.push(leftArrow, rightArrow, closeArrow);
      towerSetupMenu.availableTowerIcons.push(
        archerTowerAvailableIcon,
        wizardTowerAvailableIcon,
        cannonTowerAvailableIcon,
        groundTowerAvailableIcon,
        barrackTowerAvailableIcon,
        fireTowerAvailableIcon
      );

      initCharaIconTowerStat();

      towerSetupMenu.towerCharacteristicsIcons.push(
        archerCharacteristicsIcon,
        wizardCharacteristicsIcon,
        cannonCharacteristicsIcon,
        groundCharacteristicsIcon,
        barrackCharacteristicsIcon,
        fireCharacteristicsIcon
      );

      towerSetupMenu.towerCharacteristicsIcons.forEach((charaIcon) => {
        charaIcon.icons.push(damageStatIcon);
      });

      towerSetupMenu.equippedTowersIcon = equippedTowersIcon;
      towerSetupMenu.startTowerStatsAnimation();
      hideOpenMenuIcon();
    } else {
      closeTowerSetupMenu();
    }
  }, 300);
};

const hideOpenMenuIcon = () => {
  dashboard.icons = [];
};

export const closeTowerSetupMenu = (icon) => {
  icon.isActivated = true;
  setTimeout(() => {
    towerSetupMenu.isTowerSetupMenuOpen = !towerSetupMenu.isTowerSetupMenuOpen;

    if (!towerSetupMenu.isTowerSetupMenuOpen) {
      gameVariable.game.selectionScreenList =
        gameVariable.game.selectionScreenList.filter(
          (screen) => screen.name === "dashboard"
        );

      dashboard.icons.push(openTowerSetupMenuIcon, stepOneIcon);
      towerSetupMenu.arrowIcons = [];
      towerSetupMenu.availableTowerIcons = [];
      towerSetupMenu.towerCharacteristicsIcons = [];
    }
    resetAnimations();
  }, 350);
};

const resetAnimations = () => {
  buildSpotMenu.scale = 0.3;
};

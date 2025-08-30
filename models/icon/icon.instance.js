import { initAvailableTowerIcons } from "./towerSetupMenu/availableTowerIcon/availableTowerIcon.instance.js";
import { initBuildspotMenuTowerIcon } from "./buildSpotMenuIcon/buildSpotMenuIcon.instance.js";
import { initArrowIcons } from "./arrowIcon/arrowIcon.instance.js";
import { levelDifficultyIcons } from "./levelDifficultyIcons/levelDifficultyIcons.instance.js";
import { initMapIcons } from "./mapIcons/mapIcons.instance.js";
import { initDashboardIcons } from "./dashboardIcons/dashboardIcons.instance.js";
import { initFloatingIcons } from "./floatingIcon/floatingIcon.instance.js";
import { initTowerDetailsIcons } from "./towerSetupMenu/towerDetailsIcon/towerDetailsIcon.instance.js";
import { initTowerStatIcons } from "./towerSetupMenu/statIcons/statIcons.instance.js";

export const initIcons = async () => {
  await initMapIcons();
  await levelDifficultyIcons();
  await initAvailableTowerIcons();
  await initTowerDetailsIcons();
  await initBuildspotMenuTowerIcon();
  await initTowerStatIcons();
  await initArrowIcons();
  await initDashboardIcons();
  await initFloatingIcons();
};

import { initAvailableTowerMenuIcons } from "./towerSetupMenu/availableTowerIcon/availableTowerIcon.instance.js";
import { initBuildspotMenuTowerIcon } from "./buildSpotMenuIcon/buildSpotMenuIcon.instance.js";
import { initArrowIcons } from "./arrowIcon/arrowIcon.instance.js";
import { levelDifficultyIcons } from "./levelDifficultyIcons/levelDifficultyIcons.instance.js";
import { mapIcons } from "./mapIcons/mapIcons.instance.js";
import { initDashboardIcons } from "./dashboardIcons/dashboardIcons.instance.js";

export const initIcons = async () => {
  await mapIcons();
  await levelDifficultyIcons();
  await initAvailableTowerMenuIcons();
  await initBuildspotMenuTowerIcon();
  await initArrowIcons();
  await initDashboardIcons();
};

import {
  theImgAvailableTowerMenu,
  theImgLevelOfDifficulty,
  theImgCampaign,
} from "../../assets/menus.asset.js";
import { canvas, canvasManager } from "../../animate.js";
import { SelectionScreen } from "./selectionScreen.model.js";
import { theImgBuildSpotMenu } from "../../assets/buildSpotMenu.asset.js";
import { BuildSpotMenu } from "./buildSpotMenu/buildSpotMenu.model.js";
import { Dashboard } from "./dashboard/dashboard.model.js";
import { TowerSetupMenu } from "./towerSetupMenu/towerSetupMenu.model.js";
import { LevelDifficultyMenu } from "./levelDifficultyMenu/levelDifficultyMenu.model.js";

export let levelDifficultyMenu;
export let dashboard;
export let buildSpotMenu;
export let towerSetupMenu;

export const initSelectionScreens = async () => {
  const menuWidth = 200;
  const menuHeight = 200;
  const name = "buildSpotMenu";
  const menuScale = 0.3;
  const menuPosition = {
    x: 450,
    y: 200,
  };

  levelDifficultyMenu = new LevelDifficultyMenu(
    {
      x: 0,
      y: 0,
    },
    theImgLevelOfDifficulty,
    canvasManager.width,
    canvasManager.height,
    1,
    "levelDifficultyMenu"
  );

  dashboard = new Dashboard(
    {
      x: 0,
      y: 0,
    },
    theImgCampaign,
    canvasManager.width,
    canvasManager.height,
    1,
    "dashboard"
  );

  buildSpotMenu = new BuildSpotMenu(
    menuPosition,
    theImgBuildSpotMenu,
    menuWidth,
    menuHeight,
    menuScale,
    name
  );
  towerSetupMenu = new TowerSetupMenu(
    {
      x: 0,
      y: 0,
    },
    theImgAvailableTowerMenu,
    canvas.width,
    canvas.height,
    1,
    "towerSetupMenu"
  );
};

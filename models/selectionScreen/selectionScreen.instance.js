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

export let levelDifficultyScreen;
export let dashboard;
export let buildSpotMenu;
export let availableTowerMenu;

export const initSelectionScreens = async () => {
  const menuWidth = 200;
  const menuHeight = 200;
  const name = "buildSpotMenu";
  const menuScale = 1;
  const menuPosition = {
    x: 450,
    y: 150,
  };

  levelDifficultyScreen = new SelectionScreen(
    {
      x: 0,
      y: 0,
    },
    theImgLevelOfDifficulty,
    canvasManager.width,
    canvasManager.height,
    1,
    "levelDifficultyScreen"
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
  availableTowerMenu = new SelectionScreen(
    {
      x: 0,
      y: 0,
    },
    theImgAvailableTowerMenu,
    canvas.width,
    canvas.height,
    1,
    "availableTowerMenu"
  );
};

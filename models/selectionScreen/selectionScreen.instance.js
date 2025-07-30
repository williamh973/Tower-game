import {
  theImgAvailableTowerMenu,
  theImgLevelOfDifficulty,
} from "../../assets/menus.asset.js";
import { theImgCampaign } from "../../assets/campaign.asset.js";
import { canvas, canvasManager } from "../../animate.js";
import { SelectionScreen } from "./selectionScreen.model.js";
import { theImgBuildSpotMenu } from "../../assets/buildSpotMenu.asset.js";

export let levelDifficultyScreen;
export let campaignDashboard;
export let buildSpotMenu;
export let availableTowerMenu;

export const initSelectionScreens = async () => {
  const menuWidth = 200;
  const menuHeight = 150;
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

  campaignDashboard = new SelectionScreen(
    {
      x: 0,
      y: 0,
    },
    theImgCampaign,
    canvasManager.width,
    canvasManager.height,
    1,
    "campaignDashboard"
  );

  buildSpotMenu = new SelectionScreen(
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

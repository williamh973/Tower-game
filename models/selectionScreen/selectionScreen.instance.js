import { theImgLevelOfDifficulty } from "../../assets/menus.asset.js";
import { theImgCampaign } from "../../assets/campaign.asset.js";
import { canvasManager } from "../../animate.js";
import { SelectionScreen } from "./selectionScreen.model.js";

export const levelDifficultyScreen = new SelectionScreen(
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

export const campaignDashboard = new SelectionScreen(
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

import { theImgLevelOfDifficulty } from "../../assets/levelOfDifficulty.asset.js";
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
  canvasManager.height
);

export const campaignDashboard = new SelectionScreen(
  {
    x: 0,
    y: 0,
  },
  theImgCampaign,
  canvasManager.width,
  canvasManager.height
);

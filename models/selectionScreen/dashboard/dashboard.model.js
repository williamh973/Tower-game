import { theMapStepOne } from "../../../assets/backImg.asset.js";
import { gameVariable } from "../../../gameVariable.js";
import { Map } from "../../map/map.model.js";
import { SelectionScreen } from "../selectionScreen.model.js";

export class Dashboard extends SelectionScreen {
  constructor(position, image, width, height, scale, name) {
    super(position, image, width, height, scale, name);

    this.campaignCurrentStep = 1;
    this.campaignMaxSteps = 10;
    this.isDashboardOpen = false;
    this.isStepLoaded = false;
    this.icons = [];
    this.map = null;
  }

  closeDashboard() {
    this.isDashboardOpen = false;
    gameVariable.game.selectionScreenList = [];
    this.icons = [];
  }

  loadCampaignStep(iconName) {
    switch (iconName) {
      case "firstStepIcon":
        this.map = new Map(theMapStepOne, 5);
        break;

      default:
        break;
    }

    if (this.map) {
      this.closeDashboard();
      this.map.initBuildSpot();
      this.map.spawnIcons();
      this.isStepLoaded = true;
    }
  }
}

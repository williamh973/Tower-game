import { canvasManager } from "../../../animate.js";
import { theMapStepOne } from "../../../assets/backImg.asset.js";
import { game } from "../../../gameVariable.js";
import { FloatingIcon } from "../../icon/floatingIcon/floatingIcon.model.js";
import { startWaveIcon } from "../../icon/mapIcons/mapIcons.instance.js";
import { Map } from "../../map/map.model.js";
import { buildSpotMenu } from "../selectionScreen.instance.js";
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
    game.selectionScreens = [];
    this.icons = [];
  }

  loadCampaignStep(iconName) {
    // if (buildSpotMenu.remainingSlots === 4) {
    //   const width = 200;
    //   const height = 40;
    //   let toast = new FloatingIcon(
    //     canvasManager.width / 2 - width / 2,
    //     150,
    //     null,
    //     "transparent",
    //     width,
    //     height,
    //     false,
    //     "Aucune tour dans l'inventaire !",
    //     "toast"
    //   );
    //   return (game.toast = toast);
    // }
    switch (iconName) {
      case "firstStepIcon":
        startWaveIcon.position.x = 312;
        startWaveIcon.position.y = 5;
        this.map = new Map(theMapStepOne, 7);
        break;

      case "secondStepIcon":
        startWaveIcon.position.x = 312;
        startWaveIcon.position.y = 5;
        this.map = new Map(theMapStepOne, 7);
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

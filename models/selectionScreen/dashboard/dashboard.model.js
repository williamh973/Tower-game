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
}

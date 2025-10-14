import {
  fetchWaypointStepOne,
  fetchWaypointStepTwo,
} from "../../../waypoint/waypointHandle.js";
import { dashboard } from "../../selectionScreen/selectionScreen.instance.js";
import { Icon } from "../icon.model.js";

export class StartWaveIcon extends Icon {
  constructor(
    x,
    y,
    image,
    backgroundColor,
    width,
    height,
    isClickable,
    text = "",
    name = ""
  ) {
    super(x, y, image, backgroundColor, width, height, isClickable, text, name);
  }

  checkWaveState(startWaveIcon) {
    const currentWave = dashboard.map.currentWave;
    if (!currentWave.isStarted) dashboard.map.currentWave.start(startWaveIcon);

    if (currentWave.isDemonFullyDeployed) {
      dashboard.map.goNextWave();
      dashboard.map.currentWave.start(startWaveIcon);
    }
  }

  async init(startWaveIcon) {
    await this.fetchDemonWaypoints();
    this.checkWaveState(startWaveIcon);
    this.hidden();
  }

  async fetchDemonWaypoints() {
    switch (dashboard.campaignCurrentStep) {
      case 1:
        await fetchWaypointStepOne();
        break;
      case 2:
        await fetchWaypointStepTwo();
        break;
      default:
    }
  }

  hidden() {
    return (this.isVisible = false);
  }

  show() {
    return (this.isVisible = true);
  }
}

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

  async init(startWaveIcon) {
    await this.fetchDemonWaypoints();
    dashboard.map.currentWave.find((wave) => wave.start(startWaveIcon));
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

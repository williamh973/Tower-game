import { spawnBuildSpot } from "../buildSpot/spawnBuildStop.js";
import { gameVariable } from "../../gameVariable.js";

export const initBuildSpot = () => {
  switch (gameVariable.campaign.campaignCurrentStep) {
    case 1:
      spawnBuildSpot([
        {
          x: 110,
          y: 165,
        },
        {
          x: 119,
          y: 345,
        },
        {
          x: 190,
          y: 535,
        },
      ]);
      break;
    case 2:
      spawnBuildSpot([
        {
          x: 200,
          y: 180,
        },
        {
          x: 250,
          y: 220,
        },
      ]);
      break;

    default:
    // code
  }
};

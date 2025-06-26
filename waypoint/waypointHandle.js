import { gameVariable } from "../gameVariable.js";

export let wpCoordinates = [];
export let wpVelocitys = [];

export const fetchWaypoints = () => {
  switch (gameVariable.campaign.campaignCurrentStep) {
    case 1:
      fetchWaypointsStepOne();
      break;
    case 2:
      fetchWaypointsStepTwo();
      break;
    default:
    // code
  }
};

const fetchWaypointsStepOne = async () => {
  return Promise.all([
    fetch("waypoint/stepOne/wp-coordinate.json").then((res) => res.json()),
    fetch("waypoint/stepOne/wp-velocity.json").then((res) => res.json()),
  ]).then(([coordinates, velocitys]) => {
    wpCoordinates = coordinates;
    wpVelocitys = velocitys;
  });
};

const fetchWaypointsStepTwo = async () => {
  return Promise.all([
    fetch("waypoint/stepOne/wp-coordinate.json").then((res) => res.json()),
    fetch("waypoint/stepOne/wp-velocity.json").then((res) => res.json()),
  ]).then(([coordinates, velocitys]) => {
    wpCoordinates = coordinates;
    wpVelocitys = velocitys;
  });
};

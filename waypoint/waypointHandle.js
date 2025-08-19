import { dashboard } from "../models/selectionScreen/selectionScreen.instance.js";

export let wpCoordinates = [];
export let wpVelocitys = [];

export const fetchWaypoints = async () => {
  switch (dashboard.campaignCurrentStep) {
    case 1:
      await fetchWaypointsStepOne();
      break;
    case 2:
      await fetchWaypointsStepTwo();
      break;
    default:
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

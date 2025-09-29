export let wpCoordinates = [];
export let wpVelocitys = [];

export const fetchWaypointStepOne = async () => {
  return Promise.all([
    fetch("waypoint/stepOne/wp-coordinate.json").then((res) => res.json()),
    fetch("waypoint/stepOne/wp-velocity.json").then((res) => res.json()),
  ]).then(([coordinates, velocitys]) => {
    wpCoordinates = coordinates;
    wpVelocitys = velocitys;
  });
};

export const fetchWaypointStepTwo = async () => {
  return Promise.all([
    fetch("waypoint/stepOne/wp-coordinate.json").then((res) => res.json()),
    fetch("waypoint/stepOne/wp-velocity.json").then((res) => res.json()),
  ]).then(([coordinates, velocitys]) => {
    wpCoordinates = coordinates;
    wpVelocitys = velocitys;
  });
};

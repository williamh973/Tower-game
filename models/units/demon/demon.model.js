import { Unit } from "../unit.model.js";

export class Demon extends Unit {
  constructor(
    position,
    width,
    height,
    image,
    waypoints,
    velocities,
    type,
    stats,
    goldReward,
    armor,
    name
  ) {
    super(
      position,
      width,
      height,
      image,
      waypoints,
      velocities,
      type,
      stats,
      goldReward,
      armor,
      name
    );
  }
}

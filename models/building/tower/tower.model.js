import { Building } from "../building.model.js";

export class Tower extends Building {
  constructor(
    position,
    width,
    height,
    towerImage,
    type,
    name,
    range,
    price,
    attack,
    rateOfFire,
    isDamageZone,
    towerAvailableIcon,
    buildSpotMenuTowerIcon,
    canThrowProjectiles
  ) {
    super(
      position,
      width,
      height,
      towerImage,
      type,
      name,
      range,
      price,
      attack,
      rateOfFire,
      isDamageZone,
      towerAvailableIcon,
      buildSpotMenuTowerIcon,
      canThrowProjectiles
    );
  }
}

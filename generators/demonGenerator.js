import { Demon } from "../models/units/demon/demon.model.js";
import {
  armorType,
  damageType,
  goldReward,
  unitClass,
  unitName,
  unitType,
} from "../models/units/unitCharacteristics.js";
import { wpCoordinates, wpVelocitys } from "../waypoint/waypointHandle.js";

export const demonList = {
  gorax: () =>
    new Demon(
      { ...wpCoordinates[0] },
      12,
      12,
      "",
      wpCoordinates.slice(),
      wpVelocitys.slice(),
      unitType.demon,
      unitClass.warrior,
      damageType.physical,
      {
        attack: 2,
        defense: 2,
        speed: 1,
        health: 30,
        maxHealth: 30,
      },
      goldReward.gorax,
      armorType.noArmor,
      unitName.gorax
    ),
  zorfang: () =>
    new Demon(
      { ...wpCoordinates[0] },
      17,
      17,
      "",
      wpCoordinates.slice(),
      wpVelocitys.slice(),
      unitType.demon,
      unitClass.archer,
      damageType.physical,
      {
        attack: 2,
        defense: 3,
        speed: 0.5,
        health: 40,
        maxHealth: 40,
      },
      goldReward.zorfang,
      armorType.lightArmor,
      unitName.zorfang
    ),
  vargmorne: () =>
    new Demon(
      { ...wpCoordinates[0] },
      12,
      12,
      "",
      wpCoordinates.slice(),
      wpVelocitys.slice(),
      unitType.demon,
      unitClass.mage,
      damageType.magic,
      {
        attack: 2,
        defense: 2,
        speed: 0.3,
        health: 50,
        maxHealth: 50,
      },
      goldReward.vargmorne,
      armorType.mediumArmor,
      unitName.vargmorne
    ),
  murkith: () =>
    new Demon(
      { ...wpCoordinates[0] },
      12,
      12,
      "",
      wpCoordinates.slice(),
      wpVelocitys.slice(),
      unitType.demon,
      unitClass.tank,
      damageType.physical,
      {
        attack: 2,
        defense: 2,
        speed: 0.2,
        health: 300,
        maxHealth: 300,
      },
      goldReward.murkith,
      armorType.highArmor,
      unitName.murkith
    ),
  thraxxor: () =>
    new Demon(
      { ...wpCoordinates[0] },
      12,
      12,
      "",
      wpCoordinates.slice(),
      wpVelocitys.slice(),
      unitType.demon,
      unitClass.assassin,
      damageType.poison,
      {
        attack: 2,
        defense: 2,
        speed: 0.7,
        health: 60,
        maxHealth: 60,
      },
      goldReward.thraxxor,
      armorType.noArmor,
      unitName.thraxxor
    ),
  drakzul: () =>
    new Demon(
      { ...wpCoordinates[0] },
      12,
      12,
      "",
      wpCoordinates.slice(),
      wpVelocitys.slice(),
      unitType.demon,
      unitClass.berserker,
      damageType.physical,
      {
        attack: 2,
        defense: 2,
        speed: 0.6,
        health: 50,
        maxHealth: 50,
      },
      goldReward.drakzul,
      armorType.noArmor,
      unitName.drakzul
    ),
  nekhraal: () =>
    new Demon(
      { ...wpCoordinates[0] },
      12,
      12,
      "",
      wpCoordinates.slice(),
      wpVelocitys.slice(),
      unitType.demon,
      unitClass.summoner,
      damageType.magic,
      {
        attack: 2,
        defense: 2,
        speed: 0.5,
        health: 90,
        maxHealth: 90,
      },
      goldReward.nekhraal,
      armorType.noArmor,
      unitName.nekhraal
    ),
};

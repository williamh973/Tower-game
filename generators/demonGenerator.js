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

export const possibleDemonList = {
  gorax: () =>
    new Demon(
      { ...wpCoordinates[0] },
      30,
      30,
      "",
      wpCoordinates.slice(),
      wpVelocitys.slice(),
      unitType.demon,
      unitClass.warrior,
      damageType.physical,
      {
        attack: 2,
        defense: 2,
        speed: 4,
        health: 10,
        maxHealth: 10,
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
        speed: 2,
        health: 10,
        maxHealth: 10,
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
        speed: 3,
        health: 20,
        maxHealth: 20,
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
        speed: 3,
        health: 20,
        maxHealth: 20,
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
        speed: 3,
        health: 20,
        maxHealth: 20,
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
        speed: 3,
        health: 20,
        maxHealth: 20,
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
        speed: 3,
        health: 20,
        maxHealth: 20,
      },
      goldReward.nekhraal,
      armorType.noArmor,
      unitName.nekhraal
    ),
};

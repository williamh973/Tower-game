import { Demon } from "./demon.model.js";
import {
  wpCoordinates,
  wpVelocitys,
} from "../../../waypoint/waypointHandle.js";

export const possibleDemonList = {
  gorax: () =>
    new Demon(
      { ...wpCoordinates[0] },
      15,
      15,
      "",
      wpCoordinates.slice(),
      wpVelocitys.slice(),
      "demon",
      {
        attack: 2,
        defense: 2,
        speed: 4,
        health: 30,
        maxHealth: 30,
      },
      4,
      "none",
      "gorax"
    ),
  zorfang: () =>
    new Demon(
      { ...wpCoordinates[0] },
      17,
      17,
      "",
      wpCoordinates.slice(),
      wpVelocitys.slice(),
      "demon",
      {
        attack: 2,
        defense: 3,
        speed: 2,
        health: 50,
        maxHealth: 50,
      },
      6,
      "light",
      "zorfang"
    ),
  mormon: () =>
    new Demon(
      { ...wpCoordinates[0] },
      17,
      17,
      "",
      wpCoordinates.slice(),
      wpVelocitys.slice(),
      "demon",
      {
        attack: 2,
        defense: 3,
        speed: 2,
        health: 50,
        maxHealth: 50,
      },
      6,
      "light",
      "mormon"
    ),
};

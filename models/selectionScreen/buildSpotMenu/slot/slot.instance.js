import { Icon } from "../../../icon/icon.model.js";

export let first;
export let second;
export let third;
export let fourth;
export let fifth;

export const initEmptySlots = async (buildSpotMenu) => {
  first = new Icon(
    buildSpotMenu.position.x + buildSpotMenu.width / 2 - 25,
    buildSpotMenu.position.y + 25 / 2,
    null,
    null,
    50,
    50,
    true,
    null,
    "firstSlot"
  );
  second = new Icon(
    buildSpotMenu.position.x,
    buildSpotMenu.position.y,
    null,
    null,
    50,
    50,
    true,
    null,
    "secondSlot"
  );
  third = new Icon(
    buildSpotMenu.position.x,
    buildSpotMenu.position.y,
    null,
    null,
    50,
    50,
    true,
    null,
    "thirdSlot"
  );
  fourth = new Icon(
    buildSpotMenu.position.x,
    buildSpotMenu.position.y,
    null,
    null,
    50,
    50,
    true,
    null,
    "fourthSlot"
  );
  fifth = new Icon(
    buildSpotMenu.position.x,
    buildSpotMenu.position.y,
    null,
    null,
    50,
    50,
    true,
    null,
    "fifthSlot"
  );
};

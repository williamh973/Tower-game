import { Slot } from "./slot.model.js";

export let first;
export let second;
export let third;
export let fourth;

export const initEmptySlots = async (buildSpotMenu) => {
  first = new Slot(
    buildSpotMenu.position.x + buildSpotMenu.width / 2 - 25,
    buildSpotMenu.position.y + 25 / 2,
    "firstSlot"
  );
  second = new Slot(
    buildSpotMenu.position.x + buildSpotMenu.width / 1.5,
    buildSpotMenu.position.y + buildSpotMenu.height / 2.6,
    "secondSlot"
  );
  third = new Slot(
    buildSpotMenu.position.x + buildSpotMenu.width / 2 - 25,
    buildSpotMenu.position.y + buildSpotMenu.height / 1.49,
    "thirdSlot"
  );
  fourth = new Slot(
    buildSpotMenu.position.x + 25 / 1.5,
    buildSpotMenu.position.y + buildSpotMenu.height / 2.6,
    "fourthSlot"
  );
};

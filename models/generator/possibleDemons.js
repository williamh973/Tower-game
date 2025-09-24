import { demons } from "./demonGenerator.js";

export const possibleDemons = () => {
  const availableDemons = [
    demons.gorax(),
    demons.drakzul(),
    demons.murkith(),
    demons.nekhraal(),
    demons.thraxxor(),
    demons.vargmorne(),
    demons.zorfang(),
  ];
  return availableDemons;
};

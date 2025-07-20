import { demonList } from "./demonGenerator.js";

export const possibleDemonList = () => {
  const availableDemonList = [
    demonList.gorax(),
    demonList.drakzul(),
    demonList.murkith(),
    demonList.nekhraal(),
    demonList.thraxxor(),
    demonList.vargmorne(),
    demonList.zorfang(),
  ];
  return availableDemonList;
};

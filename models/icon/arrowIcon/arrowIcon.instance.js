import {
  theLeftArrow,
  theReturn,
  theRightArrow,
} from "../../../assets/icon.asset.js";
import { Icon } from "../icon.model.js";

export let leftArrow;
export let rightArrow;
export let closeArrow;

export const initArrowIcons = async () => {
  leftArrow = new Icon(
    50,
    150,
    theLeftArrow,
    "transparent",
    60,
    60,
    true,
    "",
    "leftArrow"
  );
  rightArrow = new Icon(
    250,
    150,
    theRightArrow,
    "transparent",
    60,
    60,
    true,
    "",
    "rightArrow"
  );
  closeArrow = new Icon(
    620,
    50,
    theReturn,
    "transparent",
    60,
    60,
    true,
    "",
    "closeArrow"
  );
};

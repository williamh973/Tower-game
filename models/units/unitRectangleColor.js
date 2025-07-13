import { context } from "../../animate.js";

export const unitRectangleColor = (name) => {
  switch (name) {
    case "gorax":
      context.fillStyle = "brown";
      break;
    case "zorfang":
      context.fillStyle = "black";
      break;
    case "vargmorne":
      context.fillStyle = "gray";
      break;
    case "murkith":
      context.fillStyle = "orange";
      break;
    case "drakzul":
      context.fillStyle = "purple";
      break;
    case "nekhraal":
      context.fillStyle = "pink";
      break;
    default:
      break;
  }
};

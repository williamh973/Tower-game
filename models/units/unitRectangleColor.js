import { context } from "../../animate.js";

export const unitRectangleColor = (name) => {
  switch (name) {
    case "gorax":
      context.fillStyle = "red";
      break;
    case "zorfang":
      context.fillStyle = "black";
      break;
    case "vargmorne":
      context.fillStyle = "green";
      break;
    case "murkith":
      context.fillStyle = "orange";
      break;
    case "drakzul":
      context.fillStyle = "purple";
      break;
    case "nekhraal":
      context.fillStyle = "blue";
      break;
    case "thraxxor":
      context.fillStyle = "cyan";
      break;
    default:
      break;
  }
};

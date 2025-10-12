import { game } from "../../../gameVariable.js";
import { levelDifficultyMenu } from "../../../models/selectionScreen/selectionScreen.instance.js";
import { isHovering, x, y } from "../../../shared/utils.js";

export const levelIcons = () => {
  for (const icon of levelDifficultyMenu.icons)
    if (
      isHovering(
        x,
        y,
        icon.position.x,
        icon.position.y,
        icon.width,
        icon.height
      )
    )
      switch (icon.name) {
        case "easyDifficultyIcon":
          game.setGameDifficulty("easy");
          break;
        case "mediumDifficultyIcon":
          game.setGameDifficulty("medium");
          break;
        case "hardDifficultyIcon":
          game.setGameDifficulty("hard");
          break;
        default:
          break;
      }
};

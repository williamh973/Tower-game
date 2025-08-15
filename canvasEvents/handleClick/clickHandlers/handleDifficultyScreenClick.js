import { gameVariable } from "../../../gameVariable.js";
import { isHovering, x, y } from "../../../shared/utils.js";

export const levelIconList = () => {
  for (const icon of gameVariable.ui.levelIconList) {
    if (
      isHovering(
        x,
        y,
        icon.position.x,
        icon.position.y,
        icon.width,
        icon.height
      )
    ) {
      switch (icon.name) {
        case "easyDifficultyIcon":
          gameVariable.game.setGameDifficulty("easy");
          break;
        case "mediumDifficultyIcon":
          gameVariable.game.setGameDifficulty("medium");
          break;
        case "hardDifficultyIcon":
          gameVariable.game.setGameDifficulty("hard");
          break;
        default:
          break;
      }
    }
  }
};

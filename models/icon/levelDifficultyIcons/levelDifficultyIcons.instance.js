import { Icon } from "../icon.model.js";

export let hardDifficultyIcon;
export let mediumDifficultyIcon;
export let easyDifficultyIcon;

const difficultyModIcon = {
  positionY: 200,
  width: 150,
  height: 150,
};

export const levelDifficultyIcons = async () => {
  hardDifficultyIcon = new Icon(
    480,
    difficultyModIcon.positionY,
    null,
    null,
    difficultyModIcon.width,
    difficultyModIcon.height,
    true,
    null,
    "hardDifficultyIcon"
  );

  mediumDifficultyIcon = new Icon(
    280,
    difficultyModIcon.positionY,
    null,
    null,
    difficultyModIcon.width,
    difficultyModIcon.height,
    true,
    null,
    "mediumDifficultyIcon"
  );
  easyDifficultyIcon = new Icon(
    95,
    difficultyModIcon.positionY,
    null,
    null,
    difficultyModIcon.width,
    difficultyModIcon.height,
    true,
    null,
    "easyDifficultyIcon"
  );
};

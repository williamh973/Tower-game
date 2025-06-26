import { gameVariable } from "../../gameVariable.js";
import { SelectionScreen } from "../../models/selectionScreen/selectionScreen.model.js";
import { theImgBuildSpotMenu } from "../../assets/buildSpotMenu.asset.js";
import { spawnBuildSpotTowerIcon } from "../buildSpotTowerIcon/spawnBuildSpotTowerIcon.js";

export const openBuildSpotMenu = (spot) => {
  gameVariable.ui.isBuildSpotMenuOpen = !gameVariable.ui.isBuildSpotMenuOpen;

  if (gameVariable.ui.isBuildSpotMenuOpen) {
    const menuWidth = 200;
    const menuHeight = 200;
    const menuPosition = {
      x: spot.position.x - menuWidth / 2,
      y: spot.position.y - menuHeight / 2,
    };

    const buildSpotMenu = new SelectionScreen(
      menuPosition,
      theImgBuildSpotMenu,
      menuWidth,
      menuHeight
    );

    gameVariable.ui.selectionScreenList.push(buildSpotMenu);

    spawnBuildSpotTowerIcon(spot, menuWidth, menuHeight);
  } else {
    closeBuildSpotMenu();
  }
};

export const closeBuildSpotMenu = () => {
  gameVariable.ui.selectionScreenList =
    gameVariable.ui.selectionScreenList.filter(
      (screen) => screen.image !== theImgBuildSpotMenu
    );

  gameVariable.ui.buildSpotIconList = [];
};

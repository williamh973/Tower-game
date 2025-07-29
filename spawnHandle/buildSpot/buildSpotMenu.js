import { gameVariable } from "../../gameVariable.js";
import { SelectionScreen } from "../../models/selectionScreen/selectionScreen.model.js";
import { theImgBuildSpotMenu } from "../../assets/buildSpotMenu.asset.js";
import { spawnBuildSpotTowerIcon } from "../buildSpotTowerIcon/spawnBuildSpotTowerIcon.js";

export const openBuildSpotMenu = (spot) => {
  gameVariable.ui.isBuildSpotMenuOpen = !gameVariable.ui.isBuildSpotMenuOpen;

  const menuWidth = 200;
  const menuHeight = 200;
  const name = "buildSpotMenu";
  const menuScale = 0.5;
  const menuPosition = {
    x: spot.position.x - menuWidth / 2.4,
    y: spot.position.y - menuHeight / 2.5,
  };

  const buildSpotMenu = new SelectionScreen(
    menuPosition,
    theImgBuildSpotMenu,
    menuWidth,
    menuHeight,
    menuScale,
    name
  );

  if (gameVariable.ui.isBuildSpotMenuOpen) {
    gameVariable.ui.selectionScreenList.push(buildSpotMenu);

    spawnBuildSpotTowerIcon(spot, menuWidth, menuHeight);
  } else {
    closeBuildSpotMenu(buildSpotMenu);
  }
};

export const closeBuildSpotMenu = async (buildSpotMenu) => {
  await buildSpotMenu.updateAnimation();
  gameVariable.tower.buildSpotIconList = [];

  setTimeout(async () => {
    await buildSpotMenu.close(theImgBuildSpotMenu);
  }, 100);
};

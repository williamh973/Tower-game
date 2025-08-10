import { gameVariable } from "../../gameVariable.js";
import { theImgBuildSpotMenu } from "../../assets/buildSpotMenu.asset.js";
import { spawnBuildSpotTowerIcon } from "../buildSpotTowerIcon/spawnBuildSpotTowerIcon.js";
import { buildSpotMenu } from "../../models/selectionScreen/selectionScreen.instance.js";

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

  buildSpotMenu.position = menuPosition;
  buildSpotMenu.scale = menuScale;
  buildSpotMenu.name = name;
  buildSpotMenu.height = menuHeight;
  buildSpotMenu.width = menuWidth;

  if (gameVariable.ui.isBuildSpotMenuOpen) {
    // console.log(
    //   "vérifier les nouvelles valeurs du buildSpotMenu",
    //   buildSpotMenu
    // );
    gameVariable.ui.selectionScreenList.push(buildSpotMenu);

    spawnBuildSpotTowerIcon(spot, menuWidth, menuHeight);
  } else {
    closeBuildSpotMenu(buildSpotMenu);
  }
};

export const closeBuildSpotMenu = async (buildSpotMenu) => {
  await buildSpotMenu.updateAnimation();
  gameVariable.tower.buildSpotMenuIconList = [];

  setTimeout(async () => {
    await buildSpotMenu.close(theImgBuildSpotMenu);
  }, 100);
};

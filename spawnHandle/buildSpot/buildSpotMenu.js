import { gameVariable } from "../../gameVariable.js";
import { theImgBuildSpotMenu } from "../../assets/buildSpotMenu.asset.js";
import {
  buildSpotMenu,
  towerSetupMenu,
} from "../../models/selectionScreen/selectionScreen.instance.js";

export const openBuildSpotMenu = (spot) => {
  towerSetupMenu.isTowerSetupMenuOpen = !towerSetupMenu.isTowerSetupMenuOpen;

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

  if (towerSetupMenu.isTowerSetupMenuOpen) {
    // console.log(
    //   "vérifier les nouvelles valeurs du buildSpotMenu",
    //   buildSpotMenu
    // );
    gameVariable.game.selectionScreenList.push(buildSpotMenu);
  } else {
    closeBuildSpotMenu(buildSpotMenu);
  }
};

export const closeBuildSpotMenu = async (buildSpotMenu) => {
  await buildSpotMenu.updateAnimation();

  setTimeout(async () => {
    await buildSpotMenu.close(theImgBuildSpotMenu);
  }, 100);
};

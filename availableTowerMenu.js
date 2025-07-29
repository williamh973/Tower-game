import { canvas } from "./animate.js";
import { theImgAvailableTowerMenu } from "./assets/menus.asset.js";
import { gameVariable } from "./gameVariable.js";
import { SelectionScreen } from "./models/selectionScreen/selectionScreen.model.js";

export const openAvailableTowerMenu = (openMenuIcon) => {
  gameVariable.preparation.isAvailableTowersMenuOpen =
    !gameVariable.preparation.isAvailableTowersMenuOpen;

  if (gameVariable.preparation.isAvailableTowersMenuOpen) {
    const availableTowerMenu = new SelectionScreen(
      {
        x: 0,
        y: 0,
      },
      theImgAvailableTowerMenu,
      canvas.width,
      canvas.height,
      1,
      "availableTowerMenu"
    );
    gameVariable.ui.selectionScreenList.push(availableTowerMenu);
    hideOpenMenuIcon(openMenuIcon);
  } else {
    closeAvailableTowerMenu();
  }
};

const hideOpenMenuIcon = (openMenuIcon) => {
  gameVariable.ui.iconList = gameVariable.ui.iconList.filter(
    (icon) => icon.name !== openMenuIcon.name
  );
};

const closeAvailableTowerMenu = () => {
  gameVariable.ui.selectionScreenList =
    gameVariable.ui.selectionScreenList.filter(
      (screen) => screen.name !== "availableTowerMenu"
    );
};

import { gameVariable } from "./gameVariable.js";
import { wave } from "./init.js";

export const update = timestamp => {
    gameVariable.campaign.mapList.forEach(map => {
        map.update();
    });

    gameVariable.tower.towerList.forEach(tower => {
        tower.update(timestamp);
    });

    wave.demonList.forEach(demon => {
        demon.update();
    });

    gameVariable.battle.projectileList.forEach(projectile => {
        projectile.update();
    });

    gameVariable.ui.iconList.forEach(icon => {
        icon.updateAnimation();
        // icon.drawDebugCollisionSquare();
    });

    gameVariable.ui.floatingIconList.forEach(icon => {
        icon.update();
        icon.updateAnimation();
    });

    for (let i = gameVariable.ui.floatingIconList.length - 1; i >= 0; i--) {
        const icon = gameVariable.ui.floatingIconList[i];
        icon.update();

        if (icon.finished) {
            gameVariable.ui.floatingIconList.splice(i, 1);
        }
    }
};

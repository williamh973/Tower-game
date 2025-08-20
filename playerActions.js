import { lifeHudMask, goldHudMask } from "./models/icon/icon.instance.js";
import { gameOver } from "./gameOver.js";
import { gameVariable } from "./gameVariable.js";
import { isCkeckIfPlayerVictory } from "./victory.js";
import { wave } from "./spawnHandle/campaign/step/checkCampaignStep.js";

export const checkIfUnitReachedEnd = (
  currentWaypointIndex,
  waypointsLength,
  gameVariable,
  isCanMove
) => {
  if (currentWaypointIndex >= waypointsLength - 1) {
    gameVariable.game.player.life -= 1;
    lifeHudMask.text = "❤️ " + gameVariable.game.player.life;
    isCanMove = false;

    if (navigator.vibrate) {
      navigator.vibrate(200);
    }
    gameOver(gameVariable, isCanMove);
  }
};

export const substractPlayerGold = (towerPrice) => {
  gameVariable.game.player.gold -= towerPrice;
  goldHudMask.text = "🪙 " + gameVariable.game.player.gold;
};

export const addPlayerGold = (gold) => {
  gameVariable.game.player.gold += gold;
  goldHudMask.text = "🪙 " + gameVariable.game.player.gold;
};

export const handleDeadDemons = () => {
  wave.demonList.filter((demon) => {
    demon.isDead;
    if (demon.isDead) {
      wave.demonDeadList.push(demon);
      addPlayerGold(demon.goldReward);
      wave.demonList = wave.demonList.filter((demon) => !demon.isDead);
      isCkeckIfPlayerVictory(wave.demonDeadList, wave.unitMax);
    }
  });
};

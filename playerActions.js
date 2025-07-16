import { lifeDisplay, goldDisplay } from "./models/icon/icon.instance.js";
import { gameOver } from "./gameOver.js";
import { gameVariable } from "./gameVariable.js";
import { wave } from "./init.js";
import { isCkeckIfPlayerVictory } from "./victory.js";

export const checkIfUnitReachedEnd = (
  currentWaypointIndex,
  waypointsLength,
  gameVariable,
  isCanMove
) => {
  if (currentWaypointIndex >= waypointsLength - 1) {
    gameVariable.playerStats.life -= 1;
    lifeDisplay.text = "❤️ " + gameVariable.playerStats.life;
    isCanMove = false;

    if (navigator.vibrate) {
      navigator.vibrate(200);
    }
    gameOver(gameVariable, isCanMove);
  }
};

export const substractPlayerGold = (towerPrice) => {
  gameVariable.playerStats.goldCoin -= towerPrice;
  goldDisplay.text = "🪙 " + gameVariable.playerStats.goldCoin;
};

export const addPlayerGold = (gold) => {
  gameVariable.playerStats.goldCoin += gold;
  goldDisplay.text = "🪙 " + gameVariable.playerStats.goldCoin;
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

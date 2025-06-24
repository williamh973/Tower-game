import {canvas, context} from './animate.js';

export const gameOver = (gameVariable, isCanMove) => {
  if (gameVariable.playerStats.life <= 0) {
    gameVariable.ui.isGameOver = true;
    alert('Game over');
  }
};


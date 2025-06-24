import { gameVariable } from './gameVariable.js';


export const togglePause = (icon) => {
  gameVariable.ui.isGamePaused = !gameVariable.ui.isGamePaused;
  gameVariable.ui.isGamePaused ? icon.text
    = '▶' :  icon.text
    = '❚❚';
  
  if (gameVariable.ui.isGamePaused) {
   setTimeout(() => {
      alert("Jeu mis en pause. Cliquez pour reprendre");
      gameVariable.ui.isGamePaused = false;
      icon.text
    = '❚❚';
}, 100);
    
  }
       
};
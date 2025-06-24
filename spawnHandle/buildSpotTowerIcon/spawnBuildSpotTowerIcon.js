import {gameVariable} from '../../gameVariable.js';
import {Icon} from '../../models/icon/icon.model.js';


export const spawnBuildSpotTowerIcon = (spot, menuWidth, menuHeight) => {
  const iconWidth = 50;
  const iconHeight = 50;
  
  let buildSpotArcherIcon = new Icon(
      spot.position.x - menuWidth / 2.9,
      spot.position.y - menuHeight / 2.8,
      null,
      'transparent',
      iconWidth,
      iconHeight,
      true,
      '',
      'buildSpotArcherIcon'
    );
    
    let buildSpotWizardIcon = new Icon(
      spot.position.x - menuWidth / 2.9,
      spot.position.y + menuHeight - 180,
      null,
      'transparent',
      iconWidth,
      iconHeight,
      true,
      '',
      'buildSpotWizardIcon'
    );
    
    let buildSpotCannonIcon = new Icon(
      spot.position.x + 20,
      spot.position.y - menuHeight / 2.8,
      null,
      'transparent',
      iconWidth,
      iconHeight,
      true,
      '',
      'buildSpotCannonIcon'
    );
    
    let buildSpotFireIcon = new Icon(
      spot.position.x + 20,
      spot.position.y + menuHeight - 180,
      null,
      'transparent',
      iconWidth,
      iconHeight,
      true,
      '',
      'buildSpotFireIcon'
    );
    
     gameVariable.ui.buildSpotIconList.push(buildSpotArcherIcon, buildSpotWizardIcon, buildSpotCannonIcon, buildSpotFireIcon);
     
     gameVariable.ui.buildSpotIconList.forEach(buildSpotTowerIcon => {
    buildSpotTowerIcon.setAssociatedBuildSpot(spot);
     });
};
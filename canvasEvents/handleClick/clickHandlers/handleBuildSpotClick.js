// import { gameVariable } from "../../../gameVariable.js";
// import { isHovering, x, y } from "../../../shared/utils.js";
// import {
//   buildSpotMenu,
//   dashboard,
// } from "../../../models/selectionScreen/selectionScreen.instance.js";

// export const handleBuildSpotClick = () => {
//   for (const spot of dashboard.map.buildSpots) {
//     if (
//       isHovering(
//         x,
//         y,
//         spot.position.x,
//         spot.position.y,
//         spot.width,
//         spot.height
//       ) &&
//       !spot.isOccupied &&
//       gameVariable.game.player.isCanBuildTower
//     ) {
//       spot.isClicked = true;
//       console.log("click!");
//       const buildSpotMenuOpen = false;
//       buildSpotMenu.toggle(buildSpotMenuOpen, spot);
//     }
//   }
// };

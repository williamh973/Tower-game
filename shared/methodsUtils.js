export let distanceX;
export let distanceY;

export const createImg = (imageSrc) => {
  const image = new Image();
  image.src = imageSrc;
  return image;
};

export const setDistance = (target, shooter) => {
  distanceX = target.position.x + target.width / 2 - shooter.position.x;
  distanceY = target.position.y + target.height / 2 - shooter.position.y;
  const distance = Math.hypot(distanceX, distanceY);
  return distance;
};
export const hasClicked = (
  mouseX,
  mouseY,
  elementPositionX,
  elementPositionY,
  elementWidth,
  elementHeight
) => {
  return (
    mouseX >= elementPositionX &&
    mouseX <= elementPositionX + elementWidth &&
    mouseY >= elementPositionY &&
    mouseY <= elementPositionY + elementHeight
  );
};

export let distanceX;
export let distanceY;
export let x;
export let y;

export const mouseDetect = (event) => {
  const rect = canvas.getBoundingClientRect();
  x = event.clientX - rect.left;
  y = event.clientY - rect.top;
};

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
export const isHovering = (
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

export const updateGhostIconPosition = (ghostIcon) => {
  window.onmousemove = function (e) {
    ghostIcon.position.x = e.offsetX - ghostIcon.width / 2;
    ghostIcon.position.y = e.offsetY - ghostIcon.height / 2;
  };
};

export const drawDebugCollisionSquare = (element, context) => {
  if (element && context) {
    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 1;

    context.rect(
      element.position.x,
      element.position.y,
      element.width * element.scale,
      element.height * element.scale
    );

    context.stroke();
  }
};

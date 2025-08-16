export const pulse = (icon) => {
  const speed = 0.005;
  const minScale = 0.95;
  const maxScale = 1.05;
  icon.scale += icon.scaleDirection * speed;

  if (icon.scale >= maxScale || icon.scale <= minScale) {
    icon.scaleDirection *= -1;
  }
};

export const reversePulse = (icon) => {
  const speed = 0.03;
  const minScale = 0.8;
  const maxScale = 1.0;

  icon.scale -= icon.scaleDirection * speed;
  if (icon.scale <= minScale) {
    icon.scaleDirection *= -1;
  }
  if (icon.scale >= maxScale) {
    icon.scale = maxScale;
    icon.scaleDirection = 1;
    icon.isActivated = false;
    return;
  }
};

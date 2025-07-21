export const imgProjectile = (imageSrc) => {
  const image = new Image();
  image.src = imageSrc;
  return image;
};

export const theImgArrow = imgProjectile("./assets/images/arrow.png");
export const theImgThunderBolt = imgProjectile(
  "./assets/images/thunder-bolt.png"
);
export const theImgCannon = imgProjectile("./assets/images/cannon.png");

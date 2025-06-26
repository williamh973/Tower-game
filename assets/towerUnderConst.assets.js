const imgTowerUnderBuild = (imageSrc) => {
  const image = new Image();
  image.src = imageSrc;
  return image;
};

export const theImgTowerUnderBuild = imgTowerUnderBuild(
  "./assets/images/towerUnderConstruction.png"
);

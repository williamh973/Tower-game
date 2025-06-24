const imgBuildSpotMenu = (imageSrc) => {
  const image = new Image();
  image.src = imageSrc;
  return image;
};

export const theImgBuildSpotMenu = imgBuildSpotMenu("./assets/image/buildSpotMenu.png");
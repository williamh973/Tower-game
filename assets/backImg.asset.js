const imgBackground = (imageSrc) => {
  const image = new Image();
  image.src = imageSrc;
  image.width = 768;
  image.height = 1150;
  return image;
};

export const mapStepOne = imgBackground("./assets/images/td.png");

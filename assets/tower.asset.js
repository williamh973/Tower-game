const imgArcherTower = (imageSrc) => {
  const image = new Image();
  image.src = imageSrc;
  return image;
};

export const theImgArcherTower = imgArcherTower(
  "./assets/images/Archer-tower.png"
);

const imgWizardTower = (imageSrc) => {
  const image = new Image();
  image.src = imageSrc;
  return image;
};

export const theImgWizardTower = imgWizardTower(
  "./assets/images/wizard-tower.png"
);

const imgFireTower = (imageSrc) => {
  const image = new Image();
  image.src = imageSrc;
  return image;
};

export const theImgFireTower = imgFireTower("./assets/images/fire-tower.png");

const imgCannonTower = (imageSrc) => {
  const image = new Image();
  image.src = imageSrc;
  return image;
};

export const theImgCannonTower = imgCannonTower(
  "./assets/images/cannon-tower.png"
);

const imgCampaign = (imageSrc) => {
  const image = new Image();
  image.src = imageSrc;
  return image;
};

export const theImgCampaign = imgCampaign("./assets/images/campaign.png");

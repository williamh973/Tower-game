const createIcon = (imageSrc) => {
  const icon = new Image();
  icon.src = imageSrc;
  return icon;
};

export const theStartWaveIcon = createIcon("./assets/images/start-wave.png");
export const theGoldCoinIcon = createIcon("./assets/images/gold-coin.png");
export const theAvailableTowerMenuIcon = createIcon(
  "./assets/images/availableTowerIcon.png"
);

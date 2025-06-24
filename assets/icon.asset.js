const createStartWaveIcon = (imageSrc) => {
  const icon = new Image();
  icon.src = imageSrc;
  return icon;
};

export const theStartWaveIcon = createStartWaveIcon(
"./assets/image/start-wave.png"
);



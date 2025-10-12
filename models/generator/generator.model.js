import { Wave } from "../wave/wave.model.js";

export class Generator {
  constructor(mapWaves, numberOfWave) {
    this.generateWave(mapWaves, numberOfWave);
  }

  generateWave(mapWaves, numberOfWave) {
    for (let i = 0; i < numberOfWave; i++) {
      let unitMax = this.determineUnitMax(i);
      const createdWave = new Wave(unitMax, i + 1);
      mapWaves.push(createdWave);
    }
  }

  determineUnitMax(i) {
    const difficultyValues = {
      easy: 0.6,
      medium: 1.1,
      hard: 1.7,
    };

    const base = 1;
    const baseMultiplier = 1;
    const growthFactor = difficultyValues["easy"];
    const exponentialPower = 1.1;
    const exponentialGrowthFactor = 0.1;

    return Math.round(
      base *
        (baseMultiplier +
          i * growthFactor +
          Math.pow(i, exponentialPower) * exponentialGrowthFactor)
    );
  }
}

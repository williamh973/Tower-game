import { Wave } from "../wave/wave.model.js";

export class Generator {
  constructor(mapWaves, numberOfWave) {
    this.generateWave(mapWaves, numberOfWave);
  }

  generateWave(mapWaves, numberOfWave) {
    for (let i = 0; i < numberOfWave; i++) {
      const createdWave = new Wave(numberOfWave);
      mapWaves.push(createdWave);
    }
  }
}

import { fetchWaypoints } from "../../waypoint/waypointHandle.js";
import { Unit } from "../../models/units/unit.model.js";
import { Demon } from "../../models/units/demons/demon.model.js";
import { startWaveIcon } from "../icon/icon.instance.js";
import { gameVariable } from "../../gameVariable.js";
import { wave } from "../../init.js";
import { possibleDemonList } from "../units/demons/possibleDemonList.js";

export class Wave {
    constructor(unitMax) {
        this.isWaveStarted = false;
        this.isWaveEnded = false;
        this.demonList = [];
        this.interval = null;
        this.currentUnit = 0;
        this.unitMax = unitMax;
    }

    getRandomInterval(min = 1000, max = 10000) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    async init() {
        await fetchWaypoints();
    }

    async start(startWaveIcon) {
        this.isWaveStarted = true;
        this.isWaveEnded = false;

        gameVariable.wave.currentWaveList.push(wave);

        const spawnDemon = async startWaveIcon => {
            if (this.currentUnit >= this.unitMax) {
                this.end(startWaveIcon);
                return;
            }
            this.demonList.push(possibleDemonList.zorfang());

       //     console.log(this.demonList);
            this.currentUnit++;

            const delay = this.getRandomInterval();
            this.intervalId = setTimeout(spawnDemon, delay);
        };

        spawnDemon();
    }

    end(intervalId, startWaveIcon) {
        clearTimeout(intervalId);
        this.isWaveStarted = false;
        this.isWaveEnded = true;
        startWaveIcon.show();
        return;
    }
}

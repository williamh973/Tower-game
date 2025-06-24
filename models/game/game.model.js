import { gameVariable } from "../../gameVariable.js";
import { campaignDashboard } from "../selectionScreen/selectionScreen.instance.js";

export class Game {
    constructor() {
        this.difficulty = "easy";
    }

    setGameDifficulty(level) {
        const allowed = ["easy", "medium", "hard"];
        if (allowed.includes(level)) {this.difficulty = level;}
        this.openCampaignMap();
    }

    openCampaignMap() {
        gameVariable.ui.selectionScreenList = [];
        gameVariable.ui.iconList = [];

        gameVariable.ui.selectionScreenList.push(campaignDashboard);
    }
}

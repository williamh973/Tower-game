import { context, canvas } from "../../../animate.js";
import { gameVariable } from "../../../gameVariable.js";
import { player } from "../../../models/player.model.js";
import { checkIfUnitLeavesMap } from "../../../playerActions.js";
import { goldDisplay } from "../../../models/icon/icon.instance.js";
import { Unit } from "../unit.model.js";

export class Demon extends Unit {
    constructor(
        position,
        width,
        height,
        image,
        waypoints,
        velocities,
        type,
        stats,
        goldReward,
        armor,
        name
    ) {
        super(
            position,
            width,
            height,
            image,
            waypoints,
            velocities,
            "demon",
            stats,
            goldReward,
            armor,
            name
        );
    }
    
    
}

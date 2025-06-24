import { context } from "../../../animate.js";

export class FloatingIcon {
    constructor(x, y, image, name, text) {
        this.position = {
            x: x,
            y: y
        };
        this.width = 30;
        this.height = 30;
        this.image = image;
        this.name = name;
        this.text = text;
        this.opacity = 1;
        this.riseSpeed = 0.2;
        this.fadeSpeed = 0.01;
        this.finished = false;
    }

    update() {
        this.updateAnimation();
        this.draw();
    }

    updateAnimation() {
        if (this.name === "goldRewardDisplay") {
            this.position.y -= this.riseSpeed;

            if (this.opacity > 0) {
                this.opacity -= this.fadeSpeed;
                if (this.opacity <= 0) {
                    this.opacity = 0;
                    this.finished = true;
                }
            }
        }
    }

    draw() {
        context.save();
        context.globalAlpha = this.opacity;

        if (this.image) {
            context.drawImage(
                this.image,
                this.position.x,
                this.position.y,
                this.width,
                this.height
            );
        }

        if (this.text) {
            context.fillStyle = "whitesmoke";
            context.font = "bold 17px serif";
            context.fillText(this.text, this.position.x, this.position.y);
        }

        context.restore();
    }
}

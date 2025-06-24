import { context } from "../../animate.js";
import { gameVariable } from "../../gameVariable.js";

export class Icon {
    constructor(
        x,
        y,
        image,
        backgroundColor,
        width,
        height,
        isClickable,
        text = "",
        name = ""
    ) {
        this.position = {
            x: x,
            y: y
        };
        this.image = image;
        this.width = width;
        this.height = height;
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.name = name;
        this.isActivated = false;
        this.clickable = isClickable;
        this.associatedBuildSpot = {};
        this.scale = 1;
        this.scaleDirection = 1;
        this.opacity = 1;
        this.fadeSpeed = 0.01;
    }

    draw() {
        const radius = 5;
        context.save();

        if (this.backgroundColor && this.backgroundColor !== "transparent") {
            context.beginPath();
            context.moveTo(this.position.x + radius, this.position.y);
            context.lineTo(
                this.position.x + this.width - radius,
                this.position.y
            );
            context.quadraticCurveTo(
                this.position.x + this.width,
                this.position.y,
                this.position.x + this.width,
                this.position.y + radius
            );
            context.lineTo(
                this.position.x + this.width,
                this.position.y + this.height - radius
            );
            context.quadraticCurveTo(
                this.position.x + this.width,
                this.position.y + this.height,
                this.position.x + this.width - radius,
                this.position.y + this.height
            );
            context.lineTo(
                this.position.x + radius,
                this.position.y + this.height
            );
            context.quadraticCurveTo(
                this.position.x,
                this.position.y + this.height,
                this.position.x,
                this.position.y + this.height - radius
            );
            context.lineTo(this.position.x, this.position.y + radius);
            context.quadraticCurveTo(
                this.position.x,
                this.position.y,
                this.position.x + radius,
                this.position.y
            );
            context.closePath();

            context.fillStyle = this.backgroundColor;
            context.fill();
        }

        if (this.text) {
            context.fillStyle = "whitesmoke";
            context.font = "bold 16px 'Palatino Linotype', 'Book Antiqua' ";
            context.fillText(
                this.text,
                this.position.x + 5,
                this.position.y + 18
            );
        }

        if (this.image && !this.isActivated) {
            const centerX = this.position.x + this.width / 2;
            const centerY = this.position.y + this.height / 2;
            const scaledWidth = this.width * this.scale;
            const scaledHeight = this.height * this.scale;

            context.save();
            context.translate(centerX, centerY);
            context.drawImage(
                this.image,
                -scaledWidth / 2,
                -scaledHeight / 2,
                scaledWidth,
                scaledHeight
            );
            context.restore();
        }
    }

    isClicked(mouseX, mouseY) {
        return (
            mouseX >= this.position.x &&
            mouseX <= this.position.x + this.width &&
            mouseY >= this.position.y &&
            mouseY <= this.position.y + this.height
        );
    }

    setAssociatedBuildSpot(buildSpot) {
        this.associatedBuildSpot = buildSpot;
    }

    updateAnimation() {
        const speed = 0.005;
        const minScale = 0.95;
        const maxScale = 1.05;
        switch (this.name) {
            case "startWaveIcon":
                    this.scale += this.scaleDirection * speed;

                if (this.scale >= maxScale || this.scale <= minScale) {
                    this.scaleDirection *= -1;
                }
                break;
        }
    }

    hidden() {
        if (this.name === "startWaveIcon") {
            return (this.position.y -= 1000);
        }
    }

    show() {
        if (
            this.name === "startWaveIcon" &&
            gameVariable.wave.currentWaveList.length !==
                gameVariable.wave.waveList.length
        ) {
            return (this.position.y += 1000);
        }
    }

    drawDebugCollisionSquare() {
        context.beginPath();
        context.strokeStyle = "red";
        context.lineWidth = 1;

        context.rect(this.position.x, this.position.y, this.width, this.height);

        context.stroke();
        context.closePath();
    }
}

export class Canvas {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");
    this.position = {
      x: 0,
      y: 0,
    };
    this.width = 360;
    this.height = 683;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.context.imageSmoothingEnabled = true;
  }

  clear() {
    this.context.clearRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  drawImage() {
    this.context.fillStyle = "transparent";
    this.context.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  getContext() {
    return this.context;
  }
}

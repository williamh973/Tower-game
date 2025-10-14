export class Canvas {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");
    this.position = {
      x: 0,
      y: 0,
    };
    this.width = 720;
    this.height = 480;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.context.imageSmoothingEnabled = true;
    this.isHovering = false;
    this.mouse = {
      position: { x: 0, y: 0 },
    };

    this.canvas.addEventListener("mousemove", (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.position.x = e.clientX - rect.left;
      this.mouse.position.y = e.clientY - rect.top;
    });
  }

  getMousePosition() {
    return this.mouse;
  }

  clear() {
    this.context.clearRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  draw() {
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

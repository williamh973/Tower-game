export class Tooltips {
  constructor(position, text, width, height) {
    this.position = position;
    this.text = text;
    this.width = width;
    this.height = height;
  }

  draw() {
    if (this.text) {
      context.fillStyle = "whitesmoke";
      context.font = "bold 16px 'Palatino Linotype', 'Book Antiqua' ";
      context.fillText(this.text, this.position.x + 5, this.position.y + 5);
    }
  }
}

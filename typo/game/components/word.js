export class WordComponent {
  constructor(text, fillColor, textColor) {
    if (fillColor === void 0) {
      fillColor = "#ffffff";
    }
    if (textColor === void 0) {
      textColor = "#000000";
    }
    this.x = 10;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.text = text;
    this.fillColor = fillColor;
    this.textColor = textColor;
    this.state = "VISIBLE";
  }
  draw(c) {
    if (this.state == "VISIBLE") {
      c.fillStyle = this.fillColor;
      c.fillRect(this.x, this.y, this.width, this.height);
      c.fillStyle = this.textColor;
      c.textAlign = "center";
      c.textBaseline = "middle";
      c.font = "25px arial";
      c.fillText(
        this.text,
        this.x + this.width / 2,
        this.y + this.height / 2,
        this.width,
      );
    }
  }
  move(maxHeight) {
    if (this.y + this.height > maxHeight) {
      return false;
    }
    this.setPosition(this.x, this.y + 1);
    return true;
  }
  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
  setSize(width, height) {
    this.width = width;
    this.height = height;
  }
  inBounds(mouseX, mouseY) {
    return !(
      mouseX < this.x ||
      mouseX > this.x + this.width ||
      mouseY < this.y ||
      mouseY > this.y + this.height
    );
  }
  hide() {
    this.state = "HIDDEN";
  }
  show() {
    this.state = "VISIBLE";
  }
}

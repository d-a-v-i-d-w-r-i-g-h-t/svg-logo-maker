
class Shape {
  static shapeHeightPercent = 0.8;
  static fontHeightPercent = 0.3;
  static textCenterPercentYoffset = 0.57; // 0 is top-aligned, 0.5 is text-baseline centered, 1 is bottom-aligned (including descenders)
  static width = 300;
  static height = 200;
  static fontLine = `<defs><style type="text/css">@import url("https://fonts.googleapis.com/css?family=Lato|Open+Sans|Oswald|Raleway|Roboto|Indie+Flower|Gamja+Flower");</style></defs>`

  constructor(shapeColor, text, textColor, font) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
    this.font = font;
  }

  firstLine() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="${this.width}" height="${this.height}">`
  }

  textLine() {
    const fontSize = fontHeightPercent * height;
    const xOffset = width / 2;
    const yOffset = ( textCenterPercentYoffset * ( height - fontSize ) ) + ( 0.75 * fontSize );
    return `<text x="${xOffset}" y="${yOffset}" font-size="${fontSize}" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  }

  lastLine() {
    return '</svg>'
  }

  printInfo() {
    console.log(`This shape has the color ${this.shapeColor}`);
    console.log(`This shape has the text ${this.text}`);
    console.log(`This shape has the text color ${this.textColor}`);
  }
}

class Circle extends Shape {
  constructor(shapeColor, text, textColor, font) {
    super(shapeColor, text, textColor, font)
  }
  shapeLine() {
    const radius = Math.round( ( this.height * Shape.shapeHeightPercent ) / 2);
    const xCenter = Math.round( this.width / 2 );
    const yCenter = Math.round( this.height / 2 );
    return `<circle cx="${xCenter}" cy="${yCenter}" r="${radius}"/>`;
  }
  firstLine() { this.firstLine(); }
  fontLine()  { this.fontLine();  }
  textLine()  { this.textLine();  }
  lastLine()  { this.lastLine();  }
}

class Square extends Shape {
  constructor(shapeColor, text, textColor, font) {
    super(shapeColor, text, textColor, font)
  }
  shapeLine() {
    const side = this.height * Shape.shapeHeightPercent;
    const xOffset = ( this.width - side ) / 2;
    const yOffset = ( this.height - side ) / 2;
    return `<rect x="${xOffset}" y="${yOffset}" width="${side}" height="${side}"/>`;
  }
  firstLine() { this.firstLine(); }
  fontLine()  { this.fontLine();  }
  textLine()  { this.textLine();  }
  lastLine()  { this.lastLine();  }
}

class Triangle extends Shape {
  constructor(shapeColor, text, textColor, font) {
    super(shapeColor, text, textColor, font)
  }
  shapeLine() {
    const triangleHeight = this.height * Shape.shapeHeightPercent;
    const side = ( triangleHeight * 2 ) / Math.sqrt( 3 );
    const px = [
        this.width / 2,
      ( this.width / 2 ) + ( side / 2 ),
      ( this.width / 2 ) - ( side / 2 )
    ];
    const py = [
      this.height * ( 1 - Shape.shapeHeightPercent ) / 2,
      this.height * ( 1 + Shape.shapeHeightPercent ) / 2,
      this.height * ( 1 + Shape.shapeHeightPercent ) / 2
    ];
    return `<polygon points="px[0], py[0] px[1], py[1] px[2], py[2]"/>`;
  }
  firstLine() { this.firstLine(); }
  fontLine()  { this.fontLine();  }
  textLine()  { this.textLine();  }
  lastLine()  { this.lastLine();  }
}

    
module.exports = {
  Circle,
  Square,
  Triangle,
}

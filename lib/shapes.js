
class Shape {
  static shapeHeightPercent = 0.8;
  static fontHeightPercent = 0.3;
  static textCenterPercentYoffset = 0.57; // 0 is top-aligned, 0.5 is text-baseline centered, 1 is bottom-aligned (including descenders)
  static width = 300;
  static height = 200;
  static fontURL = 'https://fonts.googleapis.com/css?family=Lato|Open+Sans|Oswald|Raleway|Roboto|Indie+Flower|Gamja+Flower';
  static fontLine = `<defs><style type="text/css">@import url("${Shape.fontURL}");</style></defs>`

  constructor(shapeColor, text, textColor, font) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
    this.font = font;
  }

  firstLine() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="${Shape.width}" height="${Shape.height}">
    ${Shape.fontLine}`
  }

  textLine() {
    const fontSize = Shape.fontHeightPercent * Shape.height;
    const xOffset = Shape.width / 2;
    const yOffset = ( Shape.textCenterPercentYoffset * ( Shape.height - fontSize ) ) + ( 0.75 * fontSize );
    return `<text x="${xOffset}" y="${yOffset}" font-size="${fontSize}" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  }

  lastLine() {
    return '</svg>'
  }

  printInfo() {
    console.log(`This shape has the color ${this.shapeColor}`);
    console.log(`This shape has the text ${this.text}`);
    console.log(`This shape has the text color ${this.textColor}`);
    console.log(`This shape text has the font ${this.font}`);
  }
}

class Circle extends Shape {
  constructor(shapeColor, text, textColor, font) {
    super(shapeColor, text, textColor, font)
  }
  shapeLine() {
    const radius = ( Shape.height * Shape.shapeHeightPercent ) / 2;
    const xCenter =  Shape.width / 2;
    const yCenter =  Shape.height / 2;
    return `<circle cx="${xCenter}" cy="${yCenter}" r="${radius}" fill="${this.shapeColor}"/>`;
  }
}

class Square extends Shape {
  constructor(shapeColor, text, textColor, font) {
    super(shapeColor, text, textColor, font)
  }
  shapeLine() {
    const side =      Shape.height * Shape.shapeHeightPercent;
    const xOffset = ( Shape.width - side ) / 2;
    const yOffset = ( Shape.height - side ) / 2;
    return `<rect x="${xOffset}" y="${yOffset}" width="${side}" height="${side}" fill="${this.shapeColor}"/>`;
  }
}

class Triangle extends Shape {
  constructor(shapeColor, text, textColor, font) {
    super(shapeColor, text, textColor, font)
  }
  shapeLine() {
    const triangleHeight = Shape.height * Shape.shapeHeightPercent;
    const side = ( triangleHeight * 2 ) / Math.sqrt( 3 );
    const px = [
        Shape.width / 2,
      ( Shape.width / 2 ) + ( side / 2 ),
      ( Shape.width / 2 ) - ( side / 2 )
    ];
    const py = [
      Shape.height * ( 1 - Shape.shapeHeightPercent ) / 2,
      Shape.height * ( 1 + Shape.shapeHeightPercent ) / 2,
      Shape.height * ( 1 + Shape.shapeHeightPercent ) / 2
    ];
    return `<polygon points="${px[0]}, ${py[0]} ${px[1]}, ${py[1]} ${px[2]}, ${py[2]}" fill="${this.shapeColor}"/>`;
  }
}

    
module.exports = {
  Circle,
  Square,
  Triangle,
}

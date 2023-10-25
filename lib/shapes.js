    ////////////////////////////////////////////////////////////////////////
   //                                                                    //
  //  Shape class, contains all common parameters for the three shapes  //
 //                                                                    //
////////////////////////////////////////////////////////////////////////
class Shape {

  // various static parameters could easily be turned into inputs if desired
  static shapeHeightPercent = 0.8;
  static fontHeightPercent = 0.3;
  static textCenterPercentYoffset = 0.57; // 0 is top-aligned, 0.5 is text-baseline centered, 1 is bottom-aligned (including descenders)

  // URL for fonts
  static fontURL = 'https://fonts.googleapis.com/css?family=';

  // constructor includes input values for shape
  constructor(shapeColor, text, textColor, font, height, width) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
    this.font = font;
    this.height = height;
    this.width = width;
  }
  

  // method to render first line of SVG content, including header info, logo size, and font source
  firstLine() {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="${this.width}" height="${this.height}">
  <defs>
    <style type="text/css">
      @import url("${Shape.fontURL}${this.font.replace(' ', '+')}");
    </style>
  </defs>`;
  }

  // method to render text formatting line of SVG content, including position, size, font, and text content
  // position and font size are calculated based on shape width and height
  textLine() {
    const fontSize = Math.round(   Shape.fontHeightPercent * this.height );
    const xOffset =  Math.round(   this.width / 2 );
    const yOffset =  Math.round( ( Shape.textCenterPercentYoffset * ( this.height - fontSize ) ) + ( 0.75 * fontSize ) );
    return `  <text x="${xOffset}" y="${yOffset}" font-size="${fontSize}" text-anchor="middle" fill="${this.textColor}" font-family="${this.font}">${this.text}</text>`;
  }

  // method to render final line of SVG content, the svg closing tag
  lastLine() {
    return '</svg>';
  }

  // printInfo method for development purposes
  printInfo() {
    console.log(`This shape has the color ${this.shapeColor}`);
    console.log(`This shape has the text ${this.text}`);
    console.log(`This shape has the text color ${this.textColor}`);
    console.log(`This shape text has the font ${this.font}`);
    console.log(`This SVG object has the height ${this.height}`);
    console.log(`This SVG object has the width ${this.width}`);
  }

  // generateSVG method, takes in argument from child element to specify the shape,
  // the only portion of the SVG logo that is specific to the child
  generateSVG(shapeLine) {
    return `
${this.firstLine()}
${shapeLine()}
${this.textLine()}
${this.lastLine()}
`;

  }
}

    ///////////////////////////////////////////////////////
   //                                                   //
  //  class Circle constructor, same input parameters  //
 //                                                   //
///////////////////////////////////////////////////////
class Circle extends Shape {
  constructor(shapeColor, text, textColor, font, height, width) {
    super(shapeColor, text, textColor, font, height, width)
  }

  // shapeLine method, the only SVG component specific to Circle
  // calculates positioning and size based on Shape height and width
  shapeLine() {
    const radius =  Math.round( ( this.height * Shape.shapeHeightPercent ) / 2 );
    const xCenter = Math.round(   this.width / 2 );
    const yCenter = Math.round(   this.height / 2 );
    return `  <circle cx="${xCenter}" cy="${yCenter}" r="${radius}" fill="${this.shapeColor}"/>`;
  }

  // render method, calls generalized Shape method and passes Circle-specific shapeLine method as argument
  render() {
    return this.generateSVG(() => this.shapeLine());
  }
}

    ///////////////////////////////////////////////////////
   //                                                   //
  //  class Square constructor, same input parameters  //
 //                                                   //
///////////////////////////////////////////////////////
class Square extends Shape {
  constructor(shapeColor, text, textColor, font, height, width) {
    super(shapeColor, text, textColor, font, height, width)
  }

  // shapeLine method, the only SVG component specific to Square
  // calculates positioning and size based on Shape height and width
  shapeLine() {
    const side =      this.height * Shape.shapeHeightPercent;
    const xOffset = ( this.width - side ) / 2;
    const yOffset = ( this.height - side ) / 2;
    return `  <rect x="${xOffset}" y="${yOffset}" width="${side}" height="${side}" fill="${this.shapeColor}"/>`;
  }

  // render method, calls generalized Shape method and passes Square-specific shapeLine method as argument
  render() {
    return this.generateSVG(() => this.shapeLine());
  }
}

    /////////////////////////////////////////////////////////
   //                                                     //
  //  class Triangle constructor, same input parameters  //
 //                                                     //
/////////////////////////////////////////////////////////
class Triangle extends Shape {
  constructor(shapeColor, text, textColor, font, height, width) {
    super(shapeColor, text, textColor, font, height, width)
  }

  // shapeLine method, the only SVG component specific to Triangle
  // calculates positioning and size based on Shape height and width
  shapeLine() {
    const triangleHeight = Shape.height * Shape.shapeHeightPercent;
    const side = ( triangleHeight * 2 ) / Math.sqrt( 3 );
    const px = [
      Math.round(   this.width / 2 ),
      Math.round( ( this.width / 2 ) + ( side / 2 ) ),
      Math.round( ( this.width / 2 ) - ( side / 2 ) )
    ];
    const py = [
      Math.round( this.height * ( 1 - Shape.shapeHeightPercent ) / 2 ),
      Math.round( this.height * ( 1 + Shape.shapeHeightPercent ) / 2 ),
      Math.round( this.height * ( 1 + Shape.shapeHeightPercent ) / 2 )
    ];
    return `  <polygon points="${px[0]}, ${py[0]} ${px[1]}, ${py[1]} ${px[2]}, ${py[2]}" fill="${this.shapeColor}"/>`;
  }

  // render method, calls generalized Shape method and passes Triangle-specific shapeLine method as argument
  render() {
    return this.generateSVG(() => this.shapeLine());
  }
}

// exports from this module to other modules    
module.exports = {
  Circle,
  Square,
  Triangle,
}

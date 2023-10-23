const { Circle, Square, Triangle } = require('./shapes.js');

function generateSVG(data) {
  let selectedShapeLine = "";
  switch(data.shape) {
    case 'circle':
      const circle = new Circle(data.shapeColor, data.text, data.textColor, data.font);
      selectedShapeLine = circle.shapeLine;
      break;
    case 'square':
      const square = new Square(data.shapeColor, data.text, data.textColor, data.font);
      selectedShapeLine = square.shapeLine;
      break;
    case 'triangle':
      const triangle = new Triangle(data.shapeColor, data.text, data.textColor, data.font);
      selectedShapeLine = triangle.shapeLine;
      break;
  }

const svgContent = `
${Shape.firstLine}
${Shape.fontLine}
${selectedShapeLine}
${Shape.textLine}
${Shape.lastLine}
`

return svgContent
}

module.exports = generateSVG
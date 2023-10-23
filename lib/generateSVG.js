const { Circle, Square, Triangle } = require('./shapes.js');

function generateSVG(data) {

  switch(data.shape) {
    case 'circle':
      const circle = new Circle(data.shapeColor, data.text, data.textColor, data.font);
      const shapeLine = circle.shapeLine;
      break;
    case 'square':
      const square = new Square(data.shapeColor, data.text, data.textColor, data.font);
      const shapeLine = square.shapeLine;
      break;
    case 'triangle':
      const triangle = new Triangle(data.shapeColor, data.text, data.textColor, data.font);
      const shapeLine = triangle.shapeLine;
      break;
  }

const svgContent = `
${Shape.firstLine}
${Shape.fontLine}
${shapeLine}
${Shape.textLine}
${Shape.lastLine}
`

return svgContent
}

module.exports = generateSVG
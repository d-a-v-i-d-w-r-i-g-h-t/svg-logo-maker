const { Circle, Square, Triangle } = require('./shapes.js');

function generateSVG(data) {
  console.log(data);
  let shapeLine = "";
  switch(data.shape) {
    case 'circle':
      const circle = new Circle(data.shapeColor, data.text, data.textColor, data.font);
      shapeLine = circle.shapeLine;
      break;
    case 'square':
      const square = new Square(data.shapeColor, data.text, data.textColor, data.font);
      shapeLine = square.shapeLine;
      break;
    case 'triangle':
      const triangle = new Triangle(data.shapeColor, data.text, data.textColor, data.font);
      shapeLine = triangle.shapeLine;
      break;
  }

const svgContent = `
${firstLine}
${fontLine}
${shapeLine}
${textLine}
${lastLine}
`

return svgContent
}

module.exports = generateSVG
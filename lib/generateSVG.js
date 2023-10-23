const { Circle, Square, Triangle } = require('./shapes.js');

function generateSVG(data) {
  let svgContent = '';

  switch(data.shape) {

    case 'circle':
      const circle = new Circle(data.shapeColor, data.text, data.textColor, data.font);
      svgContent = `
${circle.firstLine()}
${circle.shapeLine()}
${circle.textLine()}
${circle.lastLine()}
`;
      break;

    case 'square':
      const square = new Square(data.shapeColor, data.text, data.textColor, data.font);
      svgContent = `
${square.firstLine()}
${square.shapeLine()}
${square.textLine()}
${square.lastLine()}
`;
      break;

    case 'triangle':
      const triangle = new Triangle(data.shapeColor, data.text, data.textColor, data.font);
      svgContent = `
${triangle.firstLine()}
${triangle.shapeLine()}
${triangle.textLine()}
${triangle.lastLine()}
`;
      break;

  }

return svgContent
}

module.exports = generateSVG
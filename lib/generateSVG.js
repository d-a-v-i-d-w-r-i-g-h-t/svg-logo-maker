const { Circle, Square, Triangle } = require('./shapes.js');

function generateSVG(data) {
  let svgContent = '';

  switch(data.shape) {

    case 'circle':
      const circle = new Circle(data.shapeColor, data.text, data.textColor, data.font);
      svgContent = circle.render();
      break;

    case 'square':
      const square = new Square(data.shapeColor, data.text, data.textColor, data.font);
      svgContent = square.render();
      break;

    case 'triangle':
      const triangle = new Triangle(data.shapeColor, data.text, data.textColor, data.font);
      svgContent = triangle.render();
      break;

  }

return svgContent
}

module.exports = generateSVG
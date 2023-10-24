const { Circle, Square, Triangle } = require('./shapes.js');

// function to generate SVG data by calling render method of selected shape
function generateSVG(data) {
  let svgContent = '';

  // in each case, a new instance of the desired constructor is created per user input,
  // and its render method is called
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

// exports from this module to other modules    
module.exports = generateSVG
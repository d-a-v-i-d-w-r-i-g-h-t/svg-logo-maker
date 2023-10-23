const { Circle, Square, Triangle } = require('./shapes.js');

function generateSVG(data) {
  console.log(data);
  let firstLine;
  let shapeLine;
  let textLine;
  let lastLine;
  let svgContent = '';

  switch(data.shape) {

    case 'circle':
      const circle = new Circle(data.shapeColor, data.text, data.textColor, data.font);
      // firstLine = circle.firstLine();
      // shapeLine = circle.shapeLine();
      // textLine =  circle.textLine();
      // lastLine =  circle.lastLine();
      svgContent = `
${circle.firstLine()}
${circle.shapeLine()}
${circle.textLine()}
${circle.lastLine()}
`;
      break;

    case 'square':
      const square = new Square(data.shapeColor, data.text, data.textColor, data.font);
      // firstLine = square.firstLine();
      // shapeLine = square.shapeLine();
      // textLine =  square.textLine();
      // lastLine =  square.lastLine();
      svgContent = `
${square.firstLine()}
${square.shapeLine()}
${square.textLine()}
${square.lastLine()}
`;
      break;

    case 'triangle':
      const triangle = new Triangle(data.shapeColor, data.text, data.textColor, data.font);
      // firstLine = triangle.firstLine();
      // shapeLine = triangle.shapeLine();
      // textLine =  triangle.textLine();
      // lastLine =  triangle.lastLine();
      svgContent = `
${triangle.firstLine()}
${triangle.shapeLine()}
${triangle.textLine()}
${triangle.lastLine()}
`;
      break;

  }

// const svgContent = `
// ${firstLine()}
// ${fontLine()}
// ${shapeLine()}
// ${textLine()}
// ${lastLine()}
// `

return svgContent
}

module.exports = generateSVG
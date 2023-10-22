const fs = require('fs');

const userInput = require('./lib/userInput.js');

console.log(
  userInput.text,
  userInput.textColor,
  userInput.shape,
  userInput.shapeColor
  );

// Pseudocode

//  1. Prompt user for logo text
//     a. response must have 1-3 characters

//  2. Prompt user for text color
//     a. color keyword (check against list of color keywords?)
//     b. hexadecimal number

//  3. Prompt user for shape
//     a. type: list
//     b. options: circle, triangle, square

//  4. Prompt user for shape color
//     a. color keyword (check against list of color keywords?)
//     b. hexadecimal number

//  5. Create an SVG file
//     a. proper shape, shape color
//     b. text, text color
//     c. size 300x200 pixels

//  6. Save SVG file
//     a. if necessary, create the folder 'output'
//     b. save the file as logo.svg in the output folder

//  7. Display success message
//     a. 'Generated logo.svg' printed to the command line

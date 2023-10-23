// const chalk = require('chalk');

const welcome = require('./lib/welcome.js');
const userInput = require('./lib/userInput.js');
const generateSVG = require('./lib/generateSVG.js');
const writeToFile = require('./lib/writeToFile.js');

const newFileName = 'logo.svg';

const log = console.log;

let input;
async function main() {

  welcome()

  try {
    input = await userInput();

    // log('');
    // log('User Input:', input);

    // log('');

    // log('Text: ' + chalk.hex(input.textColor).bold(input.text));
    // log('Shape: ' + chalk.hex(input.shapeColor).bold(input.shape));

    // log('');

  } catch (error) {
    // Handle errors that might occur in the main logic
    console.error('Error:', error);
  }

  const svgData = generateSVG(input);

  writeToFile(newFileName, svgData);
}

main();



// Pseudocode

//  0. Display welcome message

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

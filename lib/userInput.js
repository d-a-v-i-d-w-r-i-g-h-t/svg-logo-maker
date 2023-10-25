const inquirer = require('inquirer');
const validateColorInput = require('./validateColorInput.js');
const namedColors = require('./namedColors.js');


async function userInput() {
  try {

    // an array of questions for user input
    const questions = [
      {
        type: 'list',
        name: 'shape',
        message:'Select your desired shape:',
        choices: ['circle', 'square', 'triangle'],
      },
      {
        type: 'input',
        name: 'text',
        message:`Enter your logo text (1-3 characters)`,
        validate: function (input) { 
          return input.length > 0 && input.length <= 3
        }
      },
      {
        type: 'list',
        name: 'font',
        message:'Select your desired font:',
        choices: ['Arial', 'Cursive', 'Sans-serif', 'Serif', 'Monospace', 'Lato', 'Open Sans', 'Oswald', 'Raleway', 'Roboto', 'Indie Flower', 'Gamja Flower'],
      },
      {
        type: 'input',
        name: 'textColor',
        message:`Enter your desired text color (color code or hex with leading '#'):`,
        validate: function (input) { 
            return validateColorInput(input)
        }
      },
      {
        type: 'input',
        name: 'shapeColor',
        message:`Enter your desired shape color (color code or hex with leading '#'):`,
        validate: function (input) { 
            return validateColorInput(input)
        }
      },
      {
        type: 'input',
        name: 'height',
        message:`Enter the desired height:`,
        default: '200', // default value
        validate: function (input) { 
          return !isNaN(input) && input.length > 0
        }
      },
      {
        type: 'input',
        name: 'width',
        message:`Enter the desired width:`,
        default: '300', // default value
        validate: function (input) { 
          return !isNaN(input) && input.length > 0
        }
      },
    ];

    // use inquire to ask questions, return data
    const response = await inquirer.prompt(questions);

    // make hex codes uppercase
    if ( !Object.keys(namedColors).includes(response.textColor) ) {
      response.textColor = response.textColor.toUpperCase();
    }
    if ( !Object.keys(namedColors).includes(response.shapeColor) ) {
      response.shapeColor = response.shapeColor.toUpperCase();
    }
    return {
      text: response.text,
      textColor: response.textColor,
      font: response.font,
      shape: response.shape,
      shapeColor: response.shapeColor,
      height: response.height,
      width: response.width
    };
  } catch(error) {
      console.error('Error occurred: ', error);
      if (error.isTtyError) {
          console.log("Prompt couldn't be rendered in the current environment");
      } else {
          console.log("Something else went wrong");
      }
      throw error;
    }
}

// exports from this module to other modules    
module.exports = userInput
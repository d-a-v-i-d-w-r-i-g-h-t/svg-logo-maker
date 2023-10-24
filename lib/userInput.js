const inquirer = require('inquirer');
const validateColorInput = require('./validateColorInput.js');
const namedColors = require('./namedColors.js');


async function userInput() {
  try {

    // an array of questions for user input
    const questions = [
      {
        type: 'input',
        name: 'text',
        message:`Enter your logo text (1-3 characters)`,
        validate: function (input) { 
          return input.length > 0 && input.length <= 3
        }
      },
      {
        type: 'input',
        name: 'textColor',
        message:`Enter your desired text color (color code or hex):`,
        validate: function (input) { 
            return validateColorInput(input)
        }
      },
      {
        type: 'list',
        name: 'font',
        message:'Select your desired font:',
        choices: ['Arial', 'Cursive', 'Sans-serif', 'Serif', 'Monospace', 'Lato', 'Open Sans', 'Oswald', 'Raleway', 'Roboto', 'Indie Flower', 'Gamja Flower'],
      },
      {
        type: 'list',
        name: 'shape',
        message:'Select your desired shape:',
        choices: ['circle', 'square', 'triangle'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message:`Enter your desired shape color (color code or hex):`,
        validate: function (input) { 
            return validateColorInput(input)
        }
      }
    ];

    // use inquire to ask questions, return data
    const response = await inquirer.prompt(questions);

    if ( Object.keys(namedColors).includes(response.textColor) ) {
      // response.textColor = namedColors[response.textColor];
    } else {
      response.textColor = response.textColor.toUpperCase();
    }
    console.log(response.textColor);
    if ( Object.keys(namedColors).includes(response.shapeColor) ) {
      // response.shapeColor = namedColors[response.shapeColor];
    } else {
      response.shapeColor = response.textColor.toUpperCase();
    }
    console.log(response.shapeColor);

    return {
      text: response.text,
      textColor: response.textColor,
      font: response.font,
      shape: response.shape,
      shapeColor: response.shapeColor
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
const inquirer = require('inquirer');


//  an array of questions for user input
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
        return input.length > 0
    }
  },
  {
    type: 'list',
    name: 'shape',
    message:'Select your desired shape:',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message:`Enter your desired text color (color code or hex):`,
    validate: function (input) { 
      return input.length > 0
    }
  },
];


const text;
const textColor;
const shape;
const shapeColor;


module.exports = {
  text: text,
  textColor: textColor,
  shape: shape,
  shapeColor: shapeColor
}
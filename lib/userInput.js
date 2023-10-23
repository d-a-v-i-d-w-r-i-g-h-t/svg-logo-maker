const inquirer = require('inquirer');

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

    // use inquire to ask questions, return data
    const response = await inquirer.prompt(questions);
    
    // console.log('User Input: ', response);

    return {
      text: response.text,
      textColor: response.textColor,
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

module.exports = userInput
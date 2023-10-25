const chalk = require('chalk');
const rainbowColors = require('./rainbowColors.js');

// display colorful welcome message
function success(message) {
  const log = console.log;



  // format message
  let colorMessage = '';

  for (let i = 0; i < message.length; i++) {
    colorMessage += chalk.hex(rainbowColors[i % rainbowColors.length]).bold(message[i]);
  }
  colorMessage = '\n' + colorMessage + '\n';

  return colorMessage;
}

// exports from this module to other modules    
module.exports = success

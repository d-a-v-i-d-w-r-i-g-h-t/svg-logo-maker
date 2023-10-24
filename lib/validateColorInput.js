const namedColors = require('./namedColors.js');

function validateColorInput(input) {

  if ( Object.keys(namedColors).includes(input) === true ) { // input is a named color
    return true

  // must be greater than 1, less than 8, and have a # symbol
  } else if ( input.length > 1 && input.length < 8 && input[0] === '#') {
    let isHex = true;

    if (input[0] === '#') {
      input = input.slice(1)
    }

    // https://www.geeksforgeeks.org/check-if-a-string-represents-a-hexadecimal-number-or-not/#
    // loop through every character in the input string
    for (let i = 0; i < input.length; i++) {

      // convert character to uppercase
      const char = input[i].toUpperCase();

      if ( ( char < '0' || char > '9' ) &&
           ( char < 'A' || char > 'F' ) ) {
        isHex = false;
      }
    }
    if ( isHex === true ) {
      return true
    }
  }
  return false
}


// exports from this module to other modules    
module.exports = validateColorInput

const namedColors = require('./namedColors.js');

function validateColorInput(input) {
  if ( Object.keys(namedColors).includes(input) ) { // input is a named color
    return true
  } else if ( input.length > 1 && ( input.length < 7 || (input.length < 8 && input[0] === '#') ) ) {
    let isHex = true;
    if (input[0] = '#') {
      input = input.slice(1)
    }
    // https://www.geeksforgeeks.org/check-if-a-string-represents-a-hexadecimal-number-or-not/#
    for (let i = 0; i < input.length; i++) {
      const char = input[i].toUpperCase;
      if ( ( char < '0' || char > '9' ) &&
           ( char < 'A' || char > 'F' ) ) {
        isHex = false;
      }
    }
    if ( isHex = true ) {
      return true
    }
  }
}

module.exports = validateColorInput

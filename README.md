# SVG Logo Maker

## Description [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This command-line application generates an SVG logo based on simple user input.


## Table of Contents
  
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Credits](#credits)
* [License](#license)


## Installation

Run the following command to install dependencies:

```
npm install
```


## Usage 

Use the following command to run the application:

```
node index.js
```

Provide a shape, color, and text input in response to the command-line prompts. The new file logo.svg will be generated in the 'outputs' folder.


## Tests

Run the following command to run tests:

```
npm test
```


## Credits

I used [inquirer 8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4) for command-line user prompts and response input.

I used [chalk 4.1.2](https://www.npmjs.com/package/chalk/v/4.1.2) for command-line text formatting.

ASCII art leters were created with the [ASCII Art Generator](https://ascii.mastervb.net/text_to_ascii.php).

[ChatGPT](https://chat.openai.com/) created an object for me with all 140 HTML named colors and their HEX values.

I got ideas on how to validate HEX color input from [GeeksforGeeks](https://www.geeksforgeeks.org/), [Check if a string represents a hexadecimal number or not](https://www.geeksforgeeks.org/check-if-a-string-represents-a-hexadecimal-number-or-not/#).


## License

This project is licensed under the terms of the MIT License.

Detailed information about this license can be found [here](https://choosealicense.com/licenses/mit/).

---

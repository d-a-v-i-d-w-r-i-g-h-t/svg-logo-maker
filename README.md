# SVG Logo Maker

## Description [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This command-line application generates an SVG logo based on simple user input. It uses [node fs](https://nodejs.org/docs/latest-v18.x/api/fs.html#file-system) to write files, and the [npm inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) package to provide user prompts and command-line input. This project gave me an excellent opportunity to learn more about constructors, and in particular using child constructors that inherit common properties and methods from their parent, as the logos are generated using three primary shapes. I used these constructors to create an SVG file that would fulfil the user's desired specifications for shape, shape color, text, text color, text content, and font. The result is saved in the file 'logo.svg'.

Additionally, I created a suite of automated tests to verify the correct functioning of the shapes constructors Circle, Square, and Triangle. The tests are run using [jest](https://www.npmjs.com/package/jest).

Command-line formatting was done with [chalk](https://www.npmjs.com/package/chalk/v/4.1.2?activeTab=readme).

A screenshot of the application and its output is shown below.

![Installing dependencies](./assets/images/command-line-and-output.png)



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

A screenshot of successful installation is presented below.

![Installing dependencies](./assets/images/install.png)

## Usage 

Use the following command to run the application:

```
node index.js
```

![Welcome message formatted with chalk](./assets/images/welcome-message.png)

On starting the application, the user is presented with a welcome message and then prompted to provide text, text color, font, shape, and shape color input in response to the command-line prompts. Inputs are all validated. The new file logo.svg will then be generated in the 'outputs' folder.

A video walkthrough can be found [here](https://watch.screencastify.com/v/j08ayp0ClfJ7Y4tPykDY).

Font selection is shown below. Arrow keys allow scrolling up and down the wraparound list.

![Installing dependencies](./assets/images/select-font.png)

Shape selection is shown below.

![Installing dependencies](./assets/images/select-shape.png)



## Tests

Run the following command to run tests:

```
npm test
```

A video walkthrough showing successful tests can be found [here](https://watch.screencastify.com/v/W3chzSRmdfOGFJESWT2M).

A screenshot of successful tests is shown below.

![Test operation](./assets/images/test.png)


## Credits

I used [inquirer 8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4) for command-line user prompts and response input.

I used [chalk 4.1.2](https://www.npmjs.com/package/chalk/v/4.1.2) for command-line text formatting.

I used [node fs](https://nodejs.org/docs/latest-v18.x/api/fs.html#file-system) to create directories and write files.

I used [jest](https://www.npmjs.com/package/jest) for automated JavsScript testing.

ASCII art leters were created with the [ASCII Art Generator](https://ascii.mastervb.net/text_to_ascii.php).

I got ideas on how to validate HEX color input from [GeeksforGeeks](https://www.geeksforgeeks.org/), [Check if a string represents a hexadecimal number or not](https://www.geeksforgeeks.org/check-if-a-string-represents-a-hexadecimal-number-or-not/#).


## License

This project is licensed under the terms of the MIT License.

Detailed information about this license can be found [here](https://choosealicense.com/licenses/mit/).

---

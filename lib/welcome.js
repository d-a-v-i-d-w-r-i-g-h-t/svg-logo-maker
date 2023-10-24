const chalk = require('chalk');

const rainbowColors = [
  '#FF0000', '#FF2400', '#FF4900', '#FF6D00', '#FF9200', '#FFB600',
  '#FFDB00', '#FFFF00', '#DAFF00', '#B6FF00', '#91FF00', '#6DFF00',
  '#48FF00', '#24FF00', '#00FF00', '#00FF25', '#00FF49', '#00FF6E',
  '#00FF92', '#00FFB7', '#00FFDB', '#00FEFF', '#00DAFF', '#00B5FF',
  '#0091FF', '#006CFF', '#0048FF', '#0023FF', '#0000FF', '#2400FF',
  '#4800FF', '#6D00FF', '#9100FF', '#B600FF', '#DA00FF', '#FE00FD',
  '#FF00D9', '#FF00B5', '#FF0090', '#FF006C', '#FF0047', '#FF0023'
  ];

let numColors = rainbowColors.length;

// display colorful welcome message
function welcome() {
  const log = console.log;

  // let testRow = '';
  // for (let i = 0; i < rainbowColors.length; i++) {
  //   testRow += chalk.hex(rainbowColors[i]).bold('*');
  //   if (i < rainbowColors.length - 1) {
  //     testRow += ' ';
  //   }
  // }
  // console.log(testRow);


  // create top border
  let row = [];
  row[0] = "";
  const endVal = 26;
  for (let i = 0; i < endVal; i++) {
    row[0] += chalk.hex(rainbowColors[i]).bold('*');
    if (i < endVal - 1) {
      row[0] += ' ';
    }
  }
  row[0] = '   ' + row[0] + '   \n';
  // console.log(row[0]);


  // create bottom border
  row[17] = "";
  const startval = 26;
  for (let i = startval - 1; i >= 0; i--) {
    row[17] += chalk.hex(rainbowColors[i]).bold('*');
    if (i > 0) {
      row[17] += ' ';
    }
  }
  row[17] = '   ' + row[17] + '   \n';
  // console.log(row[17]);

  // create left and right borders
  const numRows = 16;
  let lb = [];
  let rb = [];
  for (let i = 1; i <= numRows; i++) {
    lb[i] = chalk.hex( rainbowColors[ numColors - i ] ).bold('   *');
    rb[i] = chalk.hex( rainbowColors[ i + 25 ]        ).bold('*   ');
  }
  
  // create themes for the ASCII letters
  // const color1 = chalk.red;
  // const color2 = chalk.green;
  // const color3 = chalk.blue;
  const color1 = chalk.hex('#FF0000');
  const color2 = chalk.hex('#48FF00');
  const color3 = chalk.hex('#006CFF');
  
  // create left section
  const left = [,
    chalk('                                                 '),
    chalk.bold('   Welcome to the                                '),
    color1('        ___'),
    color1('       /\\  \\'),
    color1('      /::\\  \\'),
    color1('     /:/\\ \\  \\'),
    color1('    _\\:\\~\\ \\  \\'),
    color1('   /\\ \\:\\ \\ \\__\\'),
    color1('   \\:\\ \\:\\ \\/__/'),
    color1('    \\:\\ \\:\\__\\'),
    color1('     \\:\\/:/  /'),
    color1('      \\::/  /'),
    color1('       \\/__/'),
    chalk('                                                 '),
    chalk.bold('                                    Logo Maker   '),
    chalk('                                                 '),
  ];
  // create center section
  const center = [,
    '',
    '',
    color2('           ___'),
    color2('         /\\__\\'),
    color2('       /:/  /'),
    color2('     /:/  /'),
    color2('   /:/__/  ___'),
    color2('  |:|  | /\\__\\'),
    color2('  |:|  |/:/  /'),
    color2('    |:|__/:/  /'),
    color2('     \\::::/__/'),
    color2('       ~~~~'),
    '',
    '',
    '',
    '',
  ];
  // create right section
  const right = [,
    '',
    '',
    color3('           ___          ',),
    color3('         /\\  \\         '),
    color3('        /::\\  \\        '),
    color3('        /:/\\:\\  \\       '),
    color3('   /:/  \\:\\  \\      '),
    color3(' /:/__/_\\:\\__\\     '),
    color3(' \\:\\  /\\ \\/__/     '),
    color3('   \\:\\ \\:\\__\\       '),
    color3('     \\:\\/:/  /       '),
    color3('          \\::/  /        '),
    color3('                       \\/__/         '),
    '',
    '',
    '',
  ];

  // create rows
  for (let j = 1; j <= numRows; j++) {
    row[j] = lb[j] + left[j] + center[j] + right[j] + rb[j] + "\n";
  }

  // create top and bottom margin
  rowMargin = '                                                         \n';

  // build message
  let welcomeMsg = '';

  for (let i = 0; i < row.length; i++) {
    welcomeMsg = welcomeMsg + row[i];
  }
  // add top and bottom margin
  welcomeMsg = '\n' + rowMargin + welcomeMsg + rowMargin;

  console.log(chalk.whiteBright.bgBlack.bold(welcomeMsg));


//   const welcomeMsg = `

// * * * * * * * * * * * * * * * * * * * * * * * * * *
// *                                                 *
// *   Welcome to the                                *
// *        ___           ___           ___          *
// *       /\\  \\         /\\__\\         /\\  \\         *
// *      /::\\  \\       /:/  /        /::\\  \\        *
// *     /:/\\ \\  \\     /:/  /        /:/\\:\\  \\       *
// *    _\\:\\~\\ \\  \\   /:/__/  ___   /:/  \\:\\  \\      *
// *   /\\ \\:\\ \\ \\__\\  |:|  | /\\__\\ /:/__/_\\:\\__\\     *
// *   \\:\\ \\:\\ \\/__/  |:|  |/:/  / \\:\\  /\\ \\/__/     *
// *    \\:\\ \\:\\__\\    |:|__/:/  /   \\:\\ \\:\\__\\       *
// *     \\:\\/:/  /     \\::::/__/     \\:\\/:/  /       *
// *      \\::/  /       ~~~~          \\::/  /        *
// *       \\/__/                       \\/__/         *
// *                                                 *
// *                                    Logo Maker   *
// *                                                 *
// * * * * * * * * * * * * * * * * * * * * * * * * * *


// // `;
// console.log(chalk.blue.bold(welcomeMsg));



  // * * * * * * * * * * * * * * * * * * * * * * * * * *
  // *                                                 *
  // *   Welcome to the                                *
  // *        ___           ___           ___          *
  // *       /\  \         /\__\         /\  \         *
  // *      /::\  \       /:/  /        /::\  \        *
  // *     /:/\ \  \     /:/  /        /:/\:\  \       *
  // *    _\:\~\ \  \   /:/__/  ___   /:/  \:\  \      *
  // *   /\ \:\ \ \__\  |:|  | /\__\ /:/__/_\:\__\     *
  // *   \:\ \:\ \/__/  |:|  |/:/  / \:\  /\ \/__/     *
  // *    \:\ \:\__\    |:|__/:/  /   \:\ \:\__\       *
  // *     \:\/:/  /     \::::/__/     \:\/:/  /       *
  // *      \::/  /       ~~~~          \::/  /        *
  // *       \/__/                       \/__/         *
  // *                                                 *
  // *                                    Logo Maker   *
  // *                                                 *
  // * * * * * * * * * * * * * * * * * * * * * * * * * *

  // created with: ASCII Art Generator
  // https://ascii.mastervb.net/text_to_ascii.php
  // font: isometric1.flf

}

// exports from this module to other modules    
module.exports = welcome



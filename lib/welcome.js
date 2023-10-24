const chalk = require('chalk');

const rainbowColors = [
  "#ff0000", "#ff2a00", "#ff5500", "#ff8000", "#ffaa00", "#ffd400",
  "#ffff00", "#d4ff00", "#aaff00", "#80ff00", "#55ff00", "#2aff00",
  "#00ff00", "#00ff2a", "#00ff55", "#00ff80", "#00ffaa", "#00ffd4",
  "#00ffff", "#00d4ff", "#00aaff", "#0080ff", "#0055ff", "#002aff",
  "#0000ff", "#2a00ff", "#5500ff", "#8000ff", "#aa00ff", "#d400ff",
  "#ff00ff", "#ff00d4", "#ff00aa", "#ff0080", "#ff0055", "#ff002a",
  "#ff0000", "#ff2a00", "#ff5500", "#ff8000", "#ffaa00", "#ffd400",
];

let numColors = rainbowColors.length;

// let stars = "";
// for (let i = 0; i < numColors; i++){
//   console.log(chalk.hex(rainbowColors[i]).bold('*'));
// }

function welcome() {
  const log = console.log;

  // log(chalk.blue.bold.underline('Hello') + ' World' + chalk.red.italic('!'));

  // const redStar = chalk.red.bold('*');
  // const greenStar = chalk.green.bold('*');
  // const yellowStar = chalk.yellow.bold('*');
  // const blueStar = chalk.blue.bold('*');
  // const magentaStar = chalk.magenta.bold('*');
  // const cyanStar = chalk.cyan.bold('*');

  // log(redStar +
  //     greenStar +
  //     yellowStar +
  //     blueStar +
  //     magentaStar +
  //     cyanStar
  // );

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

  // create bottom border
  row[17] = "";
  const startval = 26;
  for (let i = startval - 1; i >= 0; i--) {
    row[17] += chalk.hex(rainbowColors[i]).bold('*');
    if (i > 0) {
      row[17] += ' ';
    }
  }


  // const numRows = 16;
  // // create left and right borders
  // let lb = [];
  // for (let i = 1; i <= numRows; i++) {
  //   lb[i] = chalk.hex( rainbowColors[numColors + 1 - i] ).bold('*');
  //   rb[i] = chalk.hex( rainbowColors[i + numRows]       ).bold('*');
  // }

  // // create themes for the ASCII letters
  // const color1 = chalk.red;
  // const color2 = chalk.green;
  // const color3 = chalk.blue;
  // // create left section
  // const left = [
  //   '                                                 ',
  //   chalk.bold('   Welcome to the                                '),
  //   color1('        ___'),
  //   color1('       /\\  \\'),
  //   color1('      /::\\  \\'),
  //   color1('     /:/\\ \\  \\'),
  //   color1('    _\\:\\~\\ \\  \\'),
  //   color1('   /\\ \\:\\ \\ \\__\\'),
  //   color1('   \\:\\ \\:\\ \\/__/'),
  //   color1('    \\:\\ \\:\\__\\'),
  //   color1('     \\:\\/:/  /'),
  //   color1('      \\::/  /'),
  //   color1('       \\/__/'),
  //   '                                                 ',
  //   chalk.bold('                                    Logo Maker   '),
  //   '                                                 '
  // ];
  // // create center section
  // const center = [
  //   '',
  //   '',
  //   color2('           ___'),
  //   color2('         /\\__\\'),
  //   color2('       /:/  /'),
  //   color2('     /:/  /'),
  //   color2('   /:/__/  ___'),
  //   color2('  |:|  | /\\__\\'),
  //   color2('  |:|  |/:/  /'),
  //   color2('    |:|__/:/  /'),
  //   color2('     \\::::/__/'),
  //   color2('       ~~~~'),
  //   '',
  //   '',
  //   ''
  // ];
  // // create right section
  // const right = [
  //   '',
  //   '',
  //   color3('           ___          ',),
  //   color3('         /\\  \\         '),
  //   color3('        /::\\  \\        '),
  //   color3('        /:/\\:\\  \\       '),
  //   color3('   /:/  \\:\\  \\      '),
  //   color3(' /:/__/_\\:\\__\\     '),
  //   color3(' \\:\\  /\\ \\/__/     '),
  //   color3('   \\:\\ \\:\\__\\       '),
  //   color3('     \\:\\/:/  /       '),
  //   color3('          \\::/  /        '),
  //   color3('                       \\/__/         '),
  //   '',
  //   ''
  // ];

  // // create rows
  // for (let j = 1; j <= numRows; j++) {
  //   row[j] = lb[j] + ' + ' + left[j] + ' + ' + mid[j] + ' + ' + right[j] + ' + ' + rb[j] + ' + ' + "\n";
  // }

  // // build message
  // let welcomeMsg = "/n";

  // for (let i = 0; i < row.length; i++) {
  //   welcomeMsg + row[i] + '/n';
  // }

  const welcomeMsg = `

${row[0]}
*                                                 *
*   Welcome to the                                *
*        ___           ___           ___          *
*       /\\  \\         /\\__\\         /\\  \\         *
*      /::\\  \\       /:/  /        /::\\  \\        *
*     /:/\\ \\  \\     /:/  /        /:/\\:\\  \\       *
*    _\\:\\~\\ \\  \\   /:/__/  ___   /:/  \\:\\  \\      *
*   /\\ \\:\\ \\ \\__\\  |:|  | /\\__\\ /:/__/_\\:\\__\\     *
*   \\:\\ \\:\\ \\/__/  |:|  |/:/  / \\:\\  /\\ \\/__/     *
*    \\:\\ \\:\\__\\    |:|__/:/  /   \\:\\ \\:\\__\\       *
*     \\:\\/:/  /     \\::::/__/     \\:\\/:/  /       *
*      \\::/  /       ~~~~          \\::/  /        *
*       \\/__/                       \\/__/         *
*                                                 *
*                                    Logo Maker   *
*                                                 *
${row[17]}


// `;

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

  console.log(chalk.blue.bold(welcomeMsg));

}

// exports from this module to other modules    
module.exports = welcome



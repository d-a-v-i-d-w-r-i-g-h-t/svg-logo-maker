const chalk = require('chalk');
const rainbowColors = [
  "#ff0000", "#fc1404", "#f92908", "#f63e0c", "#f35310", "#f16814", "#ee7d18",
  "#ec921c", "#eaa720", "#e8bc24", "#e6d128", "#e4e52c", "#d5e82c", "#c6eb2c",
  "#b7ee2c", "#a8f12c", "#99f42c", "#8af72c", "#7bf92c", "#6cfc2c", "#5df32c",
  "#4ee92c", "#3fde2c", "#30d42c", "#21c92c", "#12bf2c", "#0da72a", "#0e9027",
  "#0e7925", "#0f6123", "#0f4a20", "#10331e", "#101b1c", "#110418", "#110317",
  "#120216", "#120115", "#120014", "#120013", "#120012", "#120011", "#120010",
  "#ff0000"
];

let numCol = rainbowColors.length;

let stars = "";
for (let i = 0; i < numCol; i++){
  // console.log(chalk.hex(rainbowColors[i]).bold('*'));
}

function welcome() {
  // const log = console.log;

  // // log(chalk.blue.bold.underline('Hello') + ' World' + chalk.red.italic('!'));

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
  // let row = [];
  // row[0] = "";
  // const endVal = 26;
  // for (let i = 0; i < endVal; i++) {
  //   row[0] += chalk.hex(rainbowColors[i]).bold('*');
  //   if (i < endVal - 1) {
  //     row[0] += ' ';
  //   }
  // }

  // let welcomeMsg = "";

  // ${row[0]}
  // const numRows = 16;
  // for (let j = 1; j < 16; j++) {
  //   row[j] = lb[j] + left[j] + mid[j] + right[j] + rb[j] + "\n";
  // }
  // let lb = [];
  // for (let i = 1; i <= numRows; i++) {
  //   lb[i] = chalk.hex(rainbowColors[numCol-j-1]).bold('*');
  //   rb[i] = chalk.hex(rainbowColors[i]);
  // }
  // log(chalk.hex(rainbowColors[numCol-j-1]).bold('*'));

  let welcomeMsg = `

* * * * * * * * * * * * * * * * * * * * * * * * * *
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
* * * * * * * * * * * * * * * * * * * * * * * * * *

`;

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

module.exports = welcome



const figlet            = require('figlet');
const chalk             = require('chalk');
const clear             = require('clear');

module.exports = {
    printRCA : () => {
        clear();
        console.log("");
        console.log (
            chalk.yellow (
                figlet.textSync('\n~~ R.C.A. ~~', { horizontalLayout: 'full' }))
        );
    },

    printSuccessInstructions : (folderName) => {
        setTimeout(() => {
        console.log(chalk.green.bold(' cd ' + folderName));
        console.log(chalk.green.bold('\n npm install'));
        console.log(chalk.green.bold('\n npm run start\n'));  
        }, 500);

    }
}
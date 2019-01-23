const figlet            = require('figlet');
const chalk             = require('chalk');
const clear             = require('clear');

module.exports = {
    printRCA : () => {
        clear();
        console.log("");
        console.log (
            chalk.yellow (
                figlet.textSync('\n R.C.A.', { horizontalLayout: 'full' }))
        );
    },

    printSuccessInstructions : (folderName) => {
        console.log(chalk.green.bold('\n Success! \n'));
        setTimeout(() => {
        console.log(chalk.green.bold('cd ' + folderName));
        console.log(chalk.green.bold('\nnpm install'));
        console.log(chalk.green.bold('\nnpm run start\n'));  
        }, 500);

    }
}
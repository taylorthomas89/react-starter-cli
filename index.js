const figlet            = require('figlet');
const chalk             = require('chalk');
const clear             = require('clear');
const fs                = require('fs');

const files             = require('./lib/files');

clear();
console.log('');
console.log (
    chalk.yellow (
        figlet.textSync('~~ R.C.A. ~~', { horizontalLayout: 'full' }))
);



const run = async () => {
   
}

// run();
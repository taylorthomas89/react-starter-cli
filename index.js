const figlet            = require('figlet');
const chalk             = require('chalk');
const clear             = require('clear');
const fs                = require('fs');

const files             = require('./lib/files');
const github            = require('./lib/github');
const { url }           = require('./config/repo-config');

clear();
console.log('');
console.log (
    chalk.yellow (
        figlet.textSync('~~ R.C.A. ~~', { horizontalLayout: 'full' }))
);


const run = async () => {
    const done = await github.cloneRepo(url);
    if (done) { 
        console.log(chalk.green('Done!'));
    }

}

run();
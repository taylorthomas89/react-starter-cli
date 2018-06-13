const figlet            = require('figlet');
const chalk             = require('chalk');
const clear             = require('clear');

const github            = require('./lib/github');
const { url }           = require('./config/repo-config');

clear();

console.log('');
console.log (
    chalk.yellow (
        figlet.textSync('~~ R.C.A. ~~', { horizontalLayout: 'full' }))
);


const run = async () => {
    const cloneDone = await github.cloneRepo(url);
    const removeGitDone = await github.removeGit();
    
    if (cloneDone && removeGitDone) { 
        console.log(chalk.green('Done!'));    
    } else {
        console.log(chalk.red('\nOops! Something went wrong..'));
        console.log(cloneDone + '\n');
        
    }
}

run();
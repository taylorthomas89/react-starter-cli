const figlet            = require('figlet');
const chalk             = require('chalk');
const clear             = require('clear');

const { url }           = require('./config/repo-config');
const github            = require('./lib/github');
const files             = require('./lib/files');
const inquierer         = require('./lib/inquirer');

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
        const folderName = await inquierer.askFolderName();
        if (folderName) {
            files.renameFolder(folderName);
            console.log(chalk.green('\n Success! \n')); 
        }

    } else {
        console.log(chalk.red('\nOops! Something went wrong..'));
        console.log(cloneDone + '\n');
    }
}

run();
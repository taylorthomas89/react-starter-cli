const chalk = require('chalk');

const { url } = require('./config/repo-config');

const github = require('./lib/github');
const files = require('./lib/files');
const inquierer = require('./lib/inquirer');
const messages = require('./lib/messages');

messages.printRCA();

const run = async () => {
    const cloneDone = await github.cloneRepo(url); // clones react-starter repo
    const removeGitDone = await github.removeGit(); // removes .git folder from within react-starter repo

    if (cloneDone && removeGitDone) {
        const folderName = await inquierer.askFolderName(); // asks user for input to rename react-starter folder
        if (folderName) {
            await files.renameFolder(folderName); // renames react-starter folder to what the user inputs. input must be longer than 3 characters
            messages.printRCA();
            console.log(chalk.green.bold('\n Success! \n'));
            messages.printSuccessInstructions(folderName.foldername); // prints instructions to user (cd into folder, install packages, npm run start)
        }
    } else {
        console.log(chalk.red('\nOops! Something went wrong..'));
        console.log(cloneDone + '\n');
    }
}

run();
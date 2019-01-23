#!/usr/bin/env node

const chalk             = require('chalk');
const CLI               = require('clui');
const Spinner           = CLI.Spinner;

const { url }           = require('./config/repo-config');
const github            = require('./lib/github');
const files             = require('./lib/files');
const inquierer         = require('./lib/inquirer');
const messages          = require('./lib/messages');

messages.printRCA();

const run = async () => {
    const status = new Spinner(chalk.green.bold('Fetching files... :) :) :)'));
    status.start();

    const cloneDone = await github.cloneRepo(url); 
    const removeGitDone = await github.removeGit(); 
    
    if (removeGitDone) {
        status.stop();
        const folderName = await inquierer.askFolderName(); 
        if (folderName) {
            await files.renameFolder(folderName); // input must be longer than 3 characters
            messages.printRCA();
            messages.printSuccessInstructions(folderName.foldername);
        }
    } else {
        status.stop();
        console.log(chalk.red('\nOops! Something went wrong..'));
        console.log(cloneDone + '\n');
    }
}

run();
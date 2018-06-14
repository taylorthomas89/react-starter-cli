const inquirer          = require('inquirer');
const chalk             = require('chalk');
const files             = require('./files');

module.exports = {
    askFolderName: () => {
        const questions = [
            {
                name: 'foldername',
                type: 'input',
                message: chalk.green('Please enter a folder name for your react app: '),
                validate: function(value) {
                    if (value.length > 3) {
                        return true
                    } else {
                        return 'Please enter a folder name for your react app (Folder name must be longer than 3 characters: '
                    }
                }
            }
        ]

        return inquirer.prompt(questions);
    }
}
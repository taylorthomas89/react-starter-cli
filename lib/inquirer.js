const inquirer          = require('inquirer');
const chalk             = require('chalk');

module.exports = {
    askFolderName : () => {
        const questions = [
            {
                name: 'foldername',
                type: 'input',
                prefix: '',
                message: chalk.green.bold('Please enter a folder name for your React app: '),
                validate: function(value) {
                    if (value.length > 3) {
                        return true
                    } else {
                        return 'Please enter a folder name for your React app (Folder name must be longer than 3 characters): '
                    }
                }
            }
        ]

        return inquirer.prompt(questions);
    }
}
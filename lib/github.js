const fse               = require('fs-extra');
const git               = require('simple-git')();
const chalk             = require('chalk');
const CLI               = require('clui');
const Spinner           = CLI.Spinner;

const files             = require('./files');

module.exports = {
    cloneRepo : async (url) => {
        const status = new Spinner(chalk.green.bold('Fetching files... :) :) :)'));
        const startFolder = await files.directoryExists('react-starter');
        status.start();

        if(!startFolder) {
            try {
                await git.clone(url);
                return true;
            } catch (err) {
                status.stop();
                throw err;
            } finally { status.stop(); }
        } else {
            status.stop();
            return 'It appears there is already a folder named "react-starter". Rename it, or delete it, and try again..';    
        }
    },

    removeGit : async () => {
        await process.chdir('react-starter');
        const gitFolder = await files.directoryExists('.git');

        if (gitFolder) {
            try {
                fse.remove('.git');
                return true;
            } catch (err) {
                throw err;
            }
        } else {
            return false;
        }
    }
}

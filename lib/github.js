const fse = require('fs-extra');
const git = require('simple-git')();
const chalk = require('chalk');
const CLI = require('clui');
const Spinner = CLI.Spinner;

const files = require('./files');

module.exports = {
    cloneRepo: async (url) => {
        const status = new Spinner(chalk.green('Fetching files... :) :) :)'));
        status.start();

        try {
            await git.clone(url);
            return true;
        } catch (err) {
            status.stop();
            throw err;
        } finally {
            status.stop();
        }
    },

    removeGit: async () => {
        await process.chdir('react-starter');
        let gitFolder = await files.directoryExists('.git');

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

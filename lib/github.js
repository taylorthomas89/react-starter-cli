const git           = require('simple-git')();
const chalk         = require('chalk');
const CLI           = require('clui');
const Spinner       = CLI.Spinner;

module.exports = {
    cloneRepo: async (url) => {
        const status = new Spinner(chalk.green('Fetching files... :) :) :)'));
        status.start();

        try {
            await git.clone(url);
            return true;
        } catch (err) {
            status.stop();
            throw err
        } finally {
            status.stop();
        }
    },

    removeRemote: async () => {
        
    }
}

//.clone(repoPath, [localPath, [options]], [handlerFn])	clone a remote repo at repoPath to a local directory at localPath 
// (can be omitted to use the default of a directory with the same name as the repo name) 
// with an optional array of additional arguments to include between git clone and the trailing repo local arguments
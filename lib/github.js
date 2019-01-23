const fse           = require('fs-extra');
const git           = require('simple-git')();
const files         = require('./files');

module.exports = {
    cloneRepo : async (url) => {
        const startFolder = await files.directoryExists('react-starter-files');
        if(!startFolder) {
            try {
                return new Promise((resolve, reject) => {
                    git.clone(url, (res, err) => {
                        if (err) { return reject(err); }
                        return resolve(res);
                    });    
                }) 
            } catch (err) { throw err; }
        } else {
            return 'It appears there is already a folder named "react-starter". Rename it, or delete it, and try again..';    
        }
    },

    removeGit : async () => {
        await process.chdir('react-starter-files');
        const gitFolder = await files.directoryExists('.git');
        if (gitFolder) {
            try {
                await fse.remove('.git');
                return true;
            } catch (err) { throw err; }
        } else {
            return false;
        }
    }
}

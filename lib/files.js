const fs        = require('fs');
const path      = require('path');
const fse       = require('fs-extra');

module.exports = {
    getCurrentDirectoryBase : () => {
        return path.basename(process.cwd());
    },

    directoryExists : (filePath) => {
        try {
            return fs.statSync(filePath).isDirectory();
        } catch (err) {
            return false;
        }
    },

    fileExists : (filePath) => {
        try {
            return fs.existsSync(filePath);
        } catch (err) {
            return false;
        }
    },

    createDirectory : (filePath) => {
        try {
            return fs.mkdirSync(filePath);
        } catch (err) {
            return err;
        }
    },
    
    createFile : (filePath, fileContent) => {
        try {
            return fs.writeFile(filePath, fileContent, err => {
                if (err) throw err;
            });
        } catch (err) {
            return err;
        }
    },

    renameFolder : async (folderName) => {
        if (folderName) {
            await process.chdir('../');
            // console.log('folder: ' + folderName);
            // console.log('cwd: ' + process.cwd());
            // console.log('cwd + react: ' + process.cwd() + '/react-starter')
            try {
               await fse.move(process.cwd() + '/react-starter', process.cwd() + ('/' + folderName.foldername));
            } catch (err) {
                console.log(err);
                process.exit();
            }
        }
    }

};
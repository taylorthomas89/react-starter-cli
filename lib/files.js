const fs        = require('fs');
const path      = require('path');

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
    
    createFile : (filePath) => {
        try {
            return fs.writeFile(filePath, 'hello world', err => {
                if (err) throw err;
            });
        } catch (err) {
            return err;
        }
    }
};
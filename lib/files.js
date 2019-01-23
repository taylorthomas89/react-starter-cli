const fs            = require('fs');
const path          = require('path');
const fse           = require('fs-extra');
const chalk         = require('chalk');
const { folder }    = require('./../config/repo-config');

module.exports = {
    getCurrentDirectoryBase : () => {
        return path.basename(process.cwd());
    },

    directoryExists : (filePath) => {
        try {
            return fs.statSync(filePath).isDirectory();
        } catch (err) { return false; }
    },

    fileExists : (filePath) => {
        try {
            return fs.existsSync(filePath);
        } catch (err) { return false; }
    },

    createDirectory : (filePath) => {
        try {
            return fs.mkdirSync(filePath);
        } catch (err) { throw err; }
    },
    
    createFile : (filePath, fileContent) => {
        try {
            return fs.writeFile(filePath, fileContent, err => {
                if (err) { throw err };
            });
        } catch (err) { return err; }
    },

    renameFolder : async (folderName) => {
        if (folderName) {
            await process.chdir('../');
            try {
               await fse.move(process.cwd() + '/react-starter-files', process.cwd() + ('/' + folderName.foldername));
            } catch (err) {
                console.log(chalk.red(`\nThe folder '${folderName.foldername}' already exists in this directory!\n`));
                await fse.remove('react-starter');
                process.exit();
            }
        }
    }
};
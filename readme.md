# Readme

Compare files by using protractor (is not needed SSH or FTP connection). On server use the protractor-cmp-files-server module.

# Usage

    var cmp = require('protractor-cmp-files-client');
    cmp.compare (file1, file2);
    
file1 - first file example:  '/home/username/Desktop/a.txt'
file2 - second file example: '/home/username/Desktop/b.txt'

Return the checking test comparing 2 files. Remember on client run the protractor-cmp-files-server module.

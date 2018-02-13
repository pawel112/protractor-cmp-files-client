Readme

Compare files by using protractor (is not needed SSH or FTP connection). On server use the protractor-cmp-files-server module.
Usage


var cmp = require('protractor-cmp-files-client');

cmp.compare (file1, file2);

Return the checking test comparing 2 files. Remember on client run the protractor-cmp-files-server module.

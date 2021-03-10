const fs = require("fs");

// read the content of the file
// define a variable num = 1
// for each line
// add num++ at the starting of the line

giveNumberingAll = function(filePath){
    try{
        let data = fs.readFileSync(filePath, encoding = 'utf8');
        var fileContent = data;
        fileContentSplitList = fileContent.split('\n');
        var num = 1;
        for(let lineIndex = 0; lineIndex < fileContentSplitList.length; lineIndex++){
            console.log(num++ + " " + fileContentSplitList[lineIndex]);
        }
    } catch(err){
        console.log(err);
    }
}

module.exports = {
    giveNumberingAllFn : giveNumberingAll
};
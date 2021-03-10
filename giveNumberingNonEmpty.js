fs = require('fs');

// read the content of the file
// define a variable num = 1
// for each line, check if its length > 0
// add num++ at the starting of the line

giveNumberingNonEmpty = function(filePath){
    try{
        let data = fs.readFileSync(filePath, encoding = 'utf8');
        var fileContent = data;
        fileContentSplitList = fileContent.split('\n');
        var num = 1;
        for(let lineIndex = 0; lineIndex < fileContentSplitList.length; lineIndex++){
            if(fileContentSplitList[lineIndex].length == 0 || 
                fileContentSplitList[lineIndex][0] == '\r'){
                console.log(fileContentSplitList[lineIndex]);
            }else{
                console.log(num++ + " " + fileContentSplitList[lineIndex]);
            }
        }
    } catch(err){
        console.log(err);
    }
}

module.exports = {
    giveNumberingNonEmptyFn : giveNumberingNonEmpty
};


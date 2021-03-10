fs = require('fs');
const PATT = /\r|\r{2,}|\n{2,}/ ; // Regex pattern to search for line breaks

// Logic
// Read the content of the file
// Search for line breaks (more than 1)
// replace them by single line break

replaceLineBreaks = function(filePath){
    try{
        let data = fs.readFileSync(filePath, encoding = 'utf8');
        var testStr = data;
        // replace line breaks
        while(PATT.test(testStr)){
            testStr = testStr.replace(PATT, '\n');
        }
        console.log(testStr);
    } catch(err){
        console.log(err);
    }

}

module.exports = {
    replaceLineBreakFn : replaceLineBreaks
};

fs = require('fs');

display = function(filePath){
    try{ // error handling
        let data = fs.readFileSync(filePath, encoding = 'utf8');
        console.log(data);
    } catch(err){
        console.log(err);
    }   
}

module.exports = {
    displayFn : display
};


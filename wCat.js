// wCat command
// node wCat filepath - display the content of file in the cmd
// node wCat -s filepath 
// node wCar -s -n filepath (multiple commands can also be entered)

fs = require('fs');
path = require('path');
// commands
displayFnObj = require('./displayContent.js');
replaceLineBreakFnObj = require('./replaceLineBreaks.js');
giveNumberingAllFnObj = require('./giveNumberingAll.js');
giveNumberingNonEmptyFnObj = require('./giveNumberingNonEmpty.js')

let input = process.argv.slice(2);

// Check for input filepaths
// while last element is a filepath
// pop it and add it to a filePaths array
// need to implement some kind of regex to check if a string is a filepath or not

const PATT = /[\\/]/; // regex to check filepaths
let filePaths = [];
while(PATT.test(input[input.length-1])){
    filePaths.push(input.pop())
}

console.log('The entered filepaths are:');
for(let i = 0; i < filePaths.length; i++){
    console.log(filePaths[i]);
}

// rest of the input array will be the list of commands
// for each filePath entered
// and for each command entered
// perform each command on each file
for(let i = 0; i < filePaths.length; i++){
    var hasGiveNumberingAllExecuted = false; // checks for duplicate commands for current file
    var hasGiveNumberingNonEmptyExecuted = false; // // checks for duplicate commands for current file
    for(let j = 0; j < input.length; j++){
        if(input[j] === '-s'){
            replaceLineBreakFnObj.replaceLineBreakFn(filePaths[i]);
            console.log();
        }
        else if(input[j] === '-n' && hasGiveNumberingNonEmptyExecuted == false){
            giveNumberingAllFnObj.giveNumberingAllFn(filePaths[i]);
            hasGiveNumberingAllExecuted = true;
            console.log();
        }
        else if(input[j] === '-b' && hasGiveNumberingAllExecuted === false){
            giveNumberingNonEmptyFnObj.giveNumberingNonEmptyFn(filePaths[i]);
            hasGiveNumberingNonEmptyExecuted = true;
            console.log();
        }
    }
    
}

// If no command entered, then display the contents only
if(input.length == 0){
    for(let i = 0; i < filePaths.length; i++){
        displayFnObj.displayFn(filePaths[i]);
        console.log();
    }    
}

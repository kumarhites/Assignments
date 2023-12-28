// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

function writeFile(data){
    fs.writeFile('a.txt', data, err => {
        if(err){
            console.log('Error: ', err);
        }else{
            console.log("Data written successfully!");
        }
    })
}
function readFile(callback){
    fs.readFile('a.txt', 'utf-8', function(err, data){
        callback(data);
    })
}
function printData(data){
    console.log(data);
}

writeFile("Hello my name is Hitesh!");
readFile(printData);
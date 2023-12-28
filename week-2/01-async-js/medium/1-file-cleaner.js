const fs = require("fs");

function readFile(callback) {
    fs.readFile("dirtyText.txt", "utf-8", (err, data) => {
        if (err) {
            console.log("Update failed", err);
        } else {
            callback(data);
        }
    });
}

function printData(data) {
    const cleanArr = [];
    data.split(" ").forEach((element) => {
        if (element !== "") {
            cleanArr.push(element);
        }
    });
    let cleanString = "";
    for (element of cleanArr) {
        cleanString = cleanString + " " + element;
    }
    writeFile(cleanString.trim());
}

function writeFile(data){
    fs.writeFile('dirtytext.txt', data, err => {
        if(err){
            console.log('Error: ', err);
        }else{
            console.log('Write success!');
        }
    })
}

readFile(printData);


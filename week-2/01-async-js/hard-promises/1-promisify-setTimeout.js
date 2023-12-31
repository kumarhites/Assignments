/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let promises = new Promise((resolve) => {
        setTimeout(resolve, n)
    })
    return promises;
}

const value = wait(2000);
value.then(function(){
    console.log("hi there!");
})

 
module.exports = wait;

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

function getTime() {
    setInterval(() => {
        const date = new Date();
        console.log(date.getHours() + " " + date.getMinutes() + " " + date.getSeconds());
    }, 1000);
}

getTime();

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
function logTimeWithTimeout() {
    const date = new Date();
    console.log(
        date.getHours() +
        ": " +
        date.getMinutes() +
        ": " +
        date.getSeconds()
    );

    // Call the function again after a delay of 1000 milliseconds (1 second)
    setTimeout(logTimeWithTimeout, 1000);  // recursive call to the function that prints time.
}

// Start the logging
logTimeWithTimeout();

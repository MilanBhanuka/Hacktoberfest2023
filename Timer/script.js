var target_date; // The countdown date
var hours, minutes, seconds; // variables for time units
var countdown = document.getElementById("tiles"); // get tag element
var startButton = document.getElementById("startButton");
var labelList = document.getElementById("label");
var countdownInterval; // store interval ID for stopping the countdown

function getCountdown() {
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    hours = pad(parseInt(seconds_left / 3600));
    seconds_left = seconds_left % 3600;

    minutes = pad(parseInt(seconds_left / 60));
    seconds = pad(parseInt(seconds_left % 60));

    countdown.innerHTML = "<span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>";
}

function pad(n) {
    return (n < 10 ? '0' : '') + n;
}

startButton.addEventListener('click', function() {
    if (!countdownInterval) {
        target_date = new Date().getTime() + (1000 * 60 * 60 * 24); // Set the countdown date
        getCountdown();
        countdownInterval = setInterval(getCountdown, 1000);
        startButton.style.display = "none"; // Hide the button
        labelList.style.display = "block"; // Show the labels
    }
});

// Global countdown date
let initialDateTime = document.querySelector('.timer-wrapper').getAttribute('data-timer');
var countDownDate = new Date(initialDateTime).getTime();

// Function to update countdown display
function updateTimerDisplay() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    if (distance < 0) {
        document.getElementById("demo").innerHTML = "EXPIRED";
        return;
    }

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}

// Start interval to update every second
let intervalSecond = setInterval(updateTimerDisplay, 1000);

// Call once immediately so timer shows without waiting 1s
updateTimerDisplay();

// -------------------------------
// Update countdown via user input
// -------------------------------
function updateCountdown() {
    const input = document.getElementById("dateInput").value.trim();
    const errorBox = document.getElementById("error");
    errorBox.textContent = "";

    // Validate input format
    const regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
    if (!regex.test(input)) {
        errorBox.textContent = "Enter yyyy-mm-dd hh:mm:ss (24hr format)";
        return;
    }

    // Convert input for JS Date parsing
    const fixedInput = input.replace(" ", "T");
    let newDate = new Date(fixedInput);

    if (isNaN(newDate.getTime())) {
        errorBox.textContent = "Invalid date. Please check format.";
        return;
    }

    // Update global countdown
    countDownDate = newDate.getTime();

    // Update header dynamically
    const [datePart, timePart] = input.split(" ");
    document.querySelector(".mm-dd-yyyy").textContent = datePart;
    document.querySelector(".hh-mm-ss").textContent = timePart;

    // Immediately update countdown
    updateTimerDisplay();
}
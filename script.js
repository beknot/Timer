// Set the date we're counting down to
var countDownDate = new Date("Dec 31, 2025 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);


// -------------------------------
// NEW FUNCTION — Do NOT modify old logic
// -------------------------------
function updateCountdown() {
    const input = document.getElementById("dateInput").value.trim();
    const errorBox = document.getElementById("error");

    // Reset error
    errorBox.textContent = "";

    // Validate format using RegEx
    const regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;

    if (!regex.test(input)) {
        errorBox.textContent = "Enter yyyy-mm-dd hh:mm:ss(24hr format)";
        return;
    }

    // Convert input format → JS date format
    const fixedInput = input.replace(" ", "T");

    let newDate = new Date(fixedInput);

    if (isNaN(newDate.getTime())) {
        errorBox.textContent = "Enter yyyy-mm-dd hh:mm:ss(24hr format)";
        return;
    }

    // UPDATE GLOBAL COUNTDOWN DATE
    countDownDate = newDate.getTime();

    // Update header text dynamically
    document.querySelector(".mm-dd-yyyy").textContent = input.split(" ")[0];
    document.querySelector(".hh-mm-ss").textContent = input.split(" ")[1];

    errorBox.textContent = ""; // Clear error message
}

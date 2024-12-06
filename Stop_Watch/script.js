let timer;
let isRunning = false;
let time = 0; // Time in seconds

// Update the display
function updateDisplay() {
  const hours = Math.floor(time / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  document.getElementById("display").textContent = `${hours}:${minutes}:${seconds}`;
}

// Start the stopwatch
document.getElementById("start").addEventListener("click", function () {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      time++;
      updateDisplay();
    }, 1000);
  }
});

// Pause the stopwatch
document.getElementById("pause").addEventListener("click", function () {
  clearInterval(timer);
  isRunning = false;
});

// Reset the stopwatch
document.getElementById("reset").addEventListener("click", function () {
  clearInterval(timer);
  time = 0;
  isRunning = false;
  updateDisplay();
});

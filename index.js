let startButton = document.getElementById("start-btn");
let inputBox = document.getElementById("input-box");
let textDisplay = document.getElementById("text");
let timerDisplay = document.getElementById("timer");
let speedDisplay = document.getElementById("speed");

let textToType = "Selamat datang di permainan 10 Fast Fingers!";
let timer;
let timeLeft = 0;
let speed = 0;
let wordCount = 0;
let startTime = 0;

startButton.addEventListener("click", startGame);
inputBox.addEventListener("input", checkInput);

function startGame() {
    // Reset game state
    inputBox.value = "";
    inputBox.disabled = false;
    timeLeft = 0;
    wordCount = 0;
    speed = 0;
    startTime = Date.now();
    speedDisplay.textContent = speed;
    timerDisplay.textContent = timeLeft;

    textDisplay.textContent = textToType;
    startButton.disabled = true;

    // Start timer
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft = Math.floor((Date.now() - startTime) / 1000);
    timerDisplay.textContent = timeLeft;

    if (timeLeft >= 60) {
        endGame();
    }
}

function checkInput() {
    let inputValue = inputBox.value.trim();

    if (inputValue === textToType) {
        wordCount++;
        speed = Math.floor((wordCount / timeLeft) * 60); // Words per minute
        speedDisplay.textContent = speed;

        textDisplay.textContent = "Selamat! Anda berhasil mengetik dengan benar!";
        inputBox.disabled = true;
        clearInterval(timer);
        startButton.disabled = false;
    }
}

function endGame() {
    clearInterval(timer);
    textDisplay.textContent = "Waktu habis! Anda selesai!";
    inputBox.disabled = true;
    startButton.disabled = false;
}

// Start button class
const startBtn = document.querySelector(".start");
const firstCircle = document.querySelector(".panel-circle");
const clock = document.querySelector(".digital-clock");
const startButton = document.querySelector(".start");
const preload = document.querySelector(".preload");

startBtn.addEventListener("click", (e) => {
    firstCircle.classList.add("panel-circle-first--on-btn-hover");
    clock.classList.add("digital-clock--fade-out");
    startButton.classList.add("start--fade-out");
    setTimeout(() => preload.style.display = "none", 2000);
    clearInterval(time);
});


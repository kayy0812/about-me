// Start button class
const startBtn = document.querySelector(".start");
const firstCircle = document.querySelector(".panel-circle");

startBtn.addEventListener("click", (e) => {
    firstCircle.classList.add("panel-circle-first--on-btn-hover");
});


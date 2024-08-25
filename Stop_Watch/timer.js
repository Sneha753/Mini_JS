let secondsElapsed = 61;
let interval = null;
const time = document.getElementById("time");


function setTime(){
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60;
    time.innerHTML = `${minutes} : ${seconds}`;
}
function timer() {
    secondsElapsed++;
    setTime()
}
function startClock() {
    if(interval) stopClock()
    interval = setInterval(timer, 1000)
}

function stopClock() {
    clearInterval(interval)
}

function resetClock() {
    stopClock()
    secondsElapsed = 0;
    setTime()
}
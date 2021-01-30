let timeSpent = 0;
let seconds = document.getElementById("seconds");

function roundUp(num, precision) {
  precision = Math.pow(10, precision);
  return Math.ceil(num * precision) / precision;
}

function timecounter() {
  function timer() {
    var actualTime = performance.now();
    seconds.value = roundUp(actualTime / 1000, 2);
    requestAnimationFrame(timer);
  }
  requestAnimationFrame(timer);
}

const focus = function () {
  timecounter();
};
const stop = function () {
  timeSpent = seconds.value;
  document.getElementById("data").innerHTML = timeSpent;
};

window.addEventListener("focus", focus);
window.addEventListener("keydown", stop);

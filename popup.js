//Time

var seconds = document.getElementById("seconds");
var data = document.getElementById("data");
var timer_on = 0;


function roundUp(num, precision) {
    precision = Math.pow(10, precision)
    return Math.ceil(num * precision) / precision
  };

function timecounter() {
    if(timer_on == 1) {
        requestAnimationFrame(timer);
    }
    function timer(){
        var actualTime = performance.now();
        seconds.value = roundUp(actualTime/1000, 2);
        localStorage.setItem("time", seconds.value);
        requestAnimationFrame(timer);
    }
    
};

const start = function(){
    timer_on =1;
    timecounter();
    
};

const stop = function(){
    timer_on = 0;
    data.value = localStorage.getItem("time");

};


window.addEventListener("focus", start);
window.addEventListener("click", stop);





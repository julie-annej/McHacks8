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
        requestAnimationFrame(timer);
    }
    
};

const focus = function(){
    timer_on =1;
    timecounter();
    
};

const blur = function(){
    timer_on = 0;
    data.value = seconds.value;

};


window.addEventListener("focus", focus);
window.addEventListener("keydown", blur);





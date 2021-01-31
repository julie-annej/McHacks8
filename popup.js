//Time
var seconds = document.getElementById("seconds");
var data = document.getElementById("data");
var timer_on = 0;
var temp=0;
var totaltime;
var previous=0;

function roundUp(num, precision) {
    precision = Math.pow(10, precision)
    return Math.ceil(num * precision) / precision
};

const start = function(){
    /*if(totaltime == undefined){ 
        totaltime = 0;
    }*/
    
   
    timer_on = 1;
    if(timer_on) {
        requestAnimationFrame(timer);
    }
    function timer(){
        var actualTime = performance.now();
        seconds.value = roundUp(actualTime/1000, 2);  
        localStorage.setItem("time", seconds.value);

        document.getElementById("button").addEventListener("click", function(){
            timer_on=0;
        });

        if(timer_on) {
            requestAnimationFrame(timer);
        }
        else{
            stop;
        };
    }
};

/*
const stop = function(){
    timer_on = 0;
    
    temp = localStorage.getItem("time");
    data.value = temp;
    totaltime += Number(temp) - previous;
    chrome.storage.sync.set({"time": temp, "totaltime": totaltime}, function(){
         console.log("Time saved!"); 
         console.log(temp);
         console.log(totaltime);
    });
    previous = temp;
};*/

window.addEventListener("focus", start);
document.getElementById("continue").addEventListener("click", start);  


chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    console.log(url);
    document.getElementById("url").innerHTML = url;
});



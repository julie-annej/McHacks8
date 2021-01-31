

var UPDATE_INTERVAL = 3;

defaults();
function defaults(){
    
    if(!localStorage["domain"]){
        localStorage["domain"] = JSON.stringify({});
    }
    if(!localStorage["other"]){
        localStorage["other"] = JSON.stringify({});
    }
    if(!localStorage["total"]){
        localStorage["total"] = JSON.stringify({});
    }
}

function getEntries(){
    var domains= JSON.parse(localStorage["domain"]);
    var other= JSON.parse(localStorage["other"])
    var data=[];

    for(var domain in domains){
        
    }
}


chrome.runtime.onStart.addListener( function(){
    
    
});



function updated(){
    chrome.local.storage.sync.set();
}
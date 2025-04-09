var hours = 0;
var mins = 0;
var secs = 0;

var hour = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
const start2 = ()=>{

    secs++;
    if(secs == 60)
    {
        secs = 0;
        mins++;
    }
    else if(mins == 60){
        mins = 0;
        hours++;
    }

    // console.log(secs);
    hour.innerHTML = hours < 10 ? "0"+hours : hours
    min.innerHTML = mins < 10 ? "0"+mins : mins
    sec.innerHTML = secs < 10 ? "0"+secs : secs
    
}

var x;
function start(){
    x = setInterval(()=>{
        start2()
    },1000)
}

const stop = ()=>{
    clearInterval(x)
}


const reset = ()=>{
    hours = 0;
    mins = 0;
    secs = 0;

    hour.innerHTML = hours < 10 ? "0"+hours : hours
    min.innerHTML = mins < 10 ? "0"+hours : hours 
    sec.innerHTML = secs < 10 ? "0"+hours : hours

    clearInterval(x)
}
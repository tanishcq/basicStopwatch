let hr = document.getElementById('hrs');
let min = document.getElementById('mins');
let sec = document.getElementById('secs');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let interval;

let stop = () => {
    clearInterval(interval);
    startButton.disabled = false;
    stopButton.disabled = true;
}

let start = () => {
    hrs = parseInt(hr.value);
    mins = parseInt(min.value);
    secs = parseInt(sec.value);
    if(secs>60){
        var a = parseInt(secs%60);
        var b = parseInt(secs/60);
        sec.value = a;
        min.value += b;
    }
    if(mins>60){
        var x = parseInt(mins%60);
        var y  = parseInt(mins/60);
        min.value = x;
        hr.value += y;
    }
    interval = setInterval(()=>{
        if(sec.value!=0){
            sec.value = parseInt(sec.value)-1;
        }
        else{
            if(min.value!=0){
                min.value = parseInt(min.value)-1;
                sec.value = 59;
            }
            else{
                if(hr.value!=0){
                    hr.value = parseInt(hr.value)-1;
                    min.value = 59;
                } 
                else{
                    stop();
                }
            }
        }
    },1000);
    startButton.disabled = true;
    stopButton.disabled = false;
}

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);


$(function(){

    let hour = 00;
    let mintues = 00;
    let seconds = 00;
    let notSeconds = 00;
    
    
    let time;
    function start(){
        time = setInterval(function(){
            notSeconds++;            
            if(notSeconds > 99){
                seconds++;
                notSeconds=0;
            }if(seconds > 59){
                mintues++
                seconds = 0
            }if(mintues > 59){
                hour++
                mintues=0
            };
        },10);
        show = setInterval(function(){            
            notSec.innerHTML = notSeconds;
                sec.innerHTML = seconds;
                min.innerHTML=mintues
                h.innerHTML = hour
            
        },10);
    } ;

    start();
    let isRunning = true;
    function startStop(){
        if(isRunning == false){
            isRunning=true;
            start();
        }else{
            isRunning=false;
            clearInterval(time);
        }
    };
    function reset(){
        if(isRunning == false){
        notSeconds = 00;
        seconds = 00;
        mintues = 00; 
        hour = 00;
        h.innerHTML = hour;
        min.innerHTML=mintues;
        sec.innerHTML = seconds;
        notSec.innerHTML = notSeconds;
    }else{
        clearInterval(show)
    }
}
    reset();



    startH.addEventListener(`click`, startStop);
    other.addEventListener(`click`, reset);
})

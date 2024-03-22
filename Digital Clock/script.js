const updateClock = () => {
    let hoursEl = document.querySelector("#hours");
    let minutesEl = document.querySelector("#minutes");
    let secondsEl = document.querySelector("#seconds");

    let currTime = new Date();

    let hours = currTime.getHours();
    let minutes = currTime.getMinutes();
    let seconds = currTime.getSeconds();

    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

setInterval(updateClock,1000);
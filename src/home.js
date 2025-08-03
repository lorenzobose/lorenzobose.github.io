setInterval(()=>{
    const singaporeDate = new Date("3 October 2025").getTime();
    const rnDate = new Date().getTime();

    let offset = singaporeDate - rnDate;
    let days = String(Math.floor(offset / (1000 * 60 * 60 * 24)));
    let hours = String(Math.floor((offset % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    let minutes = String(Math.floor((offset % (1000 * 60 * 60)) / (1000 * 60)));
    let seconds = String(Math.floor((offset % (1000 * 60)) / 1000));

    days = (days.length == 1) ? "0" + days : days
    hours = (hours.length == 1) ? "0" + hours : hours
    minutes = (minutes.length == 1) ? "0" + minutes : minutes
    seconds = (seconds.length == 1) ? "0" + seconds : seconds
     
    document.getElementById("dcount").innerHTML = days;
    document.getElementById("hcount").innerHTML = hours;
    document.getElementById("mcount").innerHTML = minutes;
    document.getElementById("scount").innerHTML = seconds;  
}, 1000);
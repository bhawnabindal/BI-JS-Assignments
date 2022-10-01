let time = 0;
let timeout;
let timeout1;
function startTime(){
        
    const a = new Date();
    let hours=(document.getElementById("hours").innerHTML = a.getHours());
    let minutes=(document.getElementById("minutes").innerHTML = a.getMinutes());
    let seconds=(document.getElementById("seconds").innerHTML = a.getSeconds());
    if(minutes < 10)
        document.getElementById("minutes").innerHTML = "0" + minutes;
    if(seconds < 10)
        document.getElementById("seconds").innerHTML = "0" + seconds;
    if(hours < 10)
        document.getElementById("hours").innerHTML = "0" + hours;
    if(hours >=12)
        document.getElementById("AM_PM").innerHTML = "PM";
    else
    document.getElementById("AM_PM").innerHTML = "AM";
    setTimeout(startTime, 1000); 
}
function digital(){
    window.onload = displayClock();
    function displayClock() {
        const d = new Date().toLocaleTimeString();
        const z = new Date();
        const y = new Date();
        document.getElementById("time").innerHTML = d;
        document.getElementById("time_zone").innerHTML = z;
        document.getElementById("Date").innerHTML = y.getDate() + "/" + (y.getMonth()+1) + "/" + y.getFullYear(); 
        timeout=setTimeout(displayClock, 1000); 
    }
    
}
function digital_start() {
    if (!time) {
        time = 1;
        digital();
    }
}
function digital_stop(){
    clearTimeout(timeout);
    time=0;
}
"use strict"

function displayTime()
{
    var now = new Date()
    var time = now.getHours()+":"+now.getMinutes()+":"+now.getSeconds()
    document.getElementById("myClock").innerHTML = time;
    
    setTimeout(displayTime, 1000);
}
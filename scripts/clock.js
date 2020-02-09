getCurrentTime = function(){
  let timeNow = new Date;
    let hours = timeNow.getHours();
    hours < 10 ? hours = '0'+hours : hours=hours;
    let minutes = timeNow.getMinutes();
    minutes < 10 ? minutes = '0'+minutes : minutes=minutes;
    let seconds = timeNow.getSeconds();
    seconds<10 ? seconds= '0'+seconds : seconds=seconds;
    let timeBuild = `${hours}:${minutes}:${seconds}`;
    document.querySelector('.clock').textContent=`Current time:${timeBuild}`;
    return timeBuild;
}
getCurrentTime();
setInterval(getCurrentTime, 1000);

/*
//This is all you need to setup a working clock div in a web page.

 clockDiv =document.createElement('div');clockDiv.textContent = 'boo';
document.body.appendChild(clockDiv);

getCurrentTime = function(){
  let timeNow = new Date;
    let hours = timeNow.getHours();
    hours < 10 ? hours = '0'+hours : hours=hours;
    let minutes = timeNow.getMinutes();
    minutes < 10 ? minutes = '0'+minutes : minutes=minutes;
    let seconds = timeNow.getSeconds();
    seconds<10 ? seconds= '0'+seconds : seconds=seconds;
    let timeBuild = `${hours}:${minutes}:${seconds}`;
    clockDiv.textContent = timeBuild;
        //return timeBuild;
}
setInterval(getCurrentTime, 1000)
*/



const clockFace = document.querySelector('.clock');

getCurrentTime = function(){
  let timeNow = new Date;
    let hours = timeNow.getHours();
    hours < 10 ? hours = '0'+hours : hours=hours;
    let minutes = timeNow.getMinutes();
    minutes < 10 ? minutes = '0'+minutes : minutes=minutes;
    let seconds = timeNow.getSeconds();
    seconds<10 ? seconds= '0'+seconds : seconds=seconds;
    let timeBuild = `${hours}:${minutes}:${seconds}`;
    clockFace.textContent=`Current time:${timeBuild}`;
    return timeBuild;
}
getCurrentTime();
setInterval(getCurrentTime, 1000);



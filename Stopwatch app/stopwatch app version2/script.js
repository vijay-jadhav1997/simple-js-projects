// reference
const display = document.querySelector('#display');


let [seconds, minutes, hours] = [0, 0, 0];
let timer;
let time;

function watchCount() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  
  let hoursValue = hours < 10 ? "0" + hours : hours;
  let minutesValue = minutes < 10 ? "0" + minutes : minutes;
  let secondsValue = seconds < 10 ? "0" + seconds : seconds;
  display.textContent = `${hoursValue} : ${minutesValue} : ${secondsValue}`;
}

function startWatch() {
  if (time == null) {
    timer = setInterval(watchCount,1000)
  }
   else {
      clearInterval(timer);
    }
    time = 0;
  }
  
function stopWatch() {
  clearInterval(timer);
  time = null;
}

function resetWatch() {
  clearInterval(timer);
  time = null;
  [seconds, minutes, hours] = [0, 0, 0];
  display.textContent = `00 : 00 : 00`;
}
// reference
const display = document.querySelector('#display');
const stopBtn = document.querySelector('#stop_button');
const startBtn = document.querySelector('#start_button');
const resetBtn = document.querySelector('#reset_button');

let hourText = document.querySelector('.hour');
let minuteText = document.querySelector('.minute');
let secondText = document.querySelector('.second');

let timeInterval;
let start;

let seconds = 1;
let minutes = 1;
let hours = 1;

startBtn.addEventListener('click', ()=> {
  if (start == null) {
    timeInterval = setInterval(() => {
      if (seconds < 60) {
        secondText.textContent = seconds;
        seconds++;
      } else {
        if (minutes < 60) {
          minuteText.textContent = minutes;
          minutes++;
        } else {
          hourText.textContent = hours;
          hours++;
          minuteText.textContent = `00`;
          minutes = 1;
        }
        secondText.textContent = `00`;
        seconds = 1;
      }
      start = 0;
    }, 1000);
  }
});

stopBtn.addEventListener('click', ()=>{
  clearInterval(timeInterval);
  start = null;
});

resetBtn.addEventListener('click', ()=>{
  clearInterval(timeInterval);
  start = null;
  secondText.textContent = `00`;
  minuteText.textContent = `00`;
  hourText.textContent = `00`;
  seconds = 1;
  minutes = 1;
  hours = 1;
})

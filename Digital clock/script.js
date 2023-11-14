// references
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

// getting time

setInterval(() => {
  const time = new Date();
  sec = `${time.getSeconds() < 10 ? "0" : ""}${time.getSeconds()}`;
  min = `${time.getMinutes() < 10 ? "0" : ""}${time.getMinutes()}`;
  hrs = `${time.getHours() < 10 ? "0" : ""}${time.getHours()}`;
  seconds.innerHTML = `${sec} <span>Sec</span>`;
  minutes.innerHTML = `${min} <span>Mins</span>`;
  hours.innerHTML = `${hrs} <span>Hours</span>`;
}, 1000);

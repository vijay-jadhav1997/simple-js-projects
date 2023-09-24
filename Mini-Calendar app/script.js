// Elements's references
const date = document.querySelector('#date');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months = ['January','February','March','April','May','June','July','August','September','October','November','December']


// using date() function - to get date:
const time = new Date();
date.textContent = `${(time.getDate() < 10 ? '0' : '') + time.getDate()}`;
day.textContent = `${days[time.getDay()]}`;
month.textContent = `${months[time.getMonth()]}`;
year.textContent = `${time.getFullYear()}`;


// Element references-
const percentage = document.querySelector('#percentage');
let count = 0;
setInterval(() => {
  
  if (count === 76) {
    clearInterval();
  }else{
    ++count;
    percentage.textContent = `${count}%`
  }
}, 27.5);
// 
const startBtn = document.querySelector('.startBtn');
let redBox = document.querySelector('.redBox');

startBtn.addEventListener('click', move, false)

function move() {
  let poElement = 0;
  let animation = setInterval(() => {
   if (poElement <= 480) {
    poElement++;
    redBox.style.top = `${poElement}px`
    redBox.style.left = `${poElement}px`
   }
   else{
    clearInterval(animation);
   }
  }, 5);
}
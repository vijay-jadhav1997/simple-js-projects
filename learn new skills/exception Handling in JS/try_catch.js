const display = document.querySelector('.display');
const display2 = document.querySelector('.display2');
document.querySelector('.discription').innerHTML = `try { <br>
  .....expression;<br>
} catch (error) { <br>
  .....expression;<br>
}`;

function display1() {
  try {
    let name = 'Jay shree Ram';
    let capitalText = name.toUpperCase();
    display.textContent = capitalText;
  } catch (error) {
    
    display.textContent = error;
  }
}
function displayErr() {
  try {
    let num = 525;
    let capitalText = num.toUpperCase();
    display2.textContent = capitalText;
  } catch (err) {
    display2.style.color = 'red';
    display2.textContent = err;
  }
}
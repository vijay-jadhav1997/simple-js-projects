// 
const display = document.querySelector('.display');
const display2 = document.querySelector('.display2');
document.querySelector('.discription').innerHTML = `try { <br>
  ....... if(condition){ <br>
    ................ throw; <br>
    ...........} <br>
    .....expression;<br>
  } catch (error_variable) { <br>
    .....//user err here! <br>
  }`;

  const userInputBox = document.querySelector('#input_box');

function test() {
  let data = userInputBox.value;
  try {
    if(isNaN(data)){
      throw 'This is not a number';
    }
    else {
      if(data < 5 || data > 20){
        throw 'Number is out of range';
      }
      else{
        throw `Your have selected number-${data}`;
      }
    }
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
    display2.textContent = err;
  }
}
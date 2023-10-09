// 
const display = document.querySelector('.display');
const display2 = document.querySelector('.display2');
const discriptionBox = document.querySelector('.discription');
const statement1 = document.createElement('div')
statement1.style = `padding:10px; border: 1px solid yellowgreen`;
statement1.innerHTML = `<span># try...throw...catch statement # </span><br>
try { <br>
  ....... if(condition){ <br>
    ................ throw; <br>
    ...........} <br>
    .....expression;<br>
  } <br>
  catch (error_variable) { <br>
  .......//user err here! <br>
}`;
discriptionBox.appendChild(statement1);

const statement2 = document.createElement('div')
statement2.style = `padding:10px; border: 1px solid yellowgreen`;
statement2.innerHTML = `<span># try...throw...catch...finally statement # </span><br>
try { <br>
  ....... if(condition){ <br>
    ................ throw; <br>
    ...........} <br>
    .....expression;<br>
  } <br>
  catch (error_variable) { <br>
    .....//user err here! <br>
}<br>
finally {<br>
  .....expression <br>
}`;
discriptionBox.appendChild(statement2);

// 
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
  let data = userInputBox.value;
  try {
    if(isNaN(data)){
      throw 'This is not a number';
    }
    else {
      if(data < 20 || data > 50){
        throw 'Number is out of range';
      }
      else{
        throw `You have selected number-${data} and square of ${data} is ${data * data}`;
      }
    }
  } 
  catch (error) {
    
    display2.textContent = error;
  }
  finally {
    userInputBox.value = '';
  }
}
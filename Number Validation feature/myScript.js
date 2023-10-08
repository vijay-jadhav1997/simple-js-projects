// 
const input = document.querySelector('#num_input_box');
const resultMsg = document.querySelector('.resultMsg');
const input2 = document.querySelector('#num_input_box2');
const resultMsg2 = document.querySelector('.resultMsg2');


function validate(element) {
  resultMsg.style.color = 'red';
  if(isNaN(element.value)){
    resultMsg.textContent = `Please, enter numbers only!`;
    // console.log("Please, enter a only numbers!");
  } else {
    resultMsg.textContent = `You have entered only ${element.value.length} digits`;
    
    if (element.value.length === 10) {
      resultMsg.textContent = `Ten digits are completed!`;
      resultMsg.style.color = 'green';
    } else if (element.value.length > 10) {
      resultMsg.textContent = `Please, enter only ten digits!`;
      
    }
  }
}

function confirmNumb(element) {
  resultMsg2.textContent = ``;
  if (element.value === input.value) {
    resultMsg2.textContent = `confirmed !`;
    resultMsg2.style.color = 'green';
  } else if(element.value.length > 10 && element.value !== input.value) {
    resultMsg2.textContent = `Please, enter correct number!`;
    resultMsg2.style.color = 'red';
  }
}
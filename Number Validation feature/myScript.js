// 
const input = document.querySelector('#num_input_box');
const resultMsg = document.querySelector('.resultMsg');


function validate(element) {
  if(isNaN(element.value)){
    resultMsg.textContent = `Please, enter numbers only!`;
    resultMsg.style.color = 'red';
    // console.log("Please, enter a only numbers!");
  } else {
    resultMsg.textContent = ``;

    if (element.value.length > 10) {
      resultMsg.textContent = `Please, enter only ten digits!`;
      resultMsg.style.color = 'red';
      
    }
  }
  
}
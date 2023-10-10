// 
const input = document.querySelector('#num_input_box');
const resultMsg = document.querySelector('.resultMsg');
const input2 = document.querySelector('#num_input_box2');
const resultMsg2 = document.querySelector('.resultMsg2');
const spaceWarning = document.querySelector('.spaceWarning');


function validate(element) {
  resultMsg.style.color = 'red';
  if(isNaN(element.value)){
    resultMsg.textContent = `Please, enter numbers only!`;
    // console.log("Please, enter a only numbers!");
  } 
  else if (element.value.length === 10) {
    resultMsg.textContent = `Ten digits are completed!`;
    resultMsg.style.color = 'green';
  } 
  else if (element.value.length > 10) {
    resultMsg.textContent = `Please, enter only ten digits!`;
  } 
  // else {
  //   resultMsg.textContent = `You have entered only ${element.value.length} digits`;
  //   resultMsg.style.color = 'yellowgreen';
  // }
  //* checkSpace(element) fn colling to check space in input field:
  checkSpace(element);
}

function confirmNumb(element) {
  resultMsg2.textContent = ``;
  resultMsg2.style.color = 'green';
  console.log(element.value, input.value);
  if (element.value === input.value) {
    resultMsg2.textContent = `Mo. No. matched !`;
  } 
  else if(element.value.length > 10 || element.value !== input.value.substring(0, element.value.length)) {
    resultMsg2.textContent = `Please, enter correct number!`;
    resultMsg2.style.color = 'red';
  }
  else {
    resultMsg2.textContent = `Until now you have entered correct digits !`;
  }
  //* checkSpace(element) fn colling to check space in input field:
  checkSpace(element);

}
//* checkSpace(element) fn declaration to check space in given field:
function checkSpace(element) {
  const pattern = /\s/ig; 
  const isSpace = pattern.test(element.value);
  if (isSpace) {
    spaceWarning.style.color = 'red'
    spaceWarning.textContent = `WARNING! Mo. No. can't have spaces.`;
    element.value = element.value.substring(0, element.value.length - 1)
  } 
  else {
    spaceWarning.textContent = ``;
  }

}
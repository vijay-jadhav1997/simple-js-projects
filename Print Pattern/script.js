// 
const displayBox = document.querySelector('.display_box');
const createBtn = document.querySelector('.create_Btn');
const numberNum = document.getElementById('input_number');
// const maxNum = document.getElementById('input_max');
const styleInput = document.getElementById('input_symbol');
// console.log(numberNum);
// createBtn.addEventListener('click', createPattern, false)

function createPattern() {
  displayBox.innerHTML = '';
  let number = numberNum.value;
  // let max = maxNum.value;
  let styleText = styleInput.value;
  
  if (number == '' || styleText == '') {
   alert('Please, enter max & number number first!') 
  }
  // else if (max > number) {
  //  alert('Please, enter correct max & number number first!') 
    
  // }
  else{
    for (let i = 1; i <= number; i++){
      let text = '';
      // text.substring(0, number - 1)
      for (let j = 1; j <= i; j++) {
        text += styleText;
        console.log('jay hari!');
      }
      let div = document.createElement('div');
      div.textContent = text;
      displayBox.appendChild(div);
    }

    for (let i = number; i >= 1; i--){
      let text = '';
      // text.substring(0, number - 1)
      for (let j = 1; j <= i; j++) {
        text += styleText;
        console.log('jay ShreeRam!');
        
      }
      let div = document.createElement('div');
      div.textContent = text;
      displayBox.appendChild(div);
    }
  }
}

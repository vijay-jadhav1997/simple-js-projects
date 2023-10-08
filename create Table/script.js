// 
const container = document.querySelector('.container');
const inputNum = document.getElementById('input_num');

inputNum.addEventListener('keyup', createTable, false);

function createTable() {
  let number = Number.parseInt(this.value);
  // console.log(number);
  if (this.value != '') {
    container.innerHTML = `Table of <span>${number}</span> is below:`
    for (let index = 1; index <= 10; index++) {
      let li = document.createElement('li');
      li.innerHTML = `${index} x ${number} => <span>${index*number}</span>`
      // console.log(index,'x', number, '=>', index*number);
      container.appendChild(li);
    }
  } else{
    container.innerHTML = `Table of <span>Number</span> is below:`
  }
}
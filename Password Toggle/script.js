// let elm = document.querySelector('.title_box');
const passwordInput = document.getElementById('password1');
const passwordConfirm = document.getElementById('password2');
const resultMsg1 = document.querySelector('.resultMsg1');
const resultMsg2 = document.querySelector('.resultMsg2');

// console.log(passwordInput, passwordConfirm);

passwordInput.addEventListener('keyup',examinePassword, false)

function examinePassword() {
  
  if (this.value.length >= 8 ) {
    resultMsg1.textContent = `Strong Password !`;
    resultMsg1.style.color = 'green';
  }else {
    resultMsg1.textContent = ``;
    // resultMsg1.style.color = 'green';

  }
}
// console.log(numArray);

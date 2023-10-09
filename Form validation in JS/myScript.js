//* HTML element selection:
const password = document.getElementById('password');
const pswdConfirm = document.getElementById('password2');
const pswdConfirmTitle = document.querySelector('.confirmed');
const pswdStrongTitle = document.querySelector('.strong_pswd');
const capsLock = document.querySelector('.capsLock');
const isSpacedesplayBox = document.querySelector('.isSpacedesplayBox');

  

//* function for show or hide password field
function toggle(elementBtn) {
  let type = password.getAttribute('type');
  if (type === 'password') {
    elementBtn.textContent = 'Hide Password';
    password.setAttribute('type', 'text');
    pswdConfirm.setAttribute('type', 'text');
  } else {
    elementBtn.textContent = 'Show Password';
    password.setAttribute('type', 'password');
    pswdConfirm.setAttribute('type', 'password');
  }
}



//* event listner for Strong or weak password:
password.addEventListener('keyup',strongOrWeak, false);

// Function for Strong or weak password title:
function strongOrWeak(){
  // * pattern to check password
  const lowerCase = new RegExp('(?=.*[a-z])');
  const upperCase = new RegExp('(?=.*[A-Z])');
  const number = new RegExp('(?=.*[0-9])');
  const symbol = new RegExp('(?=.*[!@#\$%\^&\*_-])');

  const lowerCaseTest = lowerCase.test(password.value);
  const upperCaseTest = upperCase.test(password.value);
  const numberTest = number.test(password.value);
  const symbolTest = symbol.test(password.value);

  
  if (password.value === '') {
    pswdStrongTitle.textContent = '';
  }
  else if(lowerCaseTest && upperCaseTest && numberTest && symbolTest && password.value.length >= 8)  {
    pswdStrongTitle.style.color = 'green';
    pswdStrongTitle.textContent = 'Very Strong Password !';
  }
  else if(lowerCaseTest && symbolTest && numberTest && password.value.length >= 8 )  {
    pswdStrongTitle.style.color = 'green';
    pswdStrongTitle.textContent = 'Strong Password !';
  }
  else if(lowerCaseTest && numberTest && password.value.length >= 8)  {
    pswdStrongTitle.style.color = 'rgb(255, 195, 57)';
    pswdStrongTitle.textContent = 'medium strong Password !';
  }
  else if(password.value.length >= 12)  {
    pswdStrongTitle.style.color = 'rgb(255, 195, 57)';
    pswdStrongTitle.textContent = 'medium strong Password !';
  }
  else if(lowerCaseTest && upperCaseTest) {
    pswdStrongTitle.textContent = 'Weak Password !';
    pswdStrongTitle.style.color = 'red';
  } 
  else if(lowerCase ) {
    pswdConfirmTitle.textContent = '';
    pswdStrongTitle.textContent = 'Very Weak Password !';
    pswdStrongTitle.style.color = 'red';
  } 

  pswdConfirm.value = '';
  pswdConfirmTitle.textContent = '';

  //* spaceDetection()  Fn calling for detecting white space in password field:
  spaceDetection(password);
}



//* event listner for password confirmation:
pswdConfirm.addEventListener('keyup', confirmation, false);

function confirmation(){
  if (password.value === '') {
    pswdConfirmTitle.textContent = 'Please, enter Profile Password first !';
    pswdStrongTitle.textContent = 'Please, enter Profile Password first !';
  }
  else if (pswdConfirm.value === '') {
    pswdConfirmTitle.style.color = 'red';
    pswdConfirmTitle.textContent = 'Please, confirm  password here !';
  }
  else if (password.value === pswdConfirm.value) {
    pswdConfirmTitle.style.color = 'green';
    pswdConfirmTitle.textContent = 'Password matched!';
  } 
  else if (password.value.substring(0, pswdConfirm.value.length) === pswdConfirm.value) {
    pswdConfirmTitle.style.color = 'green';
    pswdConfirmTitle.textContent = 'You are entering correct characters !';
  }
  else if(pswdConfirm.value.length > password.value.length ) {
    pswdConfirmTitle.style.color = 'red';
    pswdConfirmTitle.textContent = 'You have entered more characters !';
  }
  else if (password.value.substring(0, pswdConfirm.value.length) !== pswdConfirm.value) {
    pswdConfirmTitle.style.color = 'red';
    pswdConfirmTitle.textContent = 'Please, enter correct password !';
  }
  else {
    pswdConfirmTitle.textContent = '';
  }

  //* spaceDetection()  Fn calling for detecting white space in confirm password field:
  spaceDetection(pswdConfirm);
}


//* CapsLock Warning:
window.addEventListener('keyup', (event) => {
  if (event.getModifierState('CapsLock')) {
    capsLock.textContent = 'WARNING! CapsLock is on';
  } else {
    capsLock.textContent = '';
  }
});

//* variable & function declaration to detect & delete white space:

function spaceDetection(element) {
  let pattern = /\s/ig;
  let isSpace = pattern.test(element.value);

  if (isSpace) {
    isSpacedesplayBox.textContent = `WARNING! Email & Password can't have space`;
    element.value = element.value.substring(0, element.value.length - 1);
  } 
  else if (isSpace) {
    isSpacedesplayBox.textContent = `WARNING! Email & Password can't have space`;
    element.value = element.value.substring(0, element.value.length - 1);
  } 
  else  {
    isSpacedesplayBox.textContent = '';
  }
}
element.value
// Reference of HTML elements:
const nameErrorMsg = document.querySelector('.name_error');
const phoneErrorMsg = document.querySelector('.phone_error');
const emailErrorMsg = document.querySelector('.email_error');
const userMsgErrorMsg = document.querySelector('.msg_error');
const submitErrorMsg = document.querySelector('.submit_error');

// console.log(nameErrorMsg, phoneErrorMsg, emailErrorMsg, userMsgErrorMsg, submitErrorMsg);

// function declaration to validate user name:
function validateName() {
  userName = document.getElementById('user_name').value;

  if (userName.length === 0) {
    nameErrorMsg.innerHTML = `name is required!`;
  }
  else if (!userName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameErrorMsg.innerHTML = `enter full name!`;
  } 
  else {
    nameErrorMsg.innerHTML = `<span><ion-icon name="checkmark-circle"></ion-icon></span>`;
  }

}

//* function declaration to validate phone no.:
function validatePhone() {
  phoneNum = document.getElementById('phoneNo').value;

  if (phoneNum === '') {
    phoneErrorMsg.innerHTML = `phone no is required!`;
  }
  else if (isNaN(phoneNum)) {
    phoneErrorMsg.innerHTML = `only digits, please!`;
  }
  else if (phoneNum.length > 10) {
    phoneErrorMsg.innerHTML = `only 10 digits, please!`;
  }
  else if (phoneNum.length !== 10) {
    phoneErrorMsg.innerHTML = `${10 - phoneNum.length} more digits !`;
  } 
  else {
    phoneErrorMsg.innerHTML = `<span><ion-icon name="checkmark-circle"></ion-icon></span>`;
  }
}



//* function declaration to validate email Id:
function validateEmailId() {
  emailId = document.getElementById('emailId').value;

  if (emailId === '') {
    emailErrorMsg.innerHTML = `email id is required!`;
  }
  else if(!emailId.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailErrorMsg.innerHTML = `email id invalid!`;
  }
  else{
    emailErrorMsg.innerHTML = `<span><ion-icon name="checkmark-circle"></ion-icon></span>`;
  }
}



//* function declaration to validate phone no.:
function validateUserMsg() {
  userMsg = document.getElementById('userMsg').value;

  if (userMsg === '') {
    userMsgErrorMsg.innerHTML = `message is required!`;
  }
  else if (userMsg.length < 31) {
    userMsgErrorMsg.innerHTML = `${ 31 - userMsg.length} more characters required!`;
  }
  else {
    userMsgErrorMsg.innerHTML = `<span><ion-icon name="checkmark-circle"></ion-icon></span>`;
  }
}



//* function declaration to validate form:
function validateForm() {
  console.log(submitErrorMsg.style.display);
  if (!validateName() || ! validatePhone() || !validateEmailId() || !validateUserMsg()) {
    submitErrorMsg.style.display = 'block';
    submitErrorMsg.innerHTML = `Plaese, fix error to submit !`;
    setTimeout(() => {
      submitErrorMsg.style.display = 'none';
      console.log('jay hari !');
    }, 3000);
    console.log('jay hari !');
    return false;
  } else {
    console.log('jay hari !');
    submitErrorMsg.innerHTML = ``;
    return true;
    
  }
  
}
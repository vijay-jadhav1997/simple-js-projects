// 
const generateBtn = document.querySelector('.generate_Btn');
const passwordBox = document.querySelector('#password');
const copyBtn = document.querySelector('.copy_button');


generateBtn.addEventListener('click', (e) => {
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqestuvwxyz';
  let number = '0123456789';
  let symbol = '~!@#$%^&*()_-+=}]{[?/><|₹';

  
  
  str = str + number + symbol;
  
  let password = '';
  
  for (let index = 0; index < 12; index++) {
    let index = Math.floor(Math.random() * str.length);
    const element = str[index];

    password += element;

    // console.log(password);
  }

  passwordBox.value = `${password}`
});

copyBtn.addEventListener('click', (e)=> {
  passwordBox.select();
  document.execCommand('copy');
  
})
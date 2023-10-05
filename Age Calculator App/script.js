// 
const userDateOfBirth = document.getElementById('user_dob');
const submitBtn = document.querySelector('.subt_Btn');
const displayAge = document.querySelector('.display_age').firstElementChild;
// console.log(userDateOfBirth, submitBtn);
// console.log(displayAge);
let monthsName = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let days;
let months;
let years;

submitBtn.addEventListener('click', (e)=> {
  displayAge.textContent = '';
  const data = userDateOfBirth.value.split('-');
  const todayDate = new Date();
  // console.log(typeof Number.parseInt(data[0]));
  // console.log(data[1]);
  // console.log(data[2]);

  let thisYear = todayDate.getFullYear();
  let thisMonth = todayDate.getMonth()+1;
  let thisDay = todayDate.getDate();
  
  
  let birthYear = Number.parseInt(data[0])
  let birthMonth = Number.parseInt(data[1])
  let birthDay = Number.parseInt(data[2])
  
  // console.log(thisMonth, birthMonth);
  // console.log(thisYear, birthYear);
  // console.log(thisDay, birthDay);
  
  // let year = thisYear - birthYear;
  // console.log(year);
  
  if (birthYear > thisYear ) {
    alert(`Dear user, your birthdate can't be next to the ${thisDay}  ${monthsName[thisMonth - 1]}  ${thisYear} ! `);
  } 
  else if (birthYear === thisYear) {
    if(birthMonth > thisMonth){
      alert(`Dear user, your birthdate can't be next to the ${thisDay}  ${monthsName[thisMonth - 1]}  ${thisYear} ! `)
    }
    else if (birthMonth === thisMonth) {
      if (birthDay > thisDay) {
        alert(`Dear user, your birthdate can't be next to the ${thisDay}  ${monthsName[thisMonth - 1]}  ${thisYear} ! `);
      }  
      else if(birthDay <= thisDay){
        days = thisDay - birthDay;
        displayAge.textContent = `Your age is  ${days > 1 ? days  + ' days' : days + ' day' } !`
        console.log('jay hari!');
      }
      
    } 
    else  if (birthMonth < thisMonth){
      if (birthDay > thisDay){
        months = thisMonth - birthMonth - 1;
        if (birthMonth === 2 && birthYear % 4 === 0) {
          days = 29 - birthDay + thisDay;
        }
        else if (birthMonth === 2) {
          days = 28 - birthDay + thisDay;
        }
        else if (birthMonth === 1 || birthMonth === 3 || birthMonth === 5 || birthMonth === 7 || birthMonth === 8 || birthMonth === 10 || birthMonth === 12) {
          days = 31 - birthDay + thisDay;
  
        }
        else {
          days = 30 - birthDay + thisDay;
        }
        displayAge.textContent = `Your age is ${months > 1 ? months + '  months and' : months + ' month and'}  ${days > 1 ? days  + ' days' : days + ' day '} !`
      
        console.log('jay hari!');
      } 
      else if(birthDay === thisDay){
        months = thisMonth - birthMonth;
        displayAge.textContent = `Your age is  ${months > 1 ? months + ' months' : months + ' month'} !`
        console.log('jay hari!');
      }
      else if (birthDay < thisDay) {
        months = thisMonth - birthMonth;
        days = thisDay - birthDay;
        displayAge.textContent = `Your age is ${months > 1 ? months + ' months and' : months + ' month and'} ${days > 1 ? days  + ' days' : days + ' day' }  !`
        console.log('jay hari!');
      }
    }
  }



  else if (birthYear < thisYear) {
    if(birthMonth > thisMonth){
      years = thisYear - 1;
      months = 12 - thisMonth - 1;
      if (birthDay > thisDay){
        if (birthMonth === 2 && birthYear % 4 === 0) {
          days = 29 - birthDay + thisDay;
        }
        else if (birthMonth === 2) {
          days = 28 - birthDay + thisDay;
        }
        else if (birthMonth === 1 || birthMonth === 3 || birthMonth === 5 || birthMonth === 7 || birthMonth === 8 || birthMonth === 10 || birthMonth === 12) {
          days = 31 - birthDay + thisDay;
        }
        else {
          days = 30 - birthDay + thisDay;
        }

        displayAge.textContent = `Your age is ${months > 1 ? months + '  months and' : months + ' month and'}  ${days > 1 ? days  + ' days' : days + ' day '} !`
      
        console.log('jay hari!');
      } 
      else if(birthDay === thisDay){
        months = thisMonth - birthMonth;
        displayAge.textContent = `Your age is  ${months > 1 ? months + ' months' : months + ' month'} !`
        console.log('jay hari!');
      }
      else if (birthDay < thisDay) {
        months = thisMonth - birthMonth;
        days = thisDay - birthDay;
        displayAge.textContent = `Your age is ${months > 1 ? months + ' months and' : months + ' month and'} ${days > 1 ? days  + ' days' : days + ' day' }  !`
        console.log('jay hari!');
      }
    }
    else if (birthMonth === thisMonth) {
      years = thisYear - birthYear;
      if (birthDay > thisDay) {
        if (years === 1) {
          if (birthMonth === 2 && birthYear % 4 === 0) {
            days = 29 - birthDay;
          }
          else if (birthMonth === 2) {
            days = 28 - birthDay;
          }
          else if (birthMonth === 1 || birthMonth === 3 || birthMonth === 5 || birthMonth === 7 || birthMonth === 8 || birthMonth === 10 || birthMonth === 12) {
            days = 31 - birthDay;
          }
          else {
            days = 30 - birthDay + thisDay;
          }
          months = 11 - birthMonth + thisMonth;
          displayAge.textContent = `Your age is  ${months > 1 ? months  + ' months and' : months + ' month and' } ${days > 1 ? days  + ' days' : days + ' day' } !`
          console.log('jay hari !');
        } else {
          console.log('jay hari !');
        }
        console.log('jay hari !');
      }  
      else if(birthDay = thisDay){
        // years = thisYear - birthYear;
        displayAge.textContent = `Your age is  ${years > 1 ? years  + ' years' : years + ' year' } !`
        console.log('jay hari!');
      }
      else if(birthDay < thisDay){
        days = thisDay - birthDay;
        displayAge.textContent = `Your age is  ${years > 1 ? years  + ' years and' : years + ' year and' } ${days > 1 ? days  + ' days and' : days + ' day and' } !`
        console.log('jay hari!');
      }
      
    } 
    else  if (birthMonth < thisMonth){
      if (birthDay > thisDay){
        if (birthMonth === 2 && birthYear % 4 === 0) {
          months = thisMonth - birthMonth - 1;
          days = 29 - birthDay + thisDay;
        }
        else if (birthMonth === 2) {
          months = thisMonth - birthMonth - 1;
          days = 28 - birthDay + thisDay;
        }
        else if (birthMonth === 1 || birthMonth === 3 || birthMonth === 5 || birthMonth === 7 || birthMonth === 8 || birthMonth === 10 || birthMonth === 12) {
          months = thisMonth - birthMonth - 1;
          days = 31 - birthDay + thisDay;
  
        }
        else {
          months = thisMonth - birthMonth - 1;
          days = 30 - birthDay + thisDay;
        }
        displayAge.textContent = `Your age is ${months > 1 ? months + '  months and' : months + ' month and'}  ${days > 1 ? days  + ' days' : days + ' day '} !`
      
        console.log('jay hari!');
      } 
      else if(birthDay === thisDay){
        months = thisMonth - birthMonth;
        displayAge.textContent = `Your age is  ${months > 1 ? months + ' months' : months + ' month'} !`
        console.log('jay hari!');
      }
      else if (birthDay < thisDay) {
        months = thisMonth - birthMonth;
        days = thisDay - birthDay;
        displayAge.textContent = `Your age is ${months > 1 ? months + ' months and' : months + ' month and'} ${days > 1 ? days  + ' days' : days + ' day' }  !`
        console.log('jay hari!');
      }
    }
  }

  // displayAge.textContent = `Your age is  ${birthDay > thisDay ? birthDay - thisDay + ' day/s and' : '' }  ${year > 1 ? year + ' years' : year + ' year'} !`
})
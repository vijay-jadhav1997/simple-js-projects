// 
const userDateOfBirth = document.getElementById('user_dob');
const submitBtn = document.querySelector('.subt_Btn');
const resultBox = document.querySelector('.yourAge');
const todaysDate = document.querySelector('.todaysDate');

userDateOfBirth.max = new Date().toISOString().split('T')[0];
// console.log(userDateOfBirth, submitBtn);
// console.log(resultBox);
let monthsName = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let days;
let months;
let years;

submitBtn.addEventListener('click', (e)=> {
  // resultBox.textContent = '';
  // todaysDate.textContent = '';
  const data = userDateOfBirth.value.split('-');
  const todayDate = new Date();
  // console.log(typeof Number.parseInt(data[0]));
  // console.log(data[1]);
  // console.log(data[2]);

  let thisYear = todayDate.getFullYear();
  let thisMonth = todayDate.getMonth()+1;
  let thisDay = todayDate.getDate();
  
  todaysDate.textContent = `On ${thisDay}  ${monthsName[thisMonth - 1]}  ${thisYear} -`;
  
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
        resultBox.textContent = `you are  ${days > 1 ? days  + ' days' : days + ' day' } old.`
        console.log('jay hariold.');
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

        if (months === 0) {
          resultBox.textContent = `you are  ${days > 1 ? days  + ' days' : days + ' day '} old.`
        } else {
          resultBox.textContent = `you are ${months > 1 ? months + '  months and' : months + ' month and'}  ${days > 1 ? days  + ' days' : days + ' day '} old.`
        }
        console.log('jay hariold.');
      } 
      else if(birthDay === thisDay){
        months = thisMonth - birthMonth;
        resultBox.textContent = `you are  ${months > 1 ? months + ' months' : months + ' month'} old.`
        console.log('jay hariold.');
      }
      else if (birthDay < thisDay) {
        months = thisMonth - birthMonth;
        days = thisDay - birthDay;
        resultBox.textContent = `you are ${months > 1 ? months + ' months and' : months + ' month and'} ${days > 1 ? days  + ' days' : days + ' day' }  old.`
        console.log('jay hariold.');
      }
    }
  }
  else if (birthYear < thisYear) {
    if(birthMonth > thisMonth){
      years = thisYear - birthYear -1;
      months = 12 - birthMonth + thisMonth;
      if (birthDay > thisDay){
        months -= 1;
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

        if(years === 0) {
          resultBox.textContent = `you are ${months > 1 ? months + '  months and' : months + ' month and'}  ${days > 1 ? days  + ' days' : days + ' day '} old.`
          console.log('jay hariold.');
        }
        else {
          resultBox.textContent = `you are ${years > 1 ? years + '  years,' : years + ' year,'} ${months > 1 ? months + '  months and' : months + ' month and'}  ${days > 1 ? days  + ' days' : days + ' day '} old.`
          console.log('jay hariold.');
        }
      } 
      else if(birthDay === thisDay){
        if (years === 0){
          resultBox.textContent = `you are  ${months > 1 ? months + ' months' : months + ' month'} old.`
          console.log('jay hariold.');
        }
        else {
          resultBox.textContent = `you are ${years > 1 ? years + ' years and' : years + ' year and'} ${months > 1 ? months + ' months' : months + ' month'} old.`
          console.log('jay hariold.');
        }
        console.log('jay hariold.');
      }
      else if (birthDay < thisDay) {
        days = thisDay - birthDay;
        if(years === 0) {
          resultBox.textContent = `you are ${months > 1 ? months + ' months and' : months + ' month and'} ${days > 1 ? days  + ' days' : days + ' day' }  old.`
          console.log('jay hariold.');
        }
        else {
          resultBox.textContent = `you are ${years > 1 ? years + ' years' : years + ' year,'} ${months > 1 ? months + ' months and' : months + ' month and'} ${days > 1 ? days  + ' days' : days + ' day' }  old.`
          console.log('jay hariold.');
        }
      }
    }
    else if (birthMonth === thisMonth) {
      years = thisYear - birthYear;
      if (birthDay > thisDay) {
        years -= 1;
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

        if (years === 0) {
          months = 11 - birthMonth + thisMonth;
          resultBox.textContent = `you are  ${months > 1 ? months  + ' months and' : months + ' month and' } ${days > 1 ? days  + ' days' : days + ' day' } old.`
          console.log('jay hari old.');
        } else {
          months = 11 - birthMonth + thisMonth;
          resultBox.textContent = `you are ${years > 1 ? years  + ' years,' : years + ' year,' }  ${months > 1 ? months  + ' months and' : months + ' month and' } ${days > 1 ? days  + ' days' : days + ' day' } old.`
          console.log('jay hari old.');
        }
        console.log('jay hari old.');
      }  
      else if(birthDay === thisDay){
        // years = thisYear - birthYear;
        resultBox.textContent = `you are  ${years > 1 ? years  + ' years' : years + ' year' } old.`
        console.log('jay hariold.');
      }
      else if(birthDay < thisDay) {
        days = thisDay - birthDay;
        resultBox.textContent = `you are  ${years > 1 ? years  + ' years and' : years + ' year and' } ${days > 1 ? days  + ' days' : days + ' day' } old.`
        console.log('jay hariold.');
      }
    } 
    else  if (birthMonth < thisMonth){
      years = thisYear - birthYear;
      months = thisMonth - birthMonth;
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

        months -= 1;
        if (months === 0) {
          resultBox.textContent = `you are ${years > 1 ? years + '  years and' : years + ' year and'}  ${days > 1 ? days  + ' days' : days + ' day '} old.`
        } else {
          resultBox.textContent = `you are ${years > 1 ? years + ' years,' : years + ' year,'} ${months > 1 ? months + '  months and' : months + ' month and'}  ${days > 1 ? days  + ' days' : days + ' day '} old.`
        }
      
        console.log('jay hariold.');
      } 
      else if(birthDay === thisDay){
        resultBox.textContent = `you are ${years > 1 ? years + ' years and' : years + ' year and'}  ${months > 1 ? months + ' months' : months + ' month'} old.`
        console.log('jay hariold.');
      }
      else if (birthDay < thisDay) {
        days = thisDay - birthDay;
        resultBox.textContent = `you are ${years > 1 ? years + ' years,' : years + ' year,'} ${months > 1 ? months + ' months and' : months + ' month and'} ${days > 1 ? days  + ' days' : days + ' day' }  old.`
        console.log('jay hariold.');
      }
    }
  }

})
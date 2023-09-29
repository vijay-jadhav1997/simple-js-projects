//* element references-

//* 1st way how to promise in JS
const promise1 = new Promise(function(resolve, reject){
  // Do an async task
  // Db calls, cryptography, network....
  setTimeout(()=>{
    const h1 = document.querySelector('h1');
    const newH1 = h1.cloneNode(true);
    document.body.appendChild(newH1);
    // console.log('async task is completed');
    resolve();
  },500)
});

promise1.then(()=>{
  // console.log('promise consumed');
})

//* 2nd way how to promise in JS
new Promise((resolve, reject)=>{
  let count = 0;
  const timer = setInterval(()=>{
    if (count === 2) {
      const h1 = document.createElement('h1');
      h1.textContent = '!! Shree Vitthal Rakhumai !!';
      document.body.appendChild(h1);
      clearInterval(timer);
      count++;
    }else {
      const h1 = document.createElement('h1');
      h1.textContent = '!! Jay Shree Radhe !!';
      document.body.appendChild(h1);
      count++;

    }
  }, 1000)
  
 
  setTimeout(() => {
    const h1 = document.body.lastElementChild;
    h1Clone = h1.cloneNode(false);
    h1Clone.textContent = '!! Har Har Mahadev !!';
    document.body.appendChild(h1Clone);
    document.body.removeChild(document.body.firstElementChild);
    resolve()
  }, 5000);
  
}).then(()=>{
  const h2 = document.createElement('h2')
  h2.textContent = 'Second Task is resolved....!!';
  document.body.appendChild(h2);
  document.body.removeChild(document.body.firstElementChild);
  // console.log('Task 2 is resolved!');
})
  

//* taking reference of data from promise:
const promiseThree = new Promise((resolve, reject)=>{
  setTimeout(() => {
    resolve({name:'Jay_Shree_Ram', dham:'Ayodhya', spouse:'Janaki'});
  }, 7000);
});
promiseThree.then((data)=>{
  // console.log(data, typeof (data));
  const div = document.createElement('div');
  div.classList.add('shreeRam')
  div.innerHTML = `
    <h2> Name: <span>${data.name}</span></h2>
    <h2> Spouse:  <span>${data.spouse}</span></h2>
    <h2> Dham: <span>${data.dham}</span> </h2>
  `;
  document.body.appendChild(div);
})

//* advance in promise:
const promiseFour = new Promise((resolve, reject)=>{
  setTimeout(() => {
    let error = false;
    
    if (!error) {
      resolve({userName: 'Jay_Shree_Krushna', devotee:'Shree_Radhaju', dham:'Vrindavan'})
    } else {
      reject('ERROR: Something went wrong!')
    }
  }, 8000);
});

promiseFour.then((userData)=>{
  const div = document.createElement('div');
  div.classList.add('shreeRam')
  div.innerHTML = `
    <h2> Name: <span>${userData.userName}</span></h2>
    <h2> Devotee:  <span>${userData.devotee}</span></h2>
    <h2> Dham: <span>${userData.dham}</span> </h2>
  `;
  document.body.appendChild(div);
  return userData.userName;
}).then((userName)=>{
  const div = document.createElement('div');
  div.classList.add('shreeRam')
  div.innerHTML = `
    <h2> userName: <span>${userName}</span></h2>
  `;
  document.body.appendChild(div);
}).catch((error)=>{
  alert(`${error}`);
  // confirm(`${error}`);
}).finally(()=>{
  // alert('The promise is either resolved or rejected!')
});



//*  
const promiseFive = new Promise((resolve, reject)=>{
  setTimeout(() => {
    let error = true;
    
    if (!error) {
      resolve({userName: 'Jay_Shree_Vitthal', devotee:'Shree_Rukhmini', dham:'Pandharpur'})
    } else {
      reject('ERROR: you did something wrong!')
    }
  }, 8000);
});


async function consumePromiseFive(){
  try {
    const response = await promiseFive;
    console.log(response);
    alert(`${response.userName}`)
  } catch (error) {
    alert(`${error}`)
  }
};
consumePromiseFive()




new Promise((resolve, reject) => {
  console.log("Initial");

  resolve();
}).then(() => {
  throw new Error("Something failed");

  console.log("Do this");
}).catch(() => {
  console.log("Do that");
}).then(() => {
  console.log("Do this, no matter what happened before");
});

let name = 'Rahul';
let working = true;
const user1 = {
  name: 'Akash',
  age: 25,
  student: true,
  isMarried: false,
};

const user2 = {...user1, name, age: 30,working,}
user2




let num = 10;
console.log(num++, num, ++num );
//*
let names = ['Akash', 'Ram', 'Shyam', 'Mohan', 'Damodar', 'Hari', 'Jay', 'Bharat', 'Arjun', 'Kiriti', 'Bhim', 'Govind'];
let namees = names.filter((name)=> name.length < 5);
const obj = {...namees};
const obj1 = {...names.filter((name)=> name.length < 5)};
console.log(obj);
console.log(obj1);

// 
let numbers = [20,3,4,5,11, 15, 8];
const result = numbers.map((number)=> number*10);

console.log(result);
console.log(numbers);


const mappedArray = names.map((name)=>{
  return name + `${name.length}`;
})
console.log(mappedArray);



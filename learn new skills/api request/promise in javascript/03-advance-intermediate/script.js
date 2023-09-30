// 
/*
const event = new Promise((resolve, reject)=> {
  let name = 'Shree Ram';
  if (name.includes('am') ) {
    resolve(name);
  } else {
    const error = Error (`Sorry, We dont found this person!`)
    reject(error);
  }
});

event.then((name)=> {
  confirm(`Confirm This is your name ${name}!`);
}).catch((error)=>{
  alert(error);
})
*/
/*
async function getData(){
  return 'Jay_Hari..!';
}
const dataPromise = getData();
console.log(dataPromise);


dataPromise.then((data)=>{
  console.log(data);
})
dataPromise.then((data)=> console.log(data));

const prom = new Promise((resolve, reject)=> {
  resolve('Promise resolved value');
  // reject("Something went wrong!");
})

prom.then((getDataFun)=>{
  console.log(getDataFun);
}).catch((err)=>{
  console.log(err);
})



const newPromise = new Promise((resolve, reject)=> {
  resolve('!! Har Har Mahadev !!');
})

async function newData() {
  return newPromise;
}

const getGet = newData();
console.log(getGet);

getGet.then((promiseData)=> {
  console.log(promiseData);
})

*/
/*
//! using 'async' + 'await' to handle Promise

// Before 'async' + 'await' how we handle promise:
const promiseNew = new Promise((resolve, reject)=> {
  setTimeout(() => {
    resolve("4) Promise is completed in 5 sec!");
  }, 5000);
});
const promiseNew2 = new Promise((resolve, reject)=> {
  setTimeout(() => {
    resolve("7) Promise is completed in 8 sec!");
  }, 10000);
});

async function handlePromise() {
  console.log('1) !!...Har Har Mahadev...!!');
  const value = await promiseNew;
  // confirm('!! Radhe Govind, Govind Radhe !!');
  console.log('3) !! Radhe Radhe !!', '!!...Har Har Mahadev...!!');
  console.log(value);


  const value2 = await promiseNew2;
  // confirm('!! Radhe Govind, Govind Radhe !!');
  console.log('6) !! Jay Jay Ram Krushna Hari !!');
  console.log(value2);
}
handlePromise();

// function getDone() {
//   promiseNew.then((result)=> console.log(result))
//   console.log('!! Jay Bhole Nath !!');
// }
// getDone();



function name() {
  console.log("2) Jay Shree Vitthal Rakhumai");
  setTimeout(() => {
    console.log("5) !! Shree Dnyanoba Mauli Tukaram !!");
  }, 8000);
}
name()


let count = 1;
let timer = setInterval(() => {
  console.log(`${count} !! Shree_Shyama_Ju !!`);
  count++;
}, 1000);

setTimeout(() => {
  clearInterval(timer);
  console.log('!! Shree_Ji !!');
}, 10000);
*/


let ApiUrl = 'https://api.github.com/users/vijay-jadhav1997';


async function name() {
  try {
  const userData = fetch(ApiUrl);
  const data =  await userData;
  const jsonData =  await data.json();
  console.log(jsonData);
  const element = document.createElement('h1');
  const img = document.createElement('img');
  img.setAttribute('src', `${jsonData.avatar_url}`);
  img.setAttribute('alt', `Profile Image`);
  img.style = `Border: none; Border-radius: 20px; Box-shadow: 5px 5px 15px violet`;
  element.textContent = `${jsonData.name}`;
  document.body.appendChild(element);
  document.body.appendChild(img);
} catch{
  let error = Error('Something went wrong while fetching data from GitHub API!')
  console.log();
}
}

name();

console.log('Jay Shree Ram...!');

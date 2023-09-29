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



//! using 'async' + 'await' to handle Promise

// Before 'async' + 'await' how we handle promise:
const promiseNew = new Promise((resolve, reject)=> {
  resolve("Promise is completed Just Now!")
});

async function handlePromise() {
  const value = await promiseNew;
  console.log(value);
}
handlePromise();

promiseNew.then((result)=> console.log(result))
function getDone() {
  console.log('!! Jay Bhole Nath !!');
}
getDone();




//* To experiment with error handling, "threshold" values cause errors randomly
const THRESHOLD_A = 0; // can use zero 0 to guarantee error

function tetheredGetNumber(resolve, reject) {
  setTimeout(() => {
    const randomInt = Date.now();
    const value = randomInt % 10;
    if (value < THRESHOLD_A) {
      resolve(value);
    } else {
      reject(`Too large: ${value}`);
    }
  }, 500);
}

function determineParity(value) {
  const isOdd = value % 2 === 1;
  return { value, isOdd };
}

function troubleWithGetNumber(reason) {
  const err = new Error("Trouble getting number", { cause: reason });
  console.error(err);
  throw err;
}

function promiseGetWord(parityInfo) {
  return new Promise((resolve, reject) => {
    const { value, isOdd } = parityInfo;
    if (value >= THRESHOLD_A - 1) {
      reject(`Still too large: ${value}`);
    } else {
      parityInfo.wordEvenOdd = isOdd ? "odd" : "even";
      resolve(parityInfo);
    }
  });
}

new Promise(tetheredGetNumber)
  .then(determineParity, troubleWithGetNumber)
  .then(promiseGetWord)
  .then((info) => {
    console.log(`Got: ${info.value}, ${info.wordEvenOdd}`);
    return info;
  })
  .catch((reason) => {
    if (reason.cause) {
      console.error("Had previously handled error");
    } else {
      console.error(`Trouble with promiseGetWord(): ${reason}`);
    }
  })
  .finally((info) => console.log("All done"));
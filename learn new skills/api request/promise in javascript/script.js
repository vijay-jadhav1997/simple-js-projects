//* element references-

//* 1st way how to promise in JS
const promise1 = new Promise(function(resolve, reject){
  // Do an async task
  // Db calls, cryptography, network....
  setTimeout(()=>{
    const h1 = document.querySelector('h1');
    const newH1 = h1.cloneNode(true);
    document.body.appendChild(newH1);
    console.log('async task is completed');
    resolve();
  },500)
});

promise1.then(()=>{
  console.log('promise consumed');
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
  console.log('Task 2 is resolved!');
})
  

//* taking reference of data from promise:
const promiseThree = new Promise((resolve, reject)=>{
  setTimeout(() => {
    resolve({name:'Jay_Shree_Ram', dham:'Ayodhya', spouse:'Janaki'});
  }, 7000);
});
promiseThree.then((data)=>{
  console.log(data, typeof (data));
  const div = document.createElement('div');
  div.classList.add('shreeRam')
  div.innerHTML = `
    <h2> Name:Raghuvansh Shiromani Raja ${data.name}chandra</h2>
    <h2> Spouse: Shree Maharani Mata ${data.spouse}</h2>
    <h2> Dham: ${data.dham} Nagari</h2>
  `;
  document.body.appendChild(div);
})
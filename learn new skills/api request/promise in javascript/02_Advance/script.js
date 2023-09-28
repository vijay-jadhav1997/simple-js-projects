//*
const cart = ['Shoes', 'Shirts', 'Pants', 'Kurtas', 'Dhotis', 'Saris', 'Bedshits', 'Bags'];


// Pormise chain 
createOrder(cart)
.then((orderId)=> {
  // alert(orderId);
  console.log(orderId);

  return orderId;
}).then((orderId)=>{
  // console.log(orderId);
  // console.log(proceedToPayment(orderId));
  return proceedToPayment(orderId);
  
})
.then((proceedToPayment)=>{
  console.log(proceedToPayment);
})
.catch((error)=>{
  console.log(error.message);
  // alert(error.message);
})
.then(()=>{
  console.log('Whatever happens I will be excuted finally!');
})

// Procedures
function createOrder (cart) {
  const promise = new Promise((resolve, reject)=> {
    if (validCart(cart)) {
      const orderId = 'abc123'
      setTimeout(()=> resolve(orderId),1000)
    } else {
      const error = new Error('Cart is not valid!');
      reject(error);
    }
  });
  return promise;
}

function proceedToPayment(orderId){
  return new Promise((resolve, reject)=>{
    resolve('Payment is successful!')
  });
}

function validCart(cart)  {
  return false;
}





const requestUrls = ['https://api.github.com/users/vijay-jadhav1997', 'https://api.github.com/users/akshaymarch7', 'https://api.github.com/users/hiteshchoudhary', 'https://api.github.com/users/SuperSimpleDev', 'https://api.github.com/users/piyushgarg-dev', 'https://api.github.com/users/repalash', 'https://api.github.com/users/tanaypratap', 'https://api.github.com/users/HuXn-WebDev',];

const gitHubApi = 'https://api.github.com/users/akshaymarch7';

// const userData = fetch(gitHubApi);
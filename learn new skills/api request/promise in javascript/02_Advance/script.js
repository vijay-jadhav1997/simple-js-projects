//*
const cart = ['Shoes', 'Shirts', 'Pants', 'Kurtas', 'Dhotis', 'Saris', 'Bedshits', 'Bags'];

createOrder(cart, function (orderId) {
  proceedToPayment(orderId);
});

const promise = createOrder(cart);

promise.then(function(orderId){
  proceedToPayment(orderId);
});

/*
promise.then((orderId)=>{
  proceedToPayment(orderId);
});
*/

const requestUrls = ['https://api.github.com/users/vijay-jadhav1997', 'https://api.github.com/users/akshaymarch7', 'https://api.github.com/users/hiteshchoudhary', 'https://api.github.com/users/SuperSimpleDev', 'https://api.github.com/users/piyushgarg-dev', 'https://api.github.com/users/repalash', 'https://api.github.com/users/tanaypratap', 'https://api.github.com/users/HuXn-WebDev',];

const gitHubApi = 'https://api.github.com/users/akshaymarch7';

const userData = fetch(gitHubApi);

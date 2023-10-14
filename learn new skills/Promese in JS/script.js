//
const getDataBtn = document.querySelector('.click_Btn');
// console.log(getDataBtn);


//*  
getDataBtn.addEventListener('click', getData, false);


// 
function getData(params) {
  const promiseOne = new Promise((resolve, rejected) => {
    const userData = fetch("https://api.github.com/users/vijay-jadhav1997");
    if (userData) {
      console.log(userData);
      resolve(userData);
    } else {
      rejected("something went wrong !");
    }
  })
  .then((userData) => {
    console.log(userData);
    return Object(userData.json());
  })
  .then((userData) => {
    console.log(userData, typeof userData);
    document.write(`<img src="${userData.avatar_url}" style="padding: 10px; border-radius: 25px; width: 300px; height:450px; box-shadow: 0 0 10px seagreen">`);
  })
  .catch((err) => {
    alert(err);
  })
  .finally(() => {
    console.log("!! Jay Jay Ram Krushna Hari !!");
  });
  
}
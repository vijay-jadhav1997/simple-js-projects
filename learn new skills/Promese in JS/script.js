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
    document.write(`
      <div style="display: flex; flex-direction: column; align-items: center; border-radius:10px; overflow: hidden;">
        <img src="${userData.avatar_url}" style="padding: 10px; border-radius: 25px; width: 300px; height:450px; box-shadow: 0 0 10px seagreen"> 
        <h2 style="text-align: center;">${userData.name}</h2>
        <h3 style="text-align: center;">Public-Repositories: ${userData.public_repos}</h3>
      </div>
    `);
  })
  .catch((err) => {
    alert(err);
  })
  .finally(() => {
    console.log("!! Jay Jay Ram Krushna Hari !!");
  });
  
}
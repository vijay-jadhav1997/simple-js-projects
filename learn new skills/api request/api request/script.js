const requestUrls = ['https://api.github.com/users/vijay-jadhav1997','https://api.github.com/users/hiteshchoudhary', 'https://api.github.com/users/SuperSimpleDev', 'https://api.github.com/users/piyushgarg-dev', 'https://api.github.com/users/repalash', 'https://api.github.com/users/tanaypratap', 'https://api.github.com/users/HuXn-WebDev',];




// return data;

//* reference of element:
const button = document.querySelector('#click_button');
const box = document.querySelector('.box');

let clickNumber = 0;
//* event listner
button.addEventListener('click',()=>{
  if (clickNumber === 0)  {requestUrls.forEach((requestUrl) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', requestUrl);
      let data;
      xhr.onreadystatechange = function () {
        // console.log(xhr.readyState);
        if (xhr.readyState === 4) {
          data = JSON.parse(this.responseText);
          console.log( data);
          // console.table([data.login, data.followers, data.following, data.avatar_url]);
        }
      }
      xhr.send();

      setTimeout(()=>{
        const card = document.createElement('div');
        card.classList.add('card')
        card.innerHTML = `
          <img src="${data.avatar_url}" alt="Profile image">
          <h1>Name: <span> ${data.name !== null ? data.name : data.twitter_username}</span></h1>
          <h3>Bio: <span> ${data.bio !== null ? data.bio : '-'}</span></h3>
          <h3>Followers: <span>${data.followers !== null ? data.followers : '-'}</span></h3>
          <h3>Following: <span> ${data.following !== null ? data.following : '-'}</span></h3>
          <h3>Public Repositories: <span> ${data.public_repos !== null ? data.public_repos : '-'}</span></h3>
          <h3>Twitter username: <span> ${data.twitter_username !== null ? data.twitter_username : '-'}</span></h3>
        `;
        card.style.opacity = '1';
        box.appendChild(card);
        // console.log(card);
      }, 5000)
      
    });
    return clickNumber = 1;
  }
}) 



    


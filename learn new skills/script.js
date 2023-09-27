const requestUrl = 'https://api.github.com/users/vijay-jadhav1997' ;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl);
    let data;
    xhr.onreadystatechange = function () {
      console.log(xhr.readyState);
      if (xhr.readyState === 4) {
         data = JSON.parse(this.responseText);
        console.log( data);
        console.table([data.login, data.followers, data.following, data.avatar_url]);
      }
    }
    xhr.send();

    //* reference of element:
    const button = document.querySelector('#click_button');
    const box = document.querySelector('.box');


    //* event listner
    button.addEventListener('click', displayCard) 


    function displayCard() {
      const card = document.createElement('div');
      card.classList.add('card')
      card.innerHTML = `
        <img src="${data.avatar_url}" alt="Profile image">
        <h1>Name: <span> ${data.name}</span></h1>
        <h3>Bio: <span> ${data.bio}</span></h3>
        <h3>Followers: <span> ${data.followers}</span></h3>
        <h3>Following: <span> ${data.following}</span></h3>
        <h3>Public Repositories: <span> ${data.public_repos}</span></h3>
        <h3>Twitter username: <span> ${data.twitter_username}</span></h3>
      `;
      card.style.opacity = '1';
      box.appendChild(card);
      console.log(card);
    }
    
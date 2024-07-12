// 
//* Element Selection:
const humbergerMenuIcon = document.querySelector('.humberger-icon')
const headerContainer = document.querySelector('.header-container')
const closeIcon = document.querySelector('.close-icon')
const navLinks = document.querySelector('.nav-links')
const welcomeMessagesCloseBtn = document.querySelector('.message-close-btn')
const welcomeMessageElement = document.querySelector('.welcome-message')
const welcomeMessagesContainer = document.querySelector('.welcome-message-container')

// console.log(welcomeMessageElement);

// * State or Data:
const welcomeMessages = [
  "helloo! Welcome to 'Foodie', where every meal is a celebration!",
  "Welcome to 'Foodie'! Dive into our menu and enjoy your best flavors.",
  "Dear User, welcome to 'Foodie'! Enjoy exploring our delicious offerings.",
  "Namaste! Welcome to 'Foodie'. We’re excited to serve you the best food.",
  "Dear Guest, welcome to 'Foodie'! Get ready for a delicious experience.",
  "Namaste! 'Foodie' welcomes you. Prepare for a delightful dining experience.",
  "Dear User, welcome to 'Foodie'! Enjoy exploring our delicious offerings.",
  "Namaste! Welcome to 'Foodie'. We’re excited to serve you the best food.",
  "Dear Guest, welcome to 'Foodie'! Get ready for a delicious experience.",
  "Namaste! 'Foodie' welcomes you. Prepare for a delightful dining experience."
]


//* code on 

setTimeout(() => {
  welcomeMessagesContainer.classList.add('open')

  welcomeMessageElement.innerText = `${welcomeMessages[Math.floor(Math.random() * 10)]}`

  setTimeout(() => {
    welcomeMessagesContainer.classList.remove('open')
  }, 30000);
}, 1000)

//? Events:

// Event listener for clicks on the humbergerMenuIcon to add 'open' class to the headerContainer's classList
humbergerMenuIcon.addEventListener('click', (e) => {
  e.stopPropagation()
  headerContainer.classList.toggle('open')
}, false)

// Event listener for clicks on the navLink to stop event progation
navLinks.addEventListener('click', (e) => {
  e.stopPropagation()
}, false)



// Event listener for clicks on the closeIcon 
closeIcon.addEventListener('click', (e) => {
  e.stopPropagation()
  headerContainer.classList.remove('open')
}, false)


// Event listener for clicks on the window
window.addEventListener('click', (e) => {
  headerContainer.classList.remove('open')
})


//* Event listener for clicks on welcomeMessagesCloseBtn
welcomeMessagesCloseBtn.addEventListener('click', (e) => {
  e.stopPropagation()
  welcomeMessagesContainer.classList.remove('open')
  // console.log(e);
})
// Selection
const getNewsletterPopup = document.querySelector('.get-newsletter-popup')
const subscribePopup = document.querySelector('.subscribe-popup')
const closeBtn = document.querySelector('.close-icon')
const overlay = document.querySelector('.overlay')



//*
setTimeout(() => {
  getNewsletterPopup.classList.remove('close')
  overlay.classList.add('open')
},3000)




//* Events 
getNewsletterPopup.firstElementChild.addEventListener('click', (e) => {
  e.stopPropagation()
  getNewsletterPopup.classList.add('close')
  
  subscribePopup.classList.add('open')

})


closeBtn.addEventListener('click', (e) => {
  e.stopPropagation()
  
  subscribePopup.classList.remove('open')
  overlay.classList.remove('open')
})

overlay.addEventListener('click', (e) => {
  e.stopPropagation()
  subscribePopup.classList.remove('open')
  overlay.classList.remove('open')
  getNewsletterPopup.classList.add('close')
})
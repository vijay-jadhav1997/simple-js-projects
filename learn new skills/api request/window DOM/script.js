// 
let windo;
function openWindow() {
  //  windo = window.open('https://www.github.com', "width=550px", "height=700px" )
   windo = window.open('https://www.github.com')
}

function closeWindow() {
   windo.close();
}

let count = window.history.length
document.getElementsByTagName('h1')[0].innerText = count;
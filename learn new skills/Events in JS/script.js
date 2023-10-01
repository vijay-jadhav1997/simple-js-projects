// 

const story = document.querySelector('.story');

const setText = document.querySelector('#set-text');
setText.addEventListener('click', () => {
  story.textContent = 'Jay Jay Ram Krushna Hari, "Govind Radhe - Shree Gopal Radhe", "Shree Dnyanoba Mauli Tukaram"';
}, false)

const clearText = document.querySelector('#clear-text');
clearText.addEventListener('click', () => {
  story.textContent = '';
}, false);


const parent = document.body.querySelector(".parent");

const addChild = document.body.querySelector("#add-child");
addChild.addEventListener("click", () => {
  // Only add a child if we don't already have one
  // in addition to the text node "parent"
  if (parent.childNodes.length > 1) {
    return;
  }
  const child = document.createElement("div");
  child.classList.add("child");
  child.textContent = "child";
  parent.appendChild(child);
});

const removeChild = document.body.querySelector("#remove-child");
removeChild.addEventListener("click", () => {
  const child = document.body.querySelector(".child");
  parent.removeChild(child);
  
});

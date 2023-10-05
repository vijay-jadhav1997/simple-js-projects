// 
const addBtn = document.querySelector('.add_button');
let todoTitleText = document.querySelector('#todo_name');
let todoDateText = document.querySelector('#todo_date');
let todoDiscriptionText = document.querySelector('#descr_input');
// console.log(addBtn);

const todoList = document.querySelector('.todo_list')
// console.log(todoList);


//* addEventListener to addBtn
addBtn.addEventListener('click' ,(e)=> {
  let todoObject = {};
  // console.log(todoTitle);
  // console.log(todoDate);

  if (todoTitleText.value === '') {
    alert('Please enter Task Title...!!')
  // } else if (todoDateText.value === '') {
  //   alert('Please select Task Date...!!')
  } else {
    todoObject.title = `${todoTitleText.value}`;
    todoObject.date = `${todoDateText.value}`;
    todoObject.discription = `${todoDiscriptionText.value}`;
    // console.log(todoObject);

  
    createTask(todoObject);
  }
  
})

//* function to create new task:
function createTask(task) {
  let red = Math.floor(Math.random()* 255);
  let green = Math.floor(Math.random()* 255);
  let blue = Math.floor(Math.random()* 255);
  console.log(red);
  console.log(green);
  console.log(blue);
  const todoElement = document.createElement('div');
  todoElement.classList.add('todo_box');
  todoList.appendChild(todoElement);

  const checkboxInput = document.createElement('input')
  checkboxInput.setAttribute('type', 'checkbox');
  checkboxInput.setAttribute('id', 'task_checkbox');
  // checkboxInput.setAttribute('onclick', 'taskDone()');
  todoElement.appendChild(checkboxInput);
  
  const newTaskElement = document.createElement('div');
  newTaskElement.classList.add('new_task');
  todoElement.appendChild(newTaskElement);
  
  if (red > 190 && green > 190 && blue > 190) {
    newTaskElement.style.background = `linear-gradient(${red}deg, rgb(${red}, ${green}, ${blue}), rgb(${blue}, ${green}, ${red}), rgb(${green}, ${red}, ${blue}))`;
    newTaskElement.style.color = 'black';
  } else {
    newTaskElement.style.color = 'white';
    if (red < 20) {
      newTaskElement.style.background = `linear-gradient(${red}deg, rgb(${red}, ${green}, ${blue}), rgb(${blue}, ${green}, ${red}), rgb(${green}, ${red}, ${blue}))`;
    } else if (red < 50) {
      newTaskElement.style.background = `linear-gradient(${red}deg, rgb(${blue}, ${green}, ${red}), rgb(${green}, ${red}, ${blue}))`;
    } else if (red < 100) {
      newTaskElement.style.background = `linear-gradient(${red}deg, rgb(${red}, ${green}, ${blue}), rgb(${blue}, ${green}, ${red}), rgb(${green}, ${red}, ${blue}))`;
    } else if (red < 150) {
      newTaskElement.style.background = `linear-gradient(${green}deg, rgb(${blue}, ${green}, ${red}), rgb(${green}, ${red}, ${blue}))`;
    } else if (red < 200) {
      newTaskElement.style.background = `linear-gradient(${red}deg, rgb(${red}, ${green}, ${blue}), rgb(${blue}, ${green}, ${red}), rgb(${green}, ${red}, ${blue}))`;
    } else {
      newTaskElement.style.background = `rgb(${green}, ${red}, ${blue})`;
    }
  }

  const titleBoxElement = document.createElement('div');
  titleBoxElement.classList.add('title_box');
  newTaskElement.appendChild(titleBoxElement);
  
  const titleElement = document.createElement('h3');
  titleElement.classList.add('title');
  titleElement.textContent =`${task.title}`;
  titleBoxElement.appendChild(titleElement);
  
  const timeElement = document.createElement('span');
  timeElement.classList.add('time');
  timeElement.textContent =`(${task.date})`;
  titleBoxElement.appendChild(timeElement);
  
  const todoDiscrElement = document.createElement('p');
  todoDiscrElement.textContent =`${task.discription}`;
  newTaskElement.appendChild(todoDiscrElement);

  const deleteBtnElement = document.createElement('button');
  deleteBtnElement.classList.add('delete_Btn');
  // deleteBtnElement.setAttribute('onclick', 'deleteTodoBox()')
  deleteBtnElement.textContent = '\u00d7';
  todoElement.appendChild(deleteBtnElement);
  
  // console.log(todoElement);

  todoTitleText.value = '';
  todoDateText.value = '';
  todoDiscriptionText.value = '';
  
  saveData();
}
  
//* function to delete particular task: 
// function deleteTodoBox()  {
//   const deleteBtn = document.querySelector('.delete_Btn');
//   const todoBox = deleteBtn.parentNode;
//   // console.log(todoBox);
//   todoList.removeChild(todoBox)
// };

//* function to mark task done:
// let count = 0;
// function taskDone() {
//   const checkboxInput = document.querySelector('#task_checkbox');
//   const todoBox = checkboxInput
//   .parentNode;
  
// }

todoList.addEventListener('click',(event) => {
  // console.log(event);
  // console.log(event.srcElement);
  // console.log(event.target.parentNode);
  // console.log(event.target);

  const todoBox = event.target.parentNode;

  // console.log();

  if (event.target.className === 'delete_Btn') {
    todoList.removeChild(todoBox);
  } else if (event.target.id === 'task_checkbox') {
    todoBox.children[1].classList.toggle('task_completed');
    
  }
  saveData();
} , false)

function saveData(){
  localStorage.setItem('data', todoList.innerHTML)
}

function displayTask() {
  todoList.innerHTML = localStorage.getItem('data')
}
displayTask();
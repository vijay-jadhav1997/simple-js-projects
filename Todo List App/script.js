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
  } else if (todoDateText.value === '') {
    alert('Please select Task Date...!!')
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
  const todoElement = document.createElement('div');
  todoElement.classList.add('todo_box');
  todoList.appendChild(todoElement);

  const checkboxInput = document.createElement('input')
  checkboxInput.setAttribute('type', 'checkbox');
  checkboxInput.setAttribute('id', 'task_checkbox');
  checkboxInput.setAttribute('onclick', 'taskDone()');
  todoElement.appendChild(checkboxInput);

  
  const newTaskElement = document.createElement('div');
  newTaskElement.classList.add('new_task');
  todoElement.appendChild(newTaskElement);

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
  deleteBtnElement.setAttribute('onclick', 'deleteTodoBox()')
  deleteBtnElement.textContent = '\u00d7';
  todoElement.appendChild(deleteBtnElement);
  
  // console.log(todoElement);

  todoTitleText.value = '';
  todoDateText.value = '';
  todoDiscriptionText.value = '';
  
}
  
//* function to delete particular task: 
function deleteTodoBox()  {
  const deleteBtn = document.querySelector('.delete_Btn');
  const todoBox = deleteBtn.parentNode;
  // console.log(todoBox);
  todoList.removeChild(todoBox)
};

//* function to mark task done:
let count = 0;
function taskDone() {
  const checkboxInput = document.querySelector('#task_checkbox');
  const todoBox = checkboxInput.parentNode;
  if (count === 0) {
    todoBox.style = 'text-decoration: line-through; color: gray;'
    count = 1;
  } else {
    todoBox.style = 'text-decoration: none; color: black;'
    count = 0;
  }
}
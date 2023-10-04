// 
const addBtn = document.querySelector('.add_button');
let todoTitleText = document.querySelector('#todo_name');
let todoDateText = document.querySelector('#todo_date');
let todoDiscriptionText = document.querySelector('#descr_input');
// console.log(addBtn);

const todoList = document.querySelector('.todo_list')
// console.log(todoList);

// let allTodos = [];

addBtn.addEventListener('click' ,(e)=> {
  let todoObject = {};
  // console.log(todoTitle);
  // console.log(todoDate);

  if (todoTitleText.value === '') {
    alert('Please enter Todo Title...!!')
  } else if (todoDateText.value === '') {
    alert('Please select Todo Date-Time...!!')
  } else {
    todoObject.title = `${todoTitleText.value}`;
    todoObject.date = `${todoDateText.value}`;
    todoObject.discription = `${todoDiscriptionText.value}`;
    // console.log(todoObject);

    // allTodos.push(todoObject);
    // console.log(allTodos);
  
    createTodo(todoObject);
  }
  
})

// let deleteBtn = document.querySelector('.delete_Btn');
// let todoBox = document.querySelector('.todo_box');
// function create todo in todo_list:
function createTodo(todo) {
  // todoList.innerHTML = '';
  // allTodos.forEach((todo) => {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo_box');
    todoList.appendChild(todoElement);
    
    const titleBoxElement = document.createElement('div');
    titleBoxElement.classList.add('title_box');
    todoElement.appendChild(titleBoxElement);
    
    const titleElement = document.createElement('h3');
    titleElement.classList.add('title');
    titleElement.textContent =`${todo.title}`;
    titleBoxElement.appendChild(titleElement);
    
    const timeElement = document.createElement('span');
    timeElement.classList.add('time');
    timeElement.textContent =`(${todo.date})`;
    titleBoxElement.appendChild(timeElement);
    
    const todoDiscrElement = document.createElement('p');
    todoDiscrElement.textContent =`${todo.discription}`;
    todoElement.appendChild(todoDiscrElement);

    const deleteBtnElement = document.createElement('button');
    deleteBtnElement.classList.add('delete_Btn');
    deleteBtnElement.setAttribute('onclick', 'deleteTodoBox()')
    deleteBtnElement.textContent = 'X';
    todoElement.appendChild(deleteBtnElement);
    
    console.log(todoElement);
  // });

  todoTitleText.value = '';
  todoDateText.value = '';
  todoDiscriptionText.value = '';
  
}
// todoBox = document.querySelector('.todo_box')

// console.log(todoBox);
// function deleteTodoBox() {
  // }
  
  
  function deleteTodoBox()  {
  const deleteBtn = document.querySelector('.delete_Btn');
  
  console.log(deleteBtn);
  // console.log(e.srcElement.parentNode);
  // todoList.removeChild(e.srcElement.parentNode)
};
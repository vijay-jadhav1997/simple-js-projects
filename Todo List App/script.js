// 
const addBtn = document.querySelector('.add_button');
// console.log(addBtn);

const todoList = document.querySelector('.todo_list')
// console.log(todoList);

let allTodos = [];

addBtn.addEventListener('click' ,(e)=> {
  let todoObject = {};
  let todoTitleText = document.querySelector('#todo_name').value;
  let todoDateText = document.querySelector('#todo_date').value;
  // console.log(todoTitle);
  // console.log(todoDate);
  todoObject.title = `${todoTitleText}`;
  todoObject.date = `${todoDateText}`;
  // console.log(todoObject);
  
  allTodos.push(todoObject);
  console.log(allTodos);

  createTodo();

  todoTitleText = '';
  todoDateText = '';
})


// function create todo in todo_list:
function createTodo() {
  todoList.innerHTML = '';
  allTodos.forEach((todo) => {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo_box');
    todoElement.innerHTML = `
      <h1>${todo.title}</h1>
      <h3>${todo.date}</h3>
      <p></p>
    `;
    todoList.appendChild(todoElement)
  })
  // const todoElement = document.createElement('div');
  // todoElement.classList.add('todo_box');
  // todoElement.innerHTML = `
  //   <h1>${todoTitle}</h1>
  //   <h3>${todoDate}</h3>
  //   <p></p>
  // `;
}


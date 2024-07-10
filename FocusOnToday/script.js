// 
//* selector
const notification = document.querySelector('.notification')
const progressBar = document.querySelector('.progress-bar')
const progressBarValue = document.querySelector('.progress-value')
const alertMsg = document.querySelector('.alert-message')
const goalInputList = document.querySelectorAll('.goal-input')
const goalselectIconsList = document.querySelectorAll('.select-icon')
const bottomMessage = document.querySelector('.message')
const goalsList = document.querySelectorAll('.goal')



//* State
const notificationText = [
  "Raise the bar by completing your goals!",
  "Well begun is half done!",
  "Just a step away, keep going!",
  "Whoa! You just completed all the goals.",
  "Whoa! You just completed all the goals.",
  "Whoa! You just completed all the goals."
]
const bottomMessageText = [
  "Move one step ahead, today!",
 "Keep Going, You\'re making great progress!",
 "Keep Going, You\'re making great progress!",
  "Great!, You\'ve made it.",
  "Great!, You\'ve made it.",
  "Great!, You\'ve made it."
]

let goals = []

if(JSON.parse(window.localStorage.getItem('goals'))) {
  goals = JSON.parse(window.localStorage.getItem('goals')) 
} else {
  goalInputList.forEach((input, index) => goals[index] = { goal: '', isCompleted: false})
}


goalInputList.forEach((input, index) => input.value = goals[index].goal) //* set the value from the goals to the particular input element

goals.forEach((goal, index) => {
  if(goal.isCompleted){
    //* add 'completed' class to the '.goal' elemenet, if particular goal is completed already.
    goalsList[index].classList.add('completed')
  }
})


let completedGoals = goals.filter(goal => goal.isCompleted).length
progressBar.style.width = `${(completedGoals/goals.length)* 100}%`;
progressBarValue.innerText = `${completedGoals}/${goals.length} Completed`;
notification.textContent = `${notificationText[completedGoals]}`;
bottomMessage.textContent = `"${bottomMessageText[completedGoals]}"`;





//* Handlers (Handler function)
function handleInput(e) {
  alertMsg.style.display = 'none';

  const inputIndex = [...goalInputList].indexOf(e.target)
  goals[inputIndex].goal = e.target.value
  window.localStorage.setItem('goals', JSON.stringify(goals))
}


function handleSelection(e) {
  if(!([...goalInputList].every(input => input.value))) {
    //*Displays 'error message if all the goals haven not been set.

    alertMsg.innerText = `Please set all the ${goals.length} goals!`
    alertMsg.style.display = 'block';
    return //* due to return key word => 'handleSelection' function returns from here and below code will not be executed.
  }  

  const selectionIndex = [...goalselectIconsList].indexOf(e.target) //* returns index of 'e.target' element.
  goalsList[selectionIndex].classList.toggle('completed') //* toggles 'completed' to '.goal' element which is the parent of 'e.target' element.
  goals[selectionIndex].isCompleted = !(goals[selectionIndex]?.isCompleted) //* toggles the value of 'goals[selectionIndex].isCompleted' (true to false, or vice versa)
  window.localStorage.setItem('goals', JSON.stringify(goals)) //* save changes to local storage
  
  //* 
  completedGoals = goals.filter(goal => goal.isCompleted).length
  progressBar.style.width = `${(completedGoals/goals.length)* 100}%`;
  progressBarValue.innerText = `${completedGoals}/${goals.length} Completed`;
  notification.textContent = `${notificationText[completedGoals]}`;
  bottomMessage.textContent = `"${bottomMessageText[completedGoals]}"`;
}


//* Events
goalInputList.forEach(inputElement => inputElement.addEventListener('input', handleInput, false))

goalselectIconsList.forEach(selectIconElement => selectIconElement.addEventListener('click', handleSelection, true))
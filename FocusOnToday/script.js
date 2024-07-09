// 
//* selector
const notification = document.querySelector('.notification')
const progressBar = document.querySelector('.progress-bar')
const alertMsg = document.querySelector('.alert-message')

// const goalInput1 = document.querySelector('#goal1-input')
// const goalInput2 = document.querySelector('#goal2-input')
// const goalInput3 = document.querySelector('#goal3-input')
const goalInputList = document.querySelectorAll('.goal-input')

// const goalselectIcon1 = document.querySelector('.select-icon1')
// const goalselectIcon2 = document.querySelector('.select-icon2')
// const goalselectIcon3 = document.querySelector('.select-icon3')
const goalselectIconsList = document.querySelectorAll('.select-icon')


const bottomMessage = document.querySelector('.message')



//* State
let goals = []

if(JSON.parse(window.localStorage.getItem('goals'))) {
  goals = JSON.parse(window.localStorage.getItem('goals')) 
} else {
  goalInputList.forEach((input, index) => goals[index] = { goal: '', isCompleted: false})
}

// console.log(JSON.parse(window.localStorage.getItem('goals')));

// console.log(goals.filter(goal => goal.isCompleted));

goalInputList.forEach((input, index) => input.value = goals[index].goal)

goals.forEach((goal, index) => {
  if(goal.isCompleted){
    goalInputList[index].classList.add('completed')
    goalselectIconsList[index].classList.add('completed')
  }
})


// progressBar.style.display = 'flex';

if(goals[0]?.isCompleted && goals[1]?.isCompleted && goals[2]?.isCompleted) {
  progressBar.style.width = '100%';
  progressBar.textContent = '3/3 Completed';
  notification.textContent = '"Whoa! You just completed all the goals, time for chill 😄"'
  bottomMessage.textContent = '"Great!, You\'ve made it."'
}
else if((goals[0]?.isCompleted && goals[1]?.isCompleted)  || (goals[0]?.isCompleted && goals[2]?.isCompleted) || (goals[2]?.isCompleted && goals[1]?.isCompleted)) {
  progressBar.style.width = '67%';
  progressBar.textContent = '2/3 Completed';
  notification.textContent = '"Just a step away, keep going!"'
  bottomMessage.textContent = '"Keep Going, You\'re making great progress!"'
}
else if(goals[0]?.isCompleted || goals[1]?.isCompleted || goals[2]?.isCompleted) {
  progressBar.style.width = '33%';
  progressBar.textContent = '1/3 Completed';
  notification.textContent = '"Well begun is half done!"'
  bottomMessage.textContent = '"Keep Going, You\'re making great progress!"'
}else {
  progressBar.style.display = 'none';
}






//* Handlers (Handler function)
function handleInput(e) {
  alertMsg.style.display = 'none';
  console.log(e.target);

  const inputIndex = [...goalInputList].indexOf(e.target)
  goals[inputIndex].goal = e.target.value
  window.localStorage.setItem('goals', JSON.stringify(goals))
}



function handleSelection(e) {
  // console.log(e.target);

  if(!([...goalInputList].every(input => input.value))) {
    alertMsg.style.display = 'block';
  }  

  //  if (e.target === goalselectIcon1) {
  //   if (goals[0].isCompleted) {
  //     goals[0].isCompleted = false
  //   } else {
  //     goals[0].isCompleted = true
  //   }
  //   // console.log('jay Shreee');
  //   goalInput1.classList.toggle('completed');
  //   // goalselectIcon1.classList.toggle('completed');
  // }
  // else if (e.target === goalselectIcon2) {
  //   if (goals[1].isCompleted) {
  //     goals[1].isCompleted = false
  //   } else {
  //     goals[1].isCompleted = true
  //   }
  //   goalInput2.classList.toggle('completed')
  //   // goalselectIcon2.classList.toggle('completed');
  // } else if (e.target === goalselectIcon3) {
  //  if (goals[2].isCompleted) {
  //     goals[2].isCompleted = false
  //   } else {
  //     goals[2].isCompleted = true
  //   }
  //   goalInput3.classList.toggle('completed')
  //   // goalselectIcon3.classList.toggle('completed');
  // }
  const selectionIndex = [...goalselectIconsList].indexOf(e.target)
  goalselectIconsList[selectionIndex].classList.toggle('completed')
  e.target.classList.toggle('completed')
  // console.log(goalselectIconsList[selectionIndex].classList);
  // console.log(goalselectIconsList[selectionIndex].classList.toggle('completed'));
  window.localStorage.setItem('goals', JSON.stringify(goals))
  

  
  // progressBar.style.display = 'flex';

  const completedGoals = goals.filter(goal => goal.isCompleted).length
  // console.log(goals.length, completedGoals);
  progressBar.style.width = `${(completedGoals/goals.length)* 100}%`;
  progressBar.textContent = `${completedGoals}/${goals.length} Completed`;
  notification.textContent = '"Whoa! You just completed all the goals, time for chill."'
  bottomMessage.textContent = '"Great!, You\'ve made it."'


}




//* Events
goalInputList.forEach(inputElement => inputElement.addEventListener('input', handleInput, false))

goalselectIconsList.forEach(selectIconElement => selectIconElement.addEventListener('click', handleSelection, true))
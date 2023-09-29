// import {sum, subtract, multiply, divide} from "./calculator.js"

let output = document.querySelector("#output");
let displayOperation = document.querySelector("#display-operation");

let firstNumber = 0
let operation = null
let resetAfterOperation = false

document.querySelectorAll("#calculator .number").forEach(button => {
    button.addEventListener("click", (event) => {
        let value = event.currentTarget.textContent
        if (resetAfterOperation) {
            output.value = value
            resetAfterOperation = false
        } else {
            output.value += value
        }
        // name(value);
        // console.log(name(value));
    })
})

document.querySelectorAll("#calculator .operation").forEach(button => {
    button.addEventListener("click", (event) => {
        firstNumber = Number.parseInt(output.value)
        operation = event.currentTarget.dataset.action
        resetAfterOperation = true
        name(firstNumber);
        console.log(name(firstNumber));
    })
})

const equal = document.querySelector("#calculator .equal")
equal.addEventListener("click", () => {
    if (!operation){
        return
    }
    resetAfterOperation = true
    let secondNumber = Number.parseInt(output.value, 10)
    
    if (operation === "sum") {
        output.value = sum(firstNumber, secondNumber);
        name('+');
    } else if (operation === "subtract") {
        output.value = subtract(firstNumber, secondNumber)
        name('-');
    } else if (operation === "multiply") {
        output.value = multiply(firstNumber, secondNumber)
        name('X');
    } else if (operation === "divide") {
        output.value = divide(firstNumber, secondNumber)
        name('/');
    }

    //reset operation
    name(secondNumber);
    console.log(name(secondNumber));
    operation = null
})


function sum(a, b) {
  return a+b;
}

function subtract(a, b) {
  return a-b;

}

function multiply(a, b) {
  return a*b;

}

function divide(a, b) {
  return a/b;

}

function name(value) {
    let condition = 0;
    let displayOperationText = '';
    if (condition === 0) {
        displayOperationText = `${displayOperationText + String(value)} `;
        console.log(displayOperationText);
        condition = 1;
    } else if (condition === 1){
        displayOperationText += `${displayOperationText + String(value)}`;
        condition = 2;
    } else {
        displayOperationText += `${displayOperationText + String(value)}`;
        condition = 0;
    }
   
    return displayOperation.value = `${displayOperationText}`;
    
}
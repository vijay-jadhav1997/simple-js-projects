// import {sum, subtract, multiply, divide} from "./calculator.js"

let output = document.querySelector("#output");
let displayOperation = document.querySelector("#display-operation");

let firstNumber = 0;
let operation = null;
let resetAfterOperation = false;

// let displayOperationText = '';

document.querySelectorAll("#calculator .number").forEach(button => {
    button.addEventListener("click", (event) => {
        let value = event.currentTarget.textContent;
        if (resetAfterOperation) {
            output.value = value;
            resetAfterOperation = false;
        } else {
            output.value += value;
        }
    })
})

document.querySelectorAll("#calculator .operation").forEach(button => {
    button.addEventListener("click", (event) => {
        firstNumber = Number.parseInt(output.value);
        operation = event.currentTarget.dataset.action;
        resetAfterOperation = true;
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
    } else if (operation === "subtract") {
        output.value = subtract(firstNumber, secondNumber)
    } else if (operation === "multiply") {
        output.value = multiply(firstNumber, secondNumber)
    } else if (operation === "divide") {
        output.value = divide(firstNumber, secondNumber)
    }

    //reset operation
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

//* Display 
/*
function name() {
    
    
    console.log(displayOperationText);
    return displayOperation.value = `${displayOperationText}`;
    
}
*/


const navBrand = document.querySelector('.nav-brand');
function modify() {
    navBrand.style = `font-size: 50px; font-femily: Arial; color: yellowgreen; box-shadow: 0 0 10px rgb(179, 0, 179);`;
}
function demodify() {
    navBrand.style = ``;
}
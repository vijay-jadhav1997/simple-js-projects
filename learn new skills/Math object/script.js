// 
const container = document.querySelector('.items');

function createElement(property, description, example1, value1, example2, value2 ) {
  
  let element = document.createElement('li')
  element.innerHTML = `<span>${container.children, property} </span> : ${description} <br /> <span class="example">Ex, ${example1} => ${value1} <br> ${example2} => ${value2} </span>`;
  container.appendChild(element);
}


let numbers = [20, 50, 5, -10, 525];

createElement('Math.abs(-x)', 'Returns the positive value of x.','Math.abs(-5)', Math.abs(-5), 'Math.abs(5)', Math.abs(5));

createElement('Math.ceil(x)', 'Returns the value of x rounded up to its nearest integer.','Math.ceil(0.467)', Math.ceil(0.467), 'Math.ceil(0.867)', Math.ceil(0.867));

createElement('Math.floor(x)', 'Returns the value of x rounded down to its nearest integer.','Math.floor(0.467)', Math.floor(0.467), 'Math.floor(0.867)', Math.floor(0.867));

createElement('Math.round(x)', 'Returns the rounded value of x to its nearest integer.','Math.round(0.467)', Math.round(0.467), 'Math.round(0.867)', Math.round(0.867));

createElement('Math.random()', 'Returns random decimal value in between 0 & 1.', 'Math.random()', Math.random().toFixed(5), 'Math.random()', Math.random().toFixed(5));

createElement('Math.pow(x, y)', 'Returns the value of x to the power y.','Math.pow(5, 3)', Math.pow(5, 3), 'Math.pow(2, 5)', Math.pow(2, 5));

createElement('Math.sqrt(x)', 'Return the square root of x.','Math.sqrt(25)', Math.sqrt(25), 'Math.sqrt(10)', Math.sqrt(10).toFixed(4));

createElement('Math.min(x,y,z)', 'Return the minimum value among x, y & z.','Math.min(25, 10, 40, 5)', Math.min(25, 10, 40, 5), 'numbers = [20, 50, 5, -10, 525], Math.min(...numbers)', Math.min(...numbers));

createElement('Math.max(x,y,z)', 'Return the minimum value among x, y & z.','Math.max(25, 10, 40, 5)', Math.max(25, 10, 40, 5), 'numbers = [20, 50, 5, -10, 525], Math.max(...numbers)', Math.max(...numbers));

console.log(container.children);


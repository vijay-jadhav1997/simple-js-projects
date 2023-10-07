



const fruits = ['mango', 'banana', 'Pinaple', 'apple', 'Papaya']
// console.log('0 =>', fruits);
let valued = Array.isArray(fruits);
// console.log('1 =>',valued);

let spliceMethod = fruits.splice(1,3);
// console.log('2 =>',spliceMethod);
// console.log('3 =>', fruits);
fruits.push(...spliceMethod);
// console.log('4 =>', fruits.length, fruits);

let sliceMethod = fruits.slice(1,3);
// console.log('5 =>',sliceMethod);
// console.log('6 =>', fruits);
// for (let i = 0; i < 10; i++) {
  
//   let shiftMethod = fruits.shift();
  // console.log('6 =>', shiftMethod);
  
// }

const numbers = new Array(1,2,3,4)
console.log('10. TypeOf (fruits)=> ', typeof (fruits));
console.log( '11. Is fruits array? =>',Array.isArray(fruits));

console.log('12. TypeOf (numbers)=> ', typeof (numbers));
console.log( '13. Is numbers array? =>',Array.isArray(numbers));

let newArray = Array(...numbers);

newArray.pop();
console.log('14. TypeOf (newArray)=> ', typeof (newArray));
console.log( '15. Is newArray array? =>',Array.isArray(newArray));
console.log(newArray);
console.log(numbers);
console.log(Math);




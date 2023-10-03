// 
function multiplyBy5(num) {
  return num*5;
}
multiplyBy5.power = 2;
let num5 = multiplyBy5(5);
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);
// console.log(typeof (multiplyBy5));
// console.log(multiplyBy5);
// console.log(num5);


// constructor function:
function createUser(userName, score) {
  this.userName = userName,
  this.score = score
}

// 'new' keyword:
let shreeRam = new createUser('shree_Ram', 25);
let shreekrushna = new createUser('shree_Krushna', 100);

createUser.prototype.increment = function(num) {
  return this.score += num;
}
createUser.prototype.prinMe = function() {
  return [this.userName, this.score];
}

// console.log(shreeRam);

// console.log(shreeRam.increment(5));
// console.log(shreekrushna.prinMe());

let myName = new String('Kapishwar   ')
let HariHar = 'Gopeshwar    ';
let jayMahakal = 'Mahadev  '
console.log(myName.length);
console.log(HariHar.length);
console.log(jayMahakal.length);

String.prototype.trueLength = function() {
  // console.log(this.trimEnd());
  return this.trimEnd().length;
}

console.log(myName.trueLength());
console.log(HariHar.trueLength());
console.log(jayMahakal.trueLength());


let myHeros1 = ['shreeDnyanoba', 'shreeTukoba', 'shreeNivrutti', 'shreeSopan', 'shreeMuktai'];

let myHeros2 = [ 'shreeNamdev', 'shreeJanabai', 'shreeMeerabai', 'shreeChokhoba', 'shreeNiloba'];

Array.prototype.addOneName = function (name) {
  // console.log(this);
  return this.push(name);
}

console.log(myHeros1.addOneName('Jay_BholeNath'));

myHeros2.addOneName('shreeVitthal');
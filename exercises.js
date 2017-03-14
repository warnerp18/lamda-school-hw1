//Do not change any of the function names

function multiplyByTen(num) {
  num = num * 10;
  return num;
  //return num after multiplying it by ten
  //code here
}

function subtractFive(num) {
  num = num - 5;
  return num;
  //return num after subtracting five
  //code here
}

function areSameLength(str1, str2) {
  if (str1.length == str2.length){
    return true;
  } else {
    return false;
  }
  //return true if the two strings have the same length
  //otherwise return false
  //code here
}

function areEqual(x, y) {
  //return true if x and y are the same
  //otherwise return false
  //code here

  if (x === y){
    return true;
  }else{
    return false;
  }
}

function lessThanNinety(num) {
  //return true if num is less than ninety
  //otherwise return false
  //code here
  if (num < 90 ) {
    return true;
  } else {
    return false;
  }
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  //otherwise return false
  //code here
  if (num > 50){
    return true; 
  }else{
    return false;
  }
}

function add(x, y) {
  //add x and y together and return the value
  //code here
  var value = x + y;
  return value;
}

function subtract(x, y) {
  //subtract y from x and return the value
  //code here
  var value = x - y;
  return value;
}

function divide(x, y) {
  //divide x by y and return the value
  //code here
  var value = x/y;
  return value;
}

function multiply(x, y) {
  //multiply x by y and return the value
  //code here
  var value = x*y;
  return value;
}

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  //code here

  var mod = x % y;
  return mod;
}

function isEven(num) {
  //return true if num is even
  //otherwise return false
  //code here
  if (num % 2 == 0){
    return true;
  } else {
    return false;
  }

}

function isOdd(num) {
  //return true if num is false
  //otherwise return false
  //code here
  if (num % 2 == 1){
    return true;
  } else {
    return false;
  }
}

function square(num) {
  //square num and return the new value
  //code here
  return num * num;
}

function cube(num) {
  //cube num and return the new value
  //code here
  var number = num * num * num;
  return number;
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  //code here
  return Math.pow(num, exponent);
}

function roundNumber(num) {
  //round num and return it
  //code here
  return Math.round(num);
}

function roundUp(num) {
  //round num up and return it
  //code here
  return Math.ceil(num);
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
  return str + '!';
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
  var name = firstName +' ' + lastName; 
  return name;
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!';
  //code here
  var value = 'Hello '+ name + '!';
  return value;
}

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  //code here
  return length * width;
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  //code here
var area = (base * height) / 2;
return area;

}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  //code here
  var circle = Math.round(Math.PI * (Math.pow(radius, 2)));
  return circle;
}

function getRectangularPrismVolume(length, width, height) {
  //return the area of the 3D rectangular prism given the length, width, and height
  //code here
  return length * width * height;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};

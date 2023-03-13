// 1. Write Reusable JavaScript with Functions
function reusableFunction(){
    console.log("Hi World");
  } 
  reusableFunction();
// **********************************************************************************************


  // 2. Passing Values to Functions with Arguments
  function functionWithArgs(a, b){
    console.log(a + b)
  }
  functionWithArgs(1, 2);
  // **********************************************************************************************


  //3. Return a Value from a Function with Return
  function timesFive(num) {
    return num * 5;
  }
  const answer = timesFive(5);
  // **********************************************************************************************


  //4. Global Scope and Functions
const myGlobal = 10;

function fun1() {
oopsGlobal = 5;
}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
// **********************************************************************************************

//5. Local Scope and Functions
function myLocalScope() {
  
const myVar = 3;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('inside myLocalScope', myVar)

console.log('outside myLocalScope', myVar);
// **********************************************************************************************

//6. Global vs. Local Scope in Functions
const outerWear = "T-Shirt";

function myOutfit() {
const outerWear ="sweater";
  return outerWear;
}
myOutfit();
// **********************************************************************************************

// 7. Understanding Undefined Value returned from a Function
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive(){
  sum = sum + 5;
}

addThree();
addFive();
 // **********************************************************************************************

// 8. Assignment with a Returned Value
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
// **********************************************************************************************

// 9. Stand in Line
function nextInLine(arr, item) {
  
  arr.push(item);
  return arr.shift();
  
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
// **********************************************************************************************

// 10. Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
  
if(wasThatTrue){
  return "Yes, that was true";
}
return "No, that was false";

}
// **********************************************************************************************

// 11. Comparison with the Equality Operator
function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
// **********************************************************************************************

// 12. Comparison with the Strict Equality Operator
function testStrict(val) {
  if (val === 7) { 
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
// **********************************************************************************************

// 13. Practice comparing different values
function compareEquality(a, b) {
  if (a === b) { 
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
// **********************************************************************************************
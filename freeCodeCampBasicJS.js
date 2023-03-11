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
 
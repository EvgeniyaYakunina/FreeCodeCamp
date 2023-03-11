// Write Reusable JavaScript with Functions
function reusableFunction(){
    console.log("Hi World");
  } 
  reusableFunction();
// **********************************************************************************************


  // Passing Values to Functions with Arguments
  function functionWithArgs(a, b){
    console.log(a + b)
  }
  functionWithArgs(1, 2);
  // **********************************************************************************************


  // Return a Value from a Function with Return
  function timesFive(num) {
    return num * 5;
  }
  const answer = timesFive(5);
  // **********************************************************************************************


  // Global Scope and Functions
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

// Local Scope and Functions
function myLocalScope() {
  
const myVar = 3;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('inside myLocalScope', myVar)

console.log('outside myLocalScope', myVar);

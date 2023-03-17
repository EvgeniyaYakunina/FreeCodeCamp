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

// 14. Comparison with the Inequality Operator
function testNotEqual(val) {
  if (val != 99) { 
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);
// **********************************************************************************************

//  15. Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
  if (val !== 17) { 
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
// **********************************************************************************************

// 16. Comparison with the Greater Than Operator
function testGreaterThan(val) {
  if (val > 100) {  
    return "Over 100";
  }

  if (val > 10) { 
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
// **********************************************************************************************

// 17. Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
  if (val >= 20) {  
    return "20 or Over";
  }

  if (val >= 10) {  
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
// **********************************************************************************************

// 18. Comparison with the Less Than Operator
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
// **********************************************************************************************

// 19. Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
// **********************************************************************************************

// 20. Comparisons with the Logical And Operator
function testLogicalAnd(val) {

  if (val <= 50 && val >= 25) { 
      return "Yes"; 
  }
  return "No";
}

testLogicalAnd(10);
// **********************************************************************************************

// 21. Comparisons with the Logical Or Operator
function testLogicalOr(val) {

  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}

testLogicalOr(15);
// **********************************************************************************************

// 22. Introducing Else Statements
function testElse(val) {
  let result = "";

  if (val > 5) {
    result = "Bigger than 5";
  }else{
    return "5 or Smaller"
  }
  return result;
}

testElse(4);
// **********************************************************************************************

// 23. Introducing Else If Statements
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }else if (val < 5) {
    return "Smaller than 5";
  } else {
  return "Between 5 and 10";
}
}
testElseIf(7);
// **********************************************************************************************
// 24. Logical Order in If Else Statements
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
// **********************************************************************************************

// 25. Chaining If Else Statements
function testSize(num) {
 
  if(num < 5){
    return "Tiny"
  } else if(num < 10){
    return "Small"
  }else if(num < 15){
    return "Medium"
  }else if(num < 20){
    return "Large"
  }else{
    return "Huge";
  }
}
testSize(7);


// 26. Golf Code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
 
  if (strokes == 1) {
    return names[0]
  } else if (strokes <= par - 2) {
    return names[1]
  } else if (strokes == par - 1) {
    return names[2]
  } else if (strokes == par) {
    return names[3]
  } else if (strokes == par + 1) {
    return names[4]
  } else if (strokes == par + 2) {
    return names[5]
  } else if (strokes >= par + 3) {
    return names[6]
  }
}

console.log(golfScore(5, 8));
// **********************************************************************************************

// 27. Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  let answer = "";

switch (val){
  case 1:
answer = "alpha";
    break;
    case 2:
answer = "beta";
    break;
    case 3:
answer = "gamma";
    break;
    case 4:
answer = "delta";
    break;
}
  return answer;
}
caseInSwitch(1);
// **********************************************************************************************

// 28. Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  let answer = "";

switch (val){
  case "a":
  answer = "apple";
  break;
  case "b":
  answer = "bird";
  break;
  case "c":
  answer = "cat";
  break;
  default:
  answer = "stuff";
  break;
}
  return answer;
}

switchOfStuff(1);
// **********************************************************************************************


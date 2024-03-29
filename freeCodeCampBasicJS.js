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

// 29. Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  let answer = "";
 
switch(val){
  case 1: 
  case 2: 
  case 3: 
    answer = "Low";
    break;
  case 4:
  case 5:
  case 6:
    answer = "Mid";
    break;
  case 7:
  case 8:
  case 9:
    answer = "High";
    break; 
}
  return answer;
}
sequentialSizes(1);
// **********************************************************************************************

// 30. Replacing If Else Chains with Switch
function chainToSwitch(val) {
  let answer = "";

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
}
  return answer;


chainToSwitch(7);
}
// **********************************************************************************************

// 31. Returning Boolean Values from Functions
function isLess(a, b) {

  return a < b;
}

isLess(10, 15);
// **********************************************************************************************

// 32. Return Early Pattern for Functions
function abTest(a, b) {
 
if (a < 0 || b < 0) {

return undefined;
}
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
// **********************************************************************************************

// 33. Counting Cards
let count = 0;

function cc(card) {

switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  var holdbet = 'Hold'
  if (count > 0) {
    holdbet = 'Bet'
  }

  return count + " " + holdbet;

}

cc(2); cc(3); cc(7); cc('K'); cc('A');
// **********************************************************************************************
// 34. Build JavaScript Objects
const myDog2 = {
 
"name": "Chappi",
"legs": 4,
"tails": 1,
"friends": ["Oggy", "Penny"]
};
// **********************************************************************************************

// 35. Accessing Object Properties with Dot Notation
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
const hatValue = testObj.hat;  
const shirtValue = testObj.shirt; 
// **********************************************************************************************

// 36. Accessing Object Properties with Bracket Notation
const TestObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
const entreeValue = TestObj["an entree"]; 
const drinkValue = TestObj["the drink"]; 
// **********************************************************************************************

// 37. Accessing Object Properties with Variables
const myObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
const playerNumber = 16; 
const player = myObj[playerNumber]; 
// **********************************************************************************************

// 38. Updating Object Properties
const myCat = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myCat.name = "Happy Coder";
// **********************************************************************************************

// 39. Add New Properties to a JavaScript Object
const myDog1 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog1.bark = "woof";
// **********************************************************************************************

// 40. Delete Properties from a JavaScript Object
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog.tails;
// **********************************************************************************************

// 41. Using Objects for Lookups
function phoneticLookup(val) {
  let result = "";

  const lookup = {
   "alpha": "Adams",
   "bravo": "Boston",
   "charlie":"Chicago",
   "delta":"Denver",
   "echo": "Easy",
   "foxtrot": "Frank"
  };
 result = lookup[val];

  return result;
}

phoneticLookup("charlie");
// **********************************************************************************************

// 42. Testing Objects for Properties
function checkObj(obj, checkProp) {
 
  if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  }else{
  return "Not Found";
  }

}
// **********************************************************************************************

// 43. Manipulating Complex Objects
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
  "artist": "Sam",
    "title": "ello",
    "release_year": 1990,
    "formats": [
      "CD",
      "8T",
      "LP"
    ]
  }
];
// **********************************************************************************************

// 44. Accessing Nested Objects
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];
// **********************************************************************************************

// 45. Accessing Nested Arrays
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];
// **********************************************************************************************

// 46. Record Collection
/*You are given an object literal representing a part of your musical album collection. 
Each album has a unique id number as its key and several other properties. 
Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, 
containing the musical album collection, an id, a prop (like artist or tracks), and a value. 
Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire record collection object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty 
array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the 
album's existing tracks array.
If value is an empty string, delete the given prop property from the album.
Note: A copy of the recordCollection object is used for the tests.
*/
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
if(prop !== "tracks" && value !== ""){
  records[id][prop] = value;
}else if(prop === "tracks" && records[id].hasOwnProperty("tracks") === false){
  records[id][prop] = [value];
}else if(prop === "tracks" && value !== ""){
  records[id][prop].push(value);
}else if(value === ""){
  delete records[id][prop];
}
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
// **********************************************************************************************

// 47. Iterate with JavaScript While Loops
const my1Array = [];

// Only change code below this line
let i = 5;
while(i >= 0) {
  my1Array.push(i);
  i--;
}
// **********************************************************************************************

// 48. Iterate with JavaScript For Loops
let myArray = [];

for(let i = 1; i < 6; i++){
  myArray.push(i);
}
// **********************************************************************************************

// 49. Iterate Odd Numbers With a For Loop
const myArray2 = [];

for(let i = 1; i < 10; i += 2){
  myArray2.push(i);
}
// **********************************************************************************************

// 50. Count Backwards With a For Loop
const myArray3 = [];

for(let i = 9; i > 0; i -=2){
  myArray3.push(i);
}
// **********************************************************************************************

// 51. Iterate Through an Array with a For Loop
const myArr = [2, 3, 4, 5, 6];

 var total = 0;
for(let i = 0; i < myArr.length; i++){
 total += myArr[i];
}
// **********************************************************************************************

// 52. Nesting For Loops
function multiplyAll(arr) {
  let product = 1;
  
for(let i = 0; i < arr.length; i++){
  for(let j = 0; j < arr[i].length; j++){
    product *= arr[i][j];
  }
}
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
// **********************************************************************************************
// 53. Iterate with JavaScript Do...While Loops
const myArray4 = [];
let j = 10;

do{
  myArray.push(j);
  j++;
} while (j < 11); 
// **********************************************************************************************

// 54. Replace Loops using Recursion
function sum(arr, n) {

if(n <= 0){
  return 0;
}else{
  return sum(arr, n - 1) + arr[n - 1];
}
}
// **********************************************************************************************

// 55. Profile Lookup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
for(let i = 0; i < contacts.length; i++){
  if(name === contacts[i].firstName){
    return contacts[i][prop] || "No such property";
  }
}
return "No such contact";
  // Only change code above this line
}

lookUpProfile("Akira", "likes");
// **********************************************************************************************

// 56. Generate Random Fractions with JavaScript
function randomFraction() {

  return Math.random();
}
// **********************************************************************************************

// 57. Generate Random Whole Numbers with JavaScript
function randomWholeNum() {

  return Math.floor(Math.random() * 10);
}
// **********************************************************************************************

// 58. Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}
// **********************************************************************************************
 // 59. Use the parseInt Function
 function convertToInteger(str) {
  return parseInt(str);
  }
  
  convertToInteger("56");
  // **********************************************************************************************

  // 60. Use the parseInt Function with a Radix
  function convertToInteger(str) {
    return parseInt(str,2)
    }
    
    convertToInteger("10011");
// **********************************************************************************************

// 61. Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
  }
  
  checkEqual(1, 2);
// **********************************************************************************************

// 62. Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
  return (num > 0) ? "positive"
    : (num < 0) ? "negative"
    : "zero";
  }
  
  checkSign(10);
// **********************************************************************************************

// 63. Use Recursion to Create a Countdown
function countdown(n){
  if(n < 1){
    return [];
  }else{
const countArray = countdown(n - 1);
countArray.unshift(n);
  return countArray;
}
}
// **********************************************************************************************

// 64. Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  if(endNum < startNum){
  return [];
  }else{
    const rangeArray = rangeOfNumbers(startNum, endNum - 1);
    rangeArray.push(endNum);
    return rangeArray;
  }
};
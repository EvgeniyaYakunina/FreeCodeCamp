// 1. Using the Test Method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
// **********************************************************************************************

// 2. Match Literal Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
let result1 = waldoRegex.test(waldoIsHiding);
// **********************************************************************************************

// 3. Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result2 = petRegex.test(petString);
// **********************************************************************************************

// 4. Ignore Case While Matching
let myString1 = "freeCodeCamp";
let fccRegex = /freeCodeCamp|FreeCodeCamp|FreecodeCamp|FreeCodecamp/i; // Change this line
let result3 = fccRegex.test(myString1);
// **********************************************************************************************
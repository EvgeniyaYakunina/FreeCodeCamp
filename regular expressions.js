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

// 5. Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result4 = extractStr.match(codingRegex);
// **********************************************************************************************

// 6. Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; 
let result5 = twinkleStar.match(starRegex);
// **********************************************************************************************

// 7. Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
let result6 = unRegex.test(exampleStr);
// **********************************************************************************************

// 8. Match Single Character with Multiple Possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; //
let result7 = quoteSample.match(vowelRegex);
// **********************************************************************************************

// 9. Match Letters of the Alphabet
let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; 
let result8 = quoteSample1.match(alphabetRegex);
// **********************************************************************************************
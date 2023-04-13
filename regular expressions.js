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

// 10. Match Numbers and Letters of the Alphabet
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex2 = /[h-s2-6]/ig;
let result9 = quoteSample2.match(myRegex2);
// **********************************************************************************************

// 11. Match Single Characters Not Specified
let quoteSample3 = "3 blind mice.";
let myRegex3 = /[^1-9aeiou]/ig; 
let result10 = quoteSample3.match(myRegex3); 
// **********************************************************************************************

// 12. Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex4 = /s+/ig; // Change this line
let result11 = difficultSpelling.match(myRegex4);
// **********************************************************************************************

// 13. Match Characters that Occur Zero or More Times
let chewieRegex = /Aa*/;
let result12 = chewieQuote.match(chewieRegex);
// **********************************************************************************************

// 14. Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex5 = /<h[a-z]*?1>/; 
let result13 = text.match(myRegex5);
// **********************************************************************************************

// 15. Find One or More Criminals in a Hunt
let reCriminals = /C+/;
// **********************************************************************************************

// 16. Match Beginning String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let result14 = calRegex.test(rickyAndCal);
// **********************************************************************************************

// 17. Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result15 = lastRegex.test(caboose);
// **********************************************************************************************

// 18. Match All Letters and Numbers
let quoteSample4 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
let result16 = quoteSample4.match(alphabetRegexV2).length;
// **********************************************************************************************

// 19. Match Everything But Letters and Numbers
let quoteSample5 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result17 = quoteSample5.match(nonAlphabetRegex).length;
// **********************************************************************************************

// 20. Match All Numbers
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result18 = movieName.match(numRegex).length;
// **********************************************************************************************
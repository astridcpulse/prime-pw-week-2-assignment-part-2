// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// we make a string variable called name and set it equal to Dane
// We check if name is equal to Mary, and if it is equal then we log 'Hi, Mary!' in the console
// Name is not equal to Mary, so we log 'How do you do?' in the console
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// we make an undefined variable named secret, and we make a number variable named code that equals 123
// We check to see if code equals 123, and if it does then secret becomes defined as 'super' and the code value of 123 becomes multiplied by 2, making code equal 246
// If at this point code equals greater than 250, then the variable secret becomes defined as 'duper' . This portion of code will not run under the current initial value of code being 123
// The secret variable is logged to the console, displaying 'super' in the console

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// we make a boolean variable named isStudent and set it equal to true, we make a number variable named age and set it equal to 34, we make another number variable named zip and set it equal to 55407
// we check to see if the value of isStudent is true and also if the value of zip is greater than 8000. If these conditions are met, then the phrase 'you're a student on the West Coast!' is logged to the console
// if the previous conditions were not met, then we check to see if the value of isStudent is false or if value of age is less than thirty. If either of those conditions are met then the phrase 'What are your hobbies?' is logged to the console
//if the previous conditions were not met, then we check to see if the value of isStudent is true. If this condition is met then the phrase 'Welcome to Prime!' is logged in the console
//if none of the conditions in any of the previous if statements are met, then the phrase 'How about the weather?' is logged to the console
//Because of the initial set values of the variables we created, the console will log 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne should be set to 'blue' and colorTwo should be 'red' as per the description, the code has those two values for the string variables swapped

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - the description states that if mix === true, then both colorOne and colorTwo should be set to purple, but the code only redefines the string variable colorOne

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*

let temp = 40;
const time = 4;

// FIX - the description describes a conditional with an and (&&) qualifier while the code has an or (||)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - if age is greater than or equal to minAge it should display 'enter', but the code is instead logging 'no entry' if that condition is met

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/


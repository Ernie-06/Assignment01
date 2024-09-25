// Here are the identifiers converted to Camel Case notation:

let someMonth 
function theMonth() {}
let currentMonth
let summerMonth
let myLibraryFunction

// numeric literal expression 
let age = 25;
// string literal expression
let greeting = "Hello, world!";
// boolean literal expression
let isActive = true;
// null literal expression
let value = null;
// Complex or Variable Expressions
let anExpression = 3 + 6
let a = 10;
// Here are the declared variables using Camel Case and Hungarian Notation:

let strFirstName;      // String for First Name
let strLastName;       // String for Last Name
let strAddress;        // String for Address
let strCity;           // String for City
let strState;          // String for State
let strZipCode;        // String for Zip Code
let intYourAge;        // Integer for Your Age
let strReferralSource; // String for Referral Source
let boolMayWeContactYou; // Boolean for May We Contact You
//Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.

strFirstName = "Bob";
strLastName = "Johnson";
intYourAge = 25;

// Create a variable Add a number and a string and display the coerced result in the browser’s console window.
let number = 42;
let string = " oranges";
let result = number + string; 
console.log(result);
//Create two variables.
//For the first variable, add a Boolean and a string and display the coerced result.
//For the second variable, add a number and a Boolean and display the coerced result.
// First variable: Boolean and string
let boolValue = true;
let strValue = " is the answer";
let result1 = boolValue + strValue; 
console.log(result1); 

// Second variable: Number and Boolean
let numberValue = 5;
let boolValue2 = false;
let result2 = numberValue + boolValue2; 
console.log(result2); 
// Is the following string literal valid? If not, how would you fix it?
let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
console.log(someString);
//Create a variable that produces a null value in the console window.Then, create a variable that produces an undefined value in the console window.
let c = 200; 
let p = null; 
p = null; 

alert(c);
alert(p); 
//Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:
let firstName = "Zak"; 
let lastName = "Ruvalcaba";
alert("Hello " + firstName + " " + lastName + ", welcome to the JavaScript class!");
//Declare a variable called name and set it equal to your name.Substitute your name in the previous alert string with the variable instead.
var name = "Zak Ruvalcaba";
var alertMessage = "Hello " + name + ".\nWelcome to the JavaScript class!";
alert(alertMessage);
//Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable
// Prompt the user for their name and store it in the variable
var name = prompt("Please enter your name:");
var course = prompt("Please enter the class you are taking:");
var alertMessage = "Hello " + name + ".\nWelcome to the " + course + " class!";
alert(alertMessage);

//Declare a variable called x and assign it a value of 10.
//Declare a variable called y and assign it a value of 20.
//Display the sum of those two numbers in the console window.
let x = 10;
let y = 20;
console.log(x + y);

//Declare a variable called x and assign it a value of 20.
//Add and assign 20 to that variable and display the result in the console window.
//The result should be 40.
x = 20; 
x += 20; 
console.log(x); 

// Declare variable x and assign it a value of 20
// Multiply x by 5 and assign the result back to x
x = 20;
x *= 5;
console.log(x);
// Declare variable x as the remainder of 20 divided by 3
 x = 20 % 3; 
x /= 1; 
console.log(x); 

//Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
a = 5;
b = 10;
console.log(a < b && b > 5); 

//Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.
 c = 15;
 d = 10;
console.log(c <= d || d === 5); 

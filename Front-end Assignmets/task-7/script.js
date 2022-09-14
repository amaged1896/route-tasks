/*
1- Write a program that allow to user enter number then print it
// first example

var userName = window.prompt("Enter your name: ");
console.log(userName);

// second example ===> (look to HTML)

document.getElementById("myButton").onclick = function () {
    var myName = document.getElementById("myText").value;
    console.log(myName);
};

 */

/*
2- Write a program that take number from user then print yes if that number can divide by 3 
and 4 otherwise print no

var myNum = window.prompt("enter your number:");
if (myNum % 4 == 0 && myNum % 3 == 0) {
  console.log("Yes");
} else {
  console.log("No");
}

*/

/*
3- Write a program that allow the user to insert 2 integers then print the max
var userOne = window.prompt("Enter Your First Number:");
var userTwo = window.prompt("Enter Your Second Number:");

if (userOne > userTwo) {
  console.log(userOne);
} else {
  console.log(userTwo);
}

*/
/*
4- Write a program that allow the user to insert an integer then print negative if it is negative number otherwise print positive
var userNumber = window.prompt("Enter Your Number:");

if (userNumber < 0) {
  console.log("Negative");
} else {
  console.log("Positive");
}

*/

/*
5- Write a program that take 3 integers from user then print the max 
element and the min element

var userOne = window.prompt("Enter Your Number:");
var userTwo = window.prompt("Enter Your Number:");
var userThree = window.prompt("Enter Your Number:");

if ((userOne > userTwo) & (userOne > userThree)) {
  console.log(userOne);
}
if ((userTwo > userOne) & (userTwo > userThree)) {
  console.log(userTwo);
}
if ((userThree > userOne) & (userThree > userTwo)) {
  console.log(userThree);
}
if ((userOne < userTwo) & (userOne < userThree)) {
  console.log(userOne);
}
if ((userTwo < userOne) & (userTwo < userThree)) {
  console.log(userTwo);
}
if ((userThree < userOne) & (userThree < userTwo)) {
  console.log(userThree);
}

*/

/*

6- Write a program that allows the user to insert
integer number then check if a number is oven or odd

var userNumber = window.prompt("Enter Your Number:");

if (userNumber % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

*/

/*
8- write a program that take character from user then if it is vowel chars (a,e,i,o,u)
function vowelOrConsonant(x) {
  var x = window.prompt("Enter Your Character:");
  if (
    x == "a" ||
    x == "e" ||
    x == "i" ||
    x == "o" ||
    x == "u" ||
    ) {
    console.log("Consonant");
  } else {
    console.log("Vowel");
  }
}
vowelOrConsonant();

*/

/*
9- write a program that allows user to insert
integer then print all numbers between 1 to
that's number

var userNumber = +prompt("enter your userNumber:");
for (var i = 1; i <= userNum; i++) {
  console.log(i);
}
*/

/*
10- Write a program that allows user to insert integer then print a multiplication table up to 12.


var userNum = +prompt("enter your userNum ?");
for (var i = 1; i <= 12; i++) {
  console.log(i * userNum);
}
*/

/*
11- write a program that allows to user to insert number then print all even numbers between 1 to this number

var userNum = +prompt("enter your userNum ?");
for (var i = 2; i <= userNum; i += 2) {
  console.log(i);
}
*/
/*
12 - Write a program that take two integers then print the power
var userNum1 = +prompt("enter your userNum ?");
var userNum2 = +prompt("enter your userNum ?");
{
  console.log(Math.pow(userNum1, userNum2));
}

*/

/*
12-Write a program to enter marks of five subjects and calculate total, average and 
percentage.

var userNum1 = +prompt("Enter Your userNum:");
var userNum2 = +prompt("Enter Your userNum:");
var userNum3 = +prompt("Enter Your userNum:");
var userNum4 = +prompt("Enter Your userNum:");
var userNum5 = +prompt("Enter Your userNum:");
console.log(userNum1 + userNum2 + userNum3 + userNum4 + userNum5);
console.log((userNum1 + userNum2 + userNum3 + userNum4 + userNum5) / 500);
console.log(
  ((userNum1 + userNum2 + userNum3 + userNum4 + userNum5) / 500) * 100
);

*/

/*
13- write a program to input month number 
and print number of days in that month. 

var monthNum = Number ( window.prompt('enter your month Num ?'));
if (monthNum == 1 || monthNum == 3 || monthNum == 5 || monthNum == 7 || monthNum == 8 || monthNum == 10 || monthNum == 12){
    console.log(31); 
}
else if (monthNum == 4 || monthNum == 6 || monthNum == 9 || monthNum == 11){
    console.log(30);
}
else if (monthNum == 2 ){
    console.log(29);
}
else
{
    console.log("Incorrect")
}

// Second Example

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
console.log(daysInMonth(7, 2009));
*/

/*
14- write a program to input marks of five subjects
physics,chemistry,biology,mathematics and computer,
find percentage and grade 

var userPercentage1 = +prompt("Physics Grades :");
var userPercentage2 = +prompt("Chemistry Grades :");
var userPercentage3 = +prompt("Biology Grades :");
var userPercentage4 = +prompt("Mathematics Grades :");
var userPercentage5 = +prompt("Computer Grades :");

if (
  ((userPercentage1 + userPercentage2 + userPercentage3 + userPercentage4 + userPercentage5) / 500) * 100 >=
  90
) {
  console.log("Grad A");
} else if (
  ((userPercentage1 + userPercentage2 + userPercentage3 + userPercentage4 + userPercentage5) / 500) * 100 >=
  80
) {
  console.log("Grad B");
} else if (
  ((userPercentage1 + userPercentage2 + userPercentage3 + userPercentage4 + userPercentage5) / 500) * 100 >=
  70
) {
  console.log("Grad C");
} else if (
  ((userPercentage1 + userPercentage2 + userPercentage3 + userPercentage4 + userPercentage5) / 500) * 100 >=
  60
) {
  console.log("Grad D");
} else if (
  ((userPercentage1 + userPercentage2 + userPercentage3 + userPercentage4 + userPercentage5) / 500) * 100 >=
  40
) {
  console.log("Grad F");
} else if (
  ((userPercentage1 + userPercentage2 + userPercentage3 + userPercentage4 + userPercentage5) / 500) * 100 <
  40
) {
  console.log("Grad F");
}
*/

/*
15- Write a program to print total number of days in month

var monthNum =+prompt("enter your month Num ?");
switch (monthNum) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log(31);
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log(30);
    break;
  case 2:
    console.log(28);
    break;
  default:
    console.log("Incorrect");
}
*/

/*
16- Write a program to check whether an alphabet is vowel or consonant

var chars = prompt("enter your chars ?");
switch (chars) {
  case "a":
  case "e":
  case "l":
  case "o":
  case "u":
    console.log("vowel");
    break;
  default:
    console.log("consonant");
}
*/

/*
17- Write a program to find maximum between two numbers 

var userNum1 = +prompt("enter your userNum ?");
var userNum2 = +prompt("enter your userNum ?");

switch (true) {
  case userNum1 > userNum2:
    console.log(userNum1);
    break;
  case userNum2 > userNum1:
    console.log(userNum2);
    break;
}

*/

/*
// 18- Write a program to check whether a number is even or odd

var userNumber = prompt("Enter Your Grades :");
switch (userNumber % 2) {
  case 0:
    console.log("Even");
    break;
  default:
    console.log("odd");
    break;
}

*/

//19- Write a program to check whether a number is positive or negative or zero

// var userNum = prompt("Enter number");

// switch (true) {
//   case userNum > 0:
//     console.log("positive");
//     break;
//   case userNum == 0:
//     console.log("zero");
//     break;
//   default:
//     console.log("negative");
// }

// 20- write a program to create simple calculator

// var mark = prompt("Enter Your mark operation:");
// var num1 = +prompt("Enter Your number:");
// var num2 = +prompt("Enter Your number:");

// switch (mark) {
//   case "+":
//     console.log(num1 + num2);
//     break;
//   case "-":
//     console.log(num1 - num2);
//     break;
//   case "/":
//     console.log(num1 / num2);
//     break;
//   case "*":
//     console.log(num1 * num2);
//     break;
// }

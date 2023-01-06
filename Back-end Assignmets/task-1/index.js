// 1- Create a function that takes the age in years and returns the age in days.

// Solution
// function calcDays(years) {
// 	return years * 365;
// }
// console.log(calcDays(26));

// 2- Create a function that takes an array of numbers an returns the smallest number in the set

// Solution
// let numbers = [5, 9, 3, 20, 15, 31, 64];
// function sortNumbers() {
// 	const minNum = Math.min(...numbers);
// 	console.log(minNum);
// }
// sortNumbers();

/*
 3- Create a function that takes any non-negative number as an array and return it with its digits in descending order.
  Descending order is when you sort from highest to lowest.
  */

// Solution
// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// function sortNumbers(arr) {
// 	return arr.reverse();
// }
// console.log(sortNumbers(x));
// Solution
// function descendingOrder(num) {
// 	return num.toString().split('').sort().reverse().join('');
// }

// console.log(descendingOrder(-10));

// another Solution

// let x = [1, 22, 13, 4, 5, 60, 7, 18, 9, 15, 101, 120, 103, 14, 15];
// function sortDescending(arr) {
// 	return arr.sort((x, y) => y - x);
// }
// console.log(sortDescending(x));

// 4- Create a function that takes an array of numbers and returns the average of this numbers.

// Solution
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// function getAvg() {
//     let average = array.reduce((x, y) => x + y) / array.length;
//     console.log(average);
// }

// getAvg();

/* 5- what is the output of 
Console.log([] == []);
Console.log({} == {});
And explain your answer

// Solution
If you intend to write it this way (Console) it won't work

But if you didn't mean it , it will log (false) because every array or object of those have a different
hexadecimal number in ram
*/

// 6- what is the output of this code with explanation

// function main() {
// 	console.log('A');
// 	setTimeout(function print() {
// 		console.log('B');
// 	}, 0);
// 	console.log('C');
// }
// main();

// Solution
/*
Asynchronous circuits are usually faster than synchronous circuits because they are free running 
and do not depend on the time
*/

// 7- what is the output of this code with explanation

// var num = 8;
// var num = 10;
// console.log(num);

// Solution
// output will be 10 because when we use var we can redeclare the variables

// 8- what is the output of this code with explanation
// function sayHi() {
// 	console.log(name);
// 	console.log(age);
// 	var name = 'Ayush';
// 	let age = 21;
// }
// sayHi();
// Solution
// Cannot access a property before initialization (Hoisting)

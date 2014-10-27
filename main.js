// use an alert to check that your JS file is correctly linked to your HTML file

alert("hello world!"); // delete this later

// use Chrome Console instead of terminal

// strings

"how's it going?"; // simple string
var greeting = "how's it going?"; // save a string to a variable
var name = "Anna"; // another variable
"hey" + " " + name + ", " + greeting; // string concatenation

// naming convention for variables: camelCase with *lowercase* first letter

// numbers

10+2; // basic functions
10-2;
10*2;
10/2;

9/2; // numbers are stored as floats by default
9/0; // if you divide by zero, you DON'T get an error, you get Infinity... which means your code will still run, and you need to check afterwards if the result makes sense

// converting datatypes

typeof(10); // check which datatype something is
typeof("10");

    // must use () when calling a function!!!

num = 10;
num.toString(); // number to string
parseFloat("10"); // string to number

// getting some user input

prompt("enter a number"); // popup window
num1 = prompt("enter a number"); // save user's input - always a string

// assignment: in a new js file, write a short program to prompt the user for three inputs (string or number) and then output the result of the mad lib via an alert

// example mad lib: "Let's build a " + word_1 + "! It can have lots of " + word_2 + "and live in a " + word_3;

// why doesn't 10.toString(); work?
  // because 10 is not yet an object, it's a primitive
  // there are 5 primitives in js - strings, numbers, undefined, NaN, null

// sample solution - see other file

// arrays

// pretty much same as ruby

var numArray = [2,3,4];
var myArray = ["anna", "david"]
myArray[0] // get last element
myArray.push("dan"); // add new element to end
myArray.length; // length of array
myArray.indexOf("david"); get index of something

var names = ["John", "Paul", "Jones"];
names.join();
names.join(' ');

myArray.concat(names); // different from ruby; concat is an array method

// hashes

// hashes are actually objects in js
// instead of key-value pairs, you have properties and values

var david = {name: "David", age: 32} // don't have symbols
david.age // to get inside an object, use . notation, like a method (can use david["age"] but don't)

// comparators

// always use ===
// == tries to convert first, which leads to unpredictable results

1.0 == '1.0' // true
1.0 === '1.0' // false

// sometimes order matters and you get weird stuff

'' == '0' // false
0 == '' // true

// conditionals

var num = 3;

if (num === 3) {
  console.log ('Lucky number three');
} else {
  console.log ('something not three');
}; // semicolon is optional

var weather = 'sunny';

if weather === 'sunny' {
  console.log(' so nice outside');
} else if (weather === 'cloudy') {
  console.log('It could be better');
} else {
  console.log('yay');
};

// iterate over arrays

var names = ["anna", "david", "dan"];
var capitalizeFirstLetter = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

names.forEach(capitalizeFirstLetter); // passing in as an argument the entire code of the function called capitalizeFirstLetter

// forEach executes the function once for every element, and the returned value is always undefined - useful for console.log only

names.map(capitalizeFirstLetter); // actually returns the new array

// javascript gotchas

// call a method with ();
// in a callback, pass the name of the function, don't invoke it
// always use ;
// always use ===
// if statement needs ()
// floating point comparison is unpredictable! 0.1 + 0.2 === 0.3 => false! can use > or >= but not ===


// writing functions

// use var to keep the scope of the function local to where you want - by itself it doesn't matter, but when you're namespacing within an app it does matter, otherwise will be global by default

var square = function(number) {
  return number*number; // must use literal return always
}

var cube = function(number) {
  return Math.pow(number, 3);
}






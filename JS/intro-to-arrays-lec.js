"use strict";
console.log("Welcome to intro to arrays");
/* ***************************************************************
* 							INTRO TO ARRAYS
*************************************************************** */


// An array is a data structure that holds an ordered list of items
// Each slot in a JavaScript array can hold any type of data



/* ***************************************************************
* 					DECLARING AN ARRAY
*************************************************************** */
// We declare an array with square brackets ==> []

// an empty array ==> []

//An array with one element ==> [1]

// An array with 5 elements ==> [1, 2, 3, 4, 5]

// An array with 3 elements all of different types ==> 	["one", 42, [8, 9, 10]]
// Notice that the array above does *not* have 5 elements, rather the last element is itself an array with 3 elements in it

//TODO TOGETHER: Declare an empty array set equal to the variable `pies` - then console.log `pies`

 var pies = [];
// console.log(pies);


//TODO TOGETHER: Set the following array equal to `pies` - then console.log `pies`
// ["apple", "cherry", "key lime", "huckleberry"];

pies = ["apple", "cherry", "key lime", "huckleberry"];
// console.log(pies);

// TODO TOGETHER: Set the following array equal to variable called `shapes`. Console.log the variable
//  ['square', 'rectangle', 'circle', 'triangle'];

var shapes = ['square', 'rectangle', 'circle', 'triangle'];
// console.log(shapes);


// TODO: Set the following array equal to a variable called `instructors` - then console.log the variable
//  ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"]

var instructors = ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"];
// console.log(instructors);


// TODO: Set the following array equal to a variable called `daysOfTheWeek` - then console.log the variable
//  ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

var daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
// console.log(daysOfTheWeek);


// TODO: create an array of favorite foods and set to a variable called `favoriteFoods` - then console.log the variable

var favoriteFoods = ["cereal with water", "cold chinese food", "luke warm hot pockets", "Soggy bagels", "straight barbecue sauce"];
// console.log(favoriteFoods);


/* ***************************************************************
* 					COUNTING AN ARRAY
*************************************************************** */

//We can also count the length of an array by using the `.length` property

// TODO TOGETHER: Log the length of shapes array

// console.log("The length of the shapes array is " + shapes.length);

// TODO: console.log the length of the instructors array

// console.log("The length of the instructors array is " + instructors.length);

// TODO: console.log the length of the daysOfTheWeek array

// console.log("The length of the daysOfTheWeek array is " + daysOfTheWeek.length);

// TODO: console.log the length of the favoriteFoods array

// console.log("The length of the favoriteFoods array is " + favoriteFoods.length);


/* ***************************************************************
* 				ACCESSING ARRAY ELEMENTS
*************************************************************** */
// ** NOTE ** Arrays are zero-indexed, which means the first slot in an array is 0.

// TODO TOGETHER: What do we expect the following to output?
// 	console.log(shapes[0]);
// 	console.log(shapes[1]);
// 	console.log(shapes[2]);
// 	console.log(shapes[3]);
// 	console.log(shapes[4]);

// TODO: console.log each element of the instructors array

// console.log(instructors[0]);

// TODO: console.log the first three elements of the daysOfTheWeek array

// for (var i = 0; i < 3; i++) {
//     console.log(daysOfTheWeek[i]);
// }

// TODO: console.log the first three elements of the favoriteFoods array

// for (var i = 0; i < 3; i++) {
//     console.log(favoriteFoods[i]);
// }

// TODO: create a function called `returnLastElement` that accepts an array and returns the last element of that array


// function returnLastElement(arr) {
//  return(arr[arr.length - 1]);
// }
//
// console.log(returnLastElement(instructors));

/* ***************************************************************
* 					ITERATING ARRAYS
*************************************************************** */
//  TODO TOGETHER: Log each element of the shapes array

// console.log(shapes[0]);
// console.log(shapes[1]);
// console.log(shapes[2]);
// console.log(shapes[3]);


// TODO TOGETHER: Using a for loop, iterate through the shapes array and log each shape

// for (var i = 0; i < shapes.length; i++) {
//     console.log(shapes[i]);
// }

// TODO TOGETHER: Alert "that's my favorite shape!" when your favorite shape is iterated over in the loop.

// var favShape = "triangle";
//
// for (var i = 0; i < shapes.length; i++) {
//     if (shapes[i] === favShape) {
//         alert(shapes[i] + " is my favorite shape!")
//     } else console.log(shapes[i]);
// }



// TODO: What happens if we change var i = 1? or var i = 2;

// it would start at index 1 or index 2, not at beginning of array

// TODO: What are benefits of using loops to iterate?

//don't need to manually log each element, making the function more dynamic and usable

// TODO: How does the loop know when to stop iterating?

//the condition, using i < shapes.length ensures the function stops when each desired element in the array has been addressed

// TODO: Using a for loop, iterate through the instructors array and console.log each instructor

// for (var i = 0; i < instructors.length; i++) {
//     console.log(instructors[i]);
// }

// TODO: Using a for loop, iterate through the daysOfTheWeek array and console.log each day of the week

// for (var i = 0; i < daysOfTheWeek.length; i++) {
//     console.log(daysOfTheWeek[i]);
// }

// TODO: Using a for loop, iterate through the favoriteFoods array and console.log each favorite food

// for (var i = 0; i < favoriteFoods.length; i++) {
//     console.log(favoriteFoods[i]);
// }

// TODO: Refactoring the instructor loop, alert "hey, I know <INSTRUCTOR NAME HERE>" if you have had class with that instructor. If you have not had class with that instructor, alert "I haven't had class with <INSTRUCTOR NAME HERE> yet!"

// var instructorsIveHad = ["sophie", "vivian", "david", "justin"];

// var instructorsIveNotHad = ["daniel" , "fernando", "trant"];

// for (var i = 0; i < instructors.length; i++) {
//     if (instructors[i] === "sophie" || instructors[i] === "vivian" || instructors[i] === "david" || instructors[i] === "justin") {
//         alert(instructors[i] + " has taught me!!!")
//     } else alert(instructors[i] + " has NOT taught me yet")
// }



/* ***************************************************************
* 						FOR EACH ARRAY
*************************************************************** */

// TODO TOGETHER: Using a for each loop, console.log each shape from the shapes array

// var i = 0;
shapes.forEach(function(shape, index, array) {
    console.log(shape);
});

// TODO TOGETHER: Using a for each loop, console.log each element from the following array:
var pies = ["apple", "cherry", "key lime", "huckleberry"];

// var i = 0;
pies.forEach(function(pie) {
    console.log(pie);
});

// TODO: Using a for each loop, iterate through the instructors array and console.log each instructor
// var i = 0;
instructors.forEach(function(instructor) {
    console.log(instructor);
});

// TODO: Using a for each loop, iterate through the daysOfTheWeek array and console.log each day of the week

// var i = 0;
daysOfTheWeek.forEach(function(dayOfTheWeek) {
    console.log(dayOfTheWeek);
});

// TODO: Using a for each loop, iterate through the favoriteFoods array and console.log each favorite food

// var i = 0;
favoriteFoods.forEach(function(favoriteFood) {
    console.log(favoriteFood);
});

/**
 * TODO:
 * Refactor your above code to use a `forEach` loop
 */

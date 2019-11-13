"use strict";


// a callback function is a function, perhaps anonymous, that is passed into a method
/*********************************************
 *              .map
 ******************************************** */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//TO DO TOGETHER: Let's map through the array of number and add 1 to each
// element. Console log the new copy of the array.

// let newNumbers = [];
// numbers.forEach(function (number){
//     return newNumbers.push(number + 1);
// });


let newArray = numbers.map(num => num + 1);

// console.log(`num + 1 is: ${newArray}`);
// console.log(newNumbers);
//TO DO: Map through the new array of numbers and this time multiply each
// element by 3. Console log the new copy.

let newArray2 = newArray.map(num => num * 3);

// console.log(`those numbers * 3 is: ${newArray2}`);

/*********************************************
 *              .filter
 ******************************************** */
const binary = [1, 1, 1, 1, 0, 0, 1, 1, 1, 1];

// TO DO TOGETHER: Let's filter through our binary and return all the true
// values. We'll store the new array in a variable named 'ones'

const ones = binary.filter(num => num == true);

// console.log(ones);

const zeroes = binary.filter(num => num == false);

// console.log(zeroes);
// TO DO: filter through binary again and this time, return all the false
// values.

const fruitsAndVeggies = [
    {
        name: "banana",
        type: "fruit"
    },
    {
        name: "broccoli",
        type: "vegetable"
    },
    {
        name: "tomato",
        type: "fruit"
    },
    {
        name: "carrot",
        type: "vegetable"
    },
    {
        name: "apple",
        type: "fruit"
    },
    {
        name: "spinach",
        type: "vegetable"
    },
];

// TO DO: filter through the array of objects and return all fruit type
// objects.

const fruits = fruitsAndVeggies.filter(fruit => fruit.type == 'fruit');
// console.log(fruits);
// TO DO: filter through the array of objects and return all vegetable type
// objects.

const vegetables = fruitsAndVeggies.filter(veg => veg.type == 'vegetable');
// console.log(vegetables);

/*********************************************
 *              .reduce
 ******************************************** */

// TO DO TOGETHER: Let's reduce our original numbers Array into one single
// value.

const sumOfNumbers = numbers.reduce((accumulation, currentNumber) => {
    return accumulation + currentNumber;
}, 0);

// console.log(sumOfNumbers);


// TO DO: Using .reduce, subtract all numbers in the numbers Array from a
// starting point of 100.

const subtractFromOneHundred = numbers.reduce((acc, currNum) =>{
    return acc - currNum;
}, 100);

// console.log(subtractFromOneHundred);

var shoppingCarts = [
    {
        apples: 8,
        bananas: 2,
        oranges: 4,
        grapes: 24
    }, {
        apples: 3,
        bananas: 6,
        oranges: 8,
        grapes: 12
    }, {
        apples: 0,
        bananas: 12,
        oranges: 0,
        grapes: 0
    }, {
        apples: 4,
        bananas: 0,
        oranges: 12,
        grapes: 10
    }
];


// arr.reduce(function(arr, obj){},start#);
// arr.reduce((arr,obj) => {}, start#);

// TO DO: Using .reduce, return the total number of apples.

const totalApples = shoppingCarts.reduce((acc, cart) =>{
    return acc + cart.apples;
}, 0);

// console.log(totalApples);


// TO DO TOGETHER: let's use .reduce to return an object that has properties
// representing total values for each fruit.

const colors = ['red', 'orange', 'red', 'blue', 'blue', 'green', 'red'];

// TO DO: Count the number of times a color appears in this Array. Hint:
// your initial value should be an empty object.

function countColors (arr){
const colorCountObject = colors.reduce((colorCount, color) => {
    if (typeof colorCount[color] === 'undefined') {
        // if the word is not yet present in our object, set it's value to 1
        colorCount[color] = 1;
    } else {
        // otherwise increment the existing count
        colorCount[color] += 1;
    }
    return colorCount;
}, {}); // start with an empty object
return colorCountObject;
}

// console.log(countColors(colors));


const lyrics = ['we', 'all', 'live', 'in', 'a', 'yellow', 'submarine'];

//TO DO TOGETHER: Using reduce, let's turn this into a string.
const oneLine = lyrics.reduce(function(currentString,word){
    return `${currentString} ${word}`
},"");
// console.log(oneLine);

// Bonus: Create an Array of all the unique fur colors!
var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    }, {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    }, {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    }, {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    }, {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

let uniqueColors = new Set ();

uniqueColors = hamsters.reduce(function (furs, hamster){
    return uniqueColors.add(hamster.fur)
}, uniqueColors);

//logs 5 arrays each with corresponding hamster colors,
console.log(uniqueColors);

uniqueColors.reduce(function(uniqueFurs, hamster){

},[]);


// let furColors = [];
//
// for(let hamster of hamsters){
//     furColors.push(hamster.fur);
// }
//
// console.log(furColors);
//
// var uniqueFurs = new Set(furColors);
// console.log(uniqueFurs);

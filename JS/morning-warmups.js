"use strict";

//write a function that adds 2 numbers together

function sumBoth(x) {
   var a = 3;
   var b = 2;
    return (a + b);
    console.log(a + b);
}

function sumAll(X, Y) {
    var sum = X + Y;
    return sum;
}

console.log(sumAll(2, 5));
console.log(sumAll(1, 8));

//function to return area of triangle given 3 sides, Heron's formula

function triArea(a, b, c) {
   var semi = (a + b + c) / 2;
   var area = Math.sqrt(semi * (semi - a) * (semi - b) * (semi - c));
    return (area);
}

// console.log(triArea(5,6,7));

//make a function that says hi


function sayHi() {
    return ("hi")
}

console.log(sayHi())


// write a function that takes a name and says "hello (name)!"

function sayHello(name) {
    return ("Hello " + name + " !")
}

console.log(sayHello("Bryan"))

//  write a function that returns the first element of an array
//  returns element at index pos 0 (first pos) using x[0]

function firstElement(x) {
    return x[0];
}

console.log(firstElement([4, 5, 8, 5, 2]));


// create a function to return the are of an equilateral triangle given a side length

function eqTriArea(s) {
    return (Math.sqrt(3) / 4 * s * s);
}

console.log(eqTriArea(4))


// create a function that concatenates 3 items

function concat(a, b, c) {
    return (a + " " + b + " " + c + "")
}

console.log(concat("how", "are", "you"))

//create a function that takes in a string and returns the same string with all characters upper case//

function upperCase(x) {
    return x.toUpperCase();

}

console.log(upperCase("pony"))

// function to dfind area of circle given the diameter

function circleArea(d) {
    var r = d / 2;
    return (Math.PI * r * r);
}

console.log(circleArea(5))

//function to find perimeter of quadrilateral given side lengths

function perimeter(a, b, c, d) {
    return (a + b + c + d)
}

console.log(perimeter(1, 1, 2, 2))


console.log()


// write a function that returns the type of argument

function typeOfArgument(x) {
    return (typeof (x));
}

// console.log(typeOfArgument("abc"));
// console.log(typeOfArgument(123));
// console.log(typeOfArgument(true));
// console.log(typeOfArgument(64));


//write a javascript function that returns true only when passed a positive even number

function isPosEven(x) {
    if (x % 2 == 0 && x > 0) {
        return true
    } else
        return false
}


// console.log(isPosEven(2));
// console.log(isPosEven(-2));
// console.log(isPosEven(5334));
// console.log(isPosEven(10751));
// console.log(isPosEven(0));


// write a function that takes in a number and return true if number is greater than 5

function greaterThanfive() {
    var x = parseInt(prompt("Lemme get a number, I'll check if it's greater than 5!"));
    if (x > 5) {
        return true
    } else
        return false
}

// console.log(greaterThanfive(1));
// console.log(greaterThanfive(5));
// console.log(greaterThanfive(-5));
// console.log(greaterThanfive(9));


// write a js function that returns the message 'hello there, stranger." alert the return from this function. refactor so that it returns "Hello there,"
// concatenated to an argument. prompt the user to input a string, call the function, and alert the return. refactor so that the function has 'stranger'
// as a default parameter


// var userInput = prompt("What's your name??");
function heyStranger(name = "stranger") {
    alert("Hey there, " + name);
}

heyStranger("bryan");


// write a js function that accepts an array and returns length of that array

function lengthOfArray(arr) {
    return arr.length;
}

console.log(lengthOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(lengthOfArray(["a", "b", "c", "d", "e", "f"]));
console.log(lengthOfArray([NaN, NaN, "hddhd"]));
console.log(lengthOfArray([]));

// write a js function hat returns the quotient of two numbers, but only when passed two numbers


// function quotient(x,y) {
//     if (typeof x === "number" && typeof y === "number") {
//         return x / y;
//     } else return false;
// }

function quotient(x, y) {
    if (!isNaN(x) && !isNaN(y)) {
        return x / y;
    } else return false;
}

console.log(quotient(1, 2), .5);
console.log(quotient(10, 5), 2);
console.log(quotient(1, null), false);
console.log(quotient("num1", 3), false);
console.log(quotient(1, isNaN), false);

// function that takes an input and return true if input is a string at least 8 chars in length

function stringTest(x) {
    if (typeof (x) === "string" && x.length > 8) {
        return true
    } else return false
}

//write a function that takes in a floating point number and returns number rounded down

function roundDown(x){
    if (typeof(x) === "number" && !isNaN(x)) {
        return Math.floor(x);
    } else return false
}

//write a function that counts from 1 up the the numbdr passed

function upTo(x) {
    console.log("counting up to " + x);
    for (var i = 1; i <= x; i++) {
        console.log(i);
    }
    console.log("done counting");
}

//write a function called ccreate perdson ghast takes an name (string) and an age (number) and returns a person object containing the name an age

var personObject = [];

function createPersonObject(x,y) {
   if (typeof x === "string" && typeof y === "number")
    personObject.push({
        name: x,
        age: y
    })
} console.log(personObject);

createPersonObject("bill", 32);
createPersonObject("amy", 55);
createPersonObject("ted", 18);

// fizzbuzz
// Your program should count up to 100.
// For numbers divisible by 3, log "Fizz"
// For numbers divisible by 5, log "Buzz"
// If divisible by 3 and 5, log "FizzBuzz"
// All other cases, just log the number.

function fizzBuzz(x) {
    for (var x = 0; x <= 100; x++) {
        if (x % 3 === 0 && x % 5 === 0) {
        console.log(x + " FizzBuzz");
        } else if (x % 5 === 0) {
        console.log(x + " Buzz");
        } else if (x % 3 === 0) {
        console.log(x + " Fizz");
        } else {
        console.log(x);}
    } return console.log("FizzBuzz :)");
}

function fizzbuzz2(){
    for(var i=1; i<=100; i++) {
        if (i % 15 === 0){
            console.log("fizzbuzz");
        } else if (i % 5 === 0){
            console.log("buzz");
        } else if (i % 3 ===0) {
            console.log("fizz");
        } else console.log(i);
    } return console.log("Fizzbuzz!! :)");
}
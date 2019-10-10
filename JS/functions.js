"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
    return ("Hello, " + name + "!")
}

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

var helloMessage = sayHello("Bryan");
console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = ("Bryan");

console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 */

function isTwo(x) {
    if (x == 2) {
        return true
    } else return false
}

console.log(isTwo(1));
console.log(isTwo(2));
console.log(isTwo(3));



/*
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 */

function calculateTip(tip, total) {
    var total = parseInt(prompt("How much was your total bill?"));
    var tip = parseInt(prompt("What percentage would you like to tip?"));
    return alert("You should tip $" + ((tip/100) * total) + ".");
}

console.log(calculateTip(.2, 20));
console.log(calculateTip(.25, 25.50));
console.log(calculateTip(.15, 33.42));

/*
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 */

function applyDiscount (total, discount) {
    var total = parseFloat(prompt("How much was your total bill?"));
    var discount = parseInt(prompt("What percentage of discount are you eligible for?"));
    return alert("Your new total is $" + (total - ((discount/100) * total) + "."));
}

 /* Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */




// "use strict";
//
//
// // ex1 Define a function named isTrue that takes in any input and returns true if the input provided is exactly equal to true in value and data type.
//
//
// function isTrue(x) {
//     return x === true
// }
//
// console.log(isTrue(true));             // true
// console.log(isTrue(false));            // false
// console.log(isTrue(0));                // false
// console.log(isTrue(null));             // false
// console.log(isTrue("true"));           // false
// console.log(isTrue("Banana"));         // false
// console.log(isTrue([1, 2]));           // false
//
// // ex2 Define a function named isFalse that takes in a value and returns a true if and only if the provided input is equal to false in both type and value.
//
// function isFalse(x) {
//     return x === false
// }
//
// console.log(isFalse(false));             // true
// console.log(isFalse(true));          // false
// console.log(isFalse(0));                 // false
// console.log(isFalse(null));              // false
// console.log(isFalse(""));                // false
// console.log(isFalse("Banana"));          // false
// console.log(isFalse([1, 2]));            // false
//
// // ex3 Define a function named not that takes in any input and returns the boolean opposite of the provided input.
//
// function not(x) {
//     return !x;
// }
//
// console.log(not(false));                  // true
// console.log(not(0));                      // true
// console.log(not(""));                     // true
// console.log(not(null));                   // true
// console.log(not(NaN));                    // true
// console.log(not(undefined));              // true
// console.log(not(true));                   // false
// console.log(not("something"));            // false
// console.log(not(Infinity));               // false
// console.log(not(123));                   // false
//
// // ex4 Define a function named addOne that takes in a single input. If the input is a number or a numeric string, return the value plus one.
//
// function addOne(x){
//     var x = parseFloat(x);
//     return x + 1;
// }
//
// console.log(addOne(0));                    // 1
// console.log(addOne(2));                    // 3
// console.log(addOne(-5));                   // -4
// console.log(addOne(5.789));                // 6.789
// console.log(addOne(Infinity));             // Infinity
// console.log(addOne("2"));                  // 3
// console.log(addOne("0"));                  // 1
// console.log(addOne("banana"));             // NaN
// console.log(addOne(true));                 // NaN
// console.log(addOne(NaN));                  // NaN
//
// // ex5 Define a function named isEven that takes in a single input. If the input is an even number or a string containing an even number, return true. Any other input should return false for the output.
//
// function isEven(x) {
//     var x = parseFloat(x);
//     return (x % 2 === 0);
// }
//
//
// console.log(isEven(2));                   // true
// console.log(isEven(-8));                  // true
// console.log(isEven(0));                   // true
// console.log(isEven("42"));                // true
// console.log(isEven(1));                   // false
// console.log(isEven("-3"));                // false
// console.log(isEven(false));               // false
// console.log(isEven("banana"));            // false
//
// // ex 6 Define a function named isIdentical that takes in two input arguments. If each input is equal both in data type and in value, then return true. If the values are not the same data type or not the same value, return false.
//
// function isIdentical(x, y) {
//     return x === y;
//
// }
//
// console.log(isIdentical(3, 3));                    // true
// console.log(isIdentical(false, false));           // true
// console.log(isIdentical("hello", "hello"));         // true
// console.log(isIdentical(3, 3.0));                   // true
// console.log(isIdentical(undefined, undefined));     // true
// console.log(isIdentical(2, "2"));                   // false
// console.log(isIdentical("javascript", "java"));     // false
//
// // ex7 Define a function named isEqual that takes in two input arguments. If each argument is equal only in value, then return true. Otherwise return false.
//
// function isEqual(x,y){
//     if (x == y)
//         return true;
//     else {return false
//     }
// }
//
// console.log(isEqual(3, "3"));                       // true
// console.log(isEqual("abc123", "abc123"));           // true
// console.log(isEqual(true, 1));                      // true
// console.log(isEqual(0, false));                     // true
// console.log(isEqual(4, -5));                        // false
// console.log(isEqual("java", "javascript"));         // false
//
// // ex 8 Define a function named or that takes in two input arguments. The output returned should be the result of an "or" operation on both inputs.
//
// function or(x,y){
//     return (x || y);
// }
//
// console.log(or(true, true));                    // true
// console.log(or(true, false));                   // true
// console.log(or(false, true));                   // true
// console.log(or(false, false));                  // false
// console.log(or("hello", "world"));              // "hello" (this behavior is non-obvious, research more!)
//
//
// // ex9 Define a function named and that takes in two input arguments and returns the result of a logical and operation of both inputs.
// function and(x,y) {
//     return (x && y);
//
// }
//
// console.log(and(true, true));                    // true
// console.log(and(true, false));                   // false
// console.log(and(false, true));                   // false
// console.log(and(false, false));                  // false
// console.log(and("hello", "world"));              // "world" (this behavior is non-obvious, research more)
//
//
// // Define a function named concat that takes in two input arguments. If both arguments are strings, then return the concatenated result. If two numbers are provided, then return the string concatenation of each set of numerals.
//
// function concat(x,y) {
//     var x = String(x);
//     var y = String(y);
//
//     return x + y;
// }
//
// console.log(concat("code", "up"));                // "codeup"
// console.log(concat("connect", 4));                // "connect4"
// console.log(concat("hello", "world"));            // "helloworld"
// console.log(concat(4, 2));                        // "42"
// console.log(concat(true, true));                  // "truetrue"
//
//

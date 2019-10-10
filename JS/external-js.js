"use strict";
//
// console.log("Hello from external JS");
//
// alert("Welcome to my Website!!");
//
// var favColor = prompt("Hey, what's your favorite color??");
//
// alert("Cool, " + favColor + " is my favorite too!");
//
// // ex 3.1
//
// var totalDays = prompt("how many total days will you be renting all movies?");
//
// var pricePerDay = 3;
//
// alert("You owe $" + (totalDays * pricePerDay) + " for your movies");
//
//
//
// // ex 3.2
//
// var googleHours = parseInt(prompt("How many hours did you work for Google this week?"));
// var amazonHours = parseInt(prompt("How many hours did you work for Amazon this week?"));
// var fbHours = parseInt (prompt("How many hours did you work for Facebook this week?"));
//
// function payMe() {
//     var googleRate = 400;
//     var amazonRate = 380;
//     var facebookRate = 350;
//     var totalPay = ((googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * fbHours));
//
//
//     alert("Your total pay is $" + totalPay);
// }
//
// payMe()
//
//
// // ex 3.3
// // A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
//
// var classIsFull = confirm("Is the class full?");
// var schedConflict = confirm("Does it conflict with your schedule?");
//
// function canEnroll() {
//     if ((classIsFull === true) || (schedConflict === true)) {
//         alert("Unfortunately you cannot sign up for this class");
//     } else {
//         alert("Great, you can sign up for the class!");
//     }
// }
// canEnroll();
//
//
// // Ex 3.4
// // A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
//
// var cart = parseInt(prompt("How many items are in your cart?"));
// var premMember = confirm("Are you a premium member?");
//
// function getsDiscount() {
//     if ((cart > 2) || (premMember === true)) {
//         alert("Great, you get the discount, dawg");
//     } else {
//         alert("No discount for you!");
//     }
// }
// getsDiscount();
//
//
// // ex 4
//
// var username = prompt("Username:");
// var password = prompt("Password:");
//
//
// function validityTest() {
//     if (password.length >= 5 &&
//     password.indexOf(username) === -1 &&
//         username.length <= 20 &&
//         username === username.trim() &&
//         password === password.trim()) {
//         alert("Your credentials are valid") }
//     else {
//         alert("Your credentials are no good!");
//     }
// }
//
// validityTest();

//function to find if number is even

function isEven(x) {
    if (x % 2 ==0) {
        return true
        } else {
        return false }
    }

console.log(isEven(8));
console.log(isEven(11));

//function to find if number is odd

function isOdd(x) {
    if (x % 2 !== 0) {
        return true
        } else {
        return false }
}

console.log(isOdd(8));
console.log(isOdd(11));

// Make a function named identity(input) that returns the input exactly as provided.

function identity(x) {
    return x
}

console.log(identity(2));
console.log(identity('woof'));
console.log(identity(true));

// Make a function named isFive(input)

function isFive(x) {
    if (x === 5) {
    return true
    } else {
    return false
    }
}

console.log(isFive(3));
console.log(isFive(5));
console.log(isFive(-5));

// Make a function named addFive(input) that adds five to some input.

function addFive(x) {
    return x + 5;
}

console.log(addFive(5));
console.log(addFive(11));
console.log(addFive(-5));

// Make a function named isMultipleOfFive(input)

function isMultipleOfFive(x) {
    if (x % 5 === 0) {
        return true
        } else {
        return false
    }
}

console.log(isMultipleOfFive(105));
console.log(isMultipleOfFive(99));
console.log(isMultipleOfFive(-45));


function isFive(x) {
    if (x === 5) {
        return true
        } else {
        return false
    }
}

// Make a function named isThree(input)


function isThree(x) {
    if (x === 3) {
        return true
        } else {
        return false
    }
}

console.log(isThree(3));
console.log(isThree(5));
console.log(isThree(-5));

// Make a function named isMultipleOfThree(input)

function isMultipleOfThree(x) {
    if (x % 3 === 0) {
        return true
        } else {
        return false
    }
}

console.log(isMultipleOfThree(105));
console.log(isMultipleOfThree(99));
console.log(isMultipleOfThree(8));

// Make a function named isMultipleOfThreeAndFive(input)

function isMultipleOfThreeAndFive(x) {
    if (x % 3 === 0 && x % 5 === 0) {
        return true
        } else {
        return false
    }
}

console.log(isMultipleOfThreeAndFive(105));
console.log(isMultipleOfThreeAndFive(99));
console.log(isMultipleOfThreeAndFive(10));

// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n

function isMultipleOf(target, multiple) {
    if (target % multiple === 0) {
        return true;
        } else {
        return false }
}

console.log(isMultipleOf(9, 3));
console.log(isMultipleOf(7, 2));
console.log(isMultipleOf(100, 5));

// Make a function named isTrue(boolean)

function isTrue(x) {
    if (x === true) {
        return true
        } else {
        return false
    }
}

console.log(isTrue(true));
console.log(isTrue(false));

// Make a function named isFalse(boolean)

function isFalse(x) {
    if (x === false) {
        return true
    } else {
        return false
    }
}

console.log(isFalse(true));
console.log(isFalse(false));

// Make a function named isTruthy(input), remember that values other than true will behave like true

// function isTruthy(x) {
//     if (x) {
//         return ("truth")
//     } else {
//         return ("falsey")
//     }
// }
//
//


function isTruthy(x) {
    if (x === false || x === 0 || x === 0n || x === "" || x === null || x === undefined || isNaN(x)) {
        return ("falsey")
    } else {
        return ("truthy")
    }
}

console.log(isTruthy(23444));
console.log(isTruthy(false));
console.log(isTruthy(""));
console.log(isTruthy(null));
console.log(isTruthy(NaN));
console.log(isTruthy(undefined));


// (i.e., except for false, 0, 0n, "", null, undefined, and NaN).

// Make a function named isFalsy(input), remember that values other than false behave like false

function isFalsy(x) {
    if (x === false || x === 0 || x === 0n || x === "" || x === null || x === undefined || isNaN(x)) {
        return ("truthy")
    } else {
        return ("falsy")
    }
}

console.log(isFalsy(23444));
console.log(isFalsy(false));
console.log(isFalsy(""));
console.log(isFalsy(null));
console.log(isFalsy(NaN));
console.log(isFalsy(undefined));

// Make a function named isVowel(letter)

function isVowel(x) {
    if(x == "A" || x == "E" || x == "I" || x == "O" || x == "U" || x == "a" || x == "e" || x == "i" || x == "o" || x == "u" ) {
        return true;
    } else {
        return false;
    }
}

//can use String() or toString()?

console.log(isVowel("a"));
console.log(isVowel("b"));
console.log(isVowel(2));
console.log(isVowel(null));
console.log(isVowel("octopus"));

// Make a function named isConsonant(letter)

// function isConsonant(x) {
//     if(x == "A" || x == "E" || x == "I" || x == "O" || x == "U" || x == "a" || x == "e" || x == "i" || x == "o" || x == "u" ) {
//         return false;
//     } else {
//         return true;
//     }
// }

//this doesnt work because conditions against aeiou/AEIOU only, not consonants

console.log(isConsonant("a"));
console.log(isConsonant("b"));
console.log(isConsonant(2));
console.log(isConsonant(null));
console.log(isConsonant("octopus"));


// Make a function called returnTwo() that returns the number 2 when called
// Test this function with console.log(returnTwo())

function returnTwo() {
    return (2);
}
console.log(returnTwo());

// Write a function called identity(input) that takes in an argument called input and returns that input.

function identity(input) {
   var newInput =  String(input);
   return (newinput);
}

console.log(identity(input));
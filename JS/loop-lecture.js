"use strict";
/*
* WHILE LOOPS
*/

// var i = 10;
//
// while (i > 0) {
//     console.log(i);
//     i--
// }
//
// console.log("loop is done");

// 1. Create a while loop that counts to 100 in increments of ten:
// (10...20...30...)


// var i = 0;
//
// while (i <= 90) {
//     console.log(i+= 10);
// }
// console.log("loop is done");

// 2. Create a while loop that counts backwards from 50 - 1

// var x = 50;
//
// while (x > 0) {
//     console.log(x);
//     x--
// }
//
// console.log("loop is done");


var myQuestion = false;

// 3. Create a while loop that asks the user for a confirmation when asked: "Would you like to exit?"
// Store the confirm in the myQuestion variable.
// Try running this. What happens?

// while(myQuestion){
//     myQuestion = confirm("would you like to exit");
// }


/*
* DO-WHILE LOOPS
*/

// 4. Refactor question 3 using a do-while loop.
// What is the behavior this time?

// do {
//     myQuestion = confirm("would you like to exit");
// } while(!myQuestion);

// 5. Create a do-while loop that prompts the user for a color and continues
// to prompt until the string passed is "blue"

// var userColor;
//
// do {
//     userColor = prompt("Name a color");
// } while(userColor !== "Blue");

// 6. Refactor question 1 using a do-while loop.
// 1. Create a while loop that counts to 100 in increments of ten:
// (10...20...30...)

// var i = 0;
//
// do {
//     console.log(i += 10);
// } while (i <= 90);
//
//
// console.log("loop is done");


/*
* FOR LOOPS
*/

var myArray = ["apples", "oranges", "bananas", "grapes", "pineapples"];

// 7. Create a for loop that iterates over this array and logs out each
// element to the console

// var q;

for (var q = 0; q < myArray.length; q++) {
    console.log(myArray[q]);
}
console.log("loop is done");

// 8. You are going to use a for loop to complete the FizzBuzz exercise.
// Your program should count up to 100.
// For numbers divisible by 3, log "Fizz"
// For numbers divisible by 5, log "Buzz"
// If divisible by 3 and 5, log "FizzBuzz"
// All other cases, just log the number.

// function fizzBuzz(x) {
//     for (var x = 0; x <= 100; x++) {
//         if (x % 3 === 0 && x % 5 === 0) {
//         console.log(x + " FizzBuzz");
//         } else if (x % 5 === 0) {
//         console.log(x + " Buzz");
//         } else if (x % 3 === 0) {
//         console.log(x + " Fizz");
//         } else {
//         console.log(x);}
//     } return console.log("FizzBuzz :)");
// }

//shortest fizzbuzz
// for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i);

function fizzBuzz() {
    for (var x = 0; x <= 100; x++) {
        if (x === 1) {
            console.log("1");
        } else if (x === 2) {
            console.log("2");
        } else if (x === 3) {
            console.log("fizz");
        } else if (x === 4) {
            console.log("4");
        } else if (x === 5) {
            console.log("buzz");
        } else if (x === 6) {
            console.log("fizz");
        } else if (x === 7) {
            console.log("7");
        } else if (x === 8) {
            console.log("8");
        } else if (x === 9) {
            console.log("fizz");
        } else if (x === 10) {
            console.log("buzz");
        } else if (x === 11) {
            console.log("11");
        } else if (x === 12) {
            console.log("fizz");
        } else if (x === 13) {
            console.log("13");
        } else if (x === 14) {
            console.log("14");
        } else if (x === 15) {
            console.log("fizzbuzz");
        } else if (x === 16) {
            console.log("16");
        } else if (x === 17) {
            console.log("17");
        } else if (x === 18) {
            console.log("fizz");
        } else if (x === 19) {
            console.log("19");
        } else if (x === 20) {
            console.log("buzz");
        } else if (x === 21) {
            console.log("fizz");
        } else if (x === 22) {
            console.log("22");
        } else if (x === 23) {
            console.log("23");
        } else if (x === 24) {
            console.log("fizz");
        } else if (x === 25) {
            console.log("buzz");
        } else if (x === 26) {
            console.log("26");
        } else if (x === 27) {
            console.log("fizz");
        } else if (x === 28) {
            console.log("28");
        } else if (x === 29) {
            console.log("29");
        } else if (x === 30) {
            console.log("fizzbuzz");
        } else if (x === 31) {
            console.log("31");
        } else if (x === 32) {
            console.log("32");
        } else if (x === 33) {
            console.log("fizz");
        } else if (x === 34) {
            console.log("34");
        } else if (x === 35) {
            console.log("buzz");
        } else if (x === 36) {
            console.log("fizz");
        } else if (x === 37) {
            console.log("37");
        } else if (x === 38) {
            console.log("38");
        } else if (x === 39) {
            console.log("fizz");
        } else if (x === 40) {
            console.log("buzz");
        } else if (x === 41) {
            console.log("41");
        } else if (x === 42) {
            console.log("fizz");
        } else if (x === 43) {
            console.log("43");
        } else if (x === 44) {
            console.log("44");
        } else if (x === 45) {
            console.log("fizzbuzz");
        } else if (x === 46) {
            console.log("46");
        } else if (x === 47) {
            console.log("47");
        } else if (x === 48) {
            console.log("fizz");
        } else if (x === 49) {
            console.log("49");
        } else if (x === 50) {
            console.log("buzz");
        } else if (x === 51) {
            console.log("fizz");
        } else if (x === 52) {
            console.log("52");
        } else if (x === 53) {
            console.log("53");
        } else if (x === 54) {
            console.log("fizz");
        } else if (x === 55) {
            console.log("buzz");
        } else if (x === 56) {
            console.log("56");
        } else if (x === 57) {
            console.log("fizz");
        } else if (x === 58) {
            console.log("58");
        } else if (x === 59) {
            console.log("59");
        } else if (x === 60) {
            console.log("fizzbuzz");
        } else if (x === 61) {
            console.log("61");
        } else if (x === 62) {
            console.log("62");
        } else if (x === 63) {
            console.log("fizz");
        } else if (x === 64) {
            console.log("64");
        } else if (x === 65) {
            console.log("buzz");
        } else if (x === 66) {
            console.log("fizz");
        } else if (x === 67) {
            console.log("67");
        } else if (x === 68) {
            console.log("68");
        } else if (x === 69) {
            console.log("fizz");
        } else if (x === 70) {
            console.log("buzz");
        } else if (x === 71) {
            console.log("71");
        } else if (x === 72) {
            console.log("fizz");
        } else if (x === 73) {
            console.log("73");
        } else if (x === 74) {
            console.log("74");
        } else if (x === 75) {
            console.log("fizzbuzz");
        } else if (x === 76) {
            console.log("76");
        } else if (x === 77) {
            console.log("77");
        } else if (x === 78) {
            console.log("fizz");
        } else if (x === 79) {
            console.log("79");
        } else if (x === 80) {
            console.log("buzz");
        } else if (x === 81) {
            console.log("fizz");
        } else if (x === 82) {
            console.log("82");
        } else if (x === 83) {
            console.log("83");
        } else if (x === 84) {
            console.log("fizz");
        } else if (x === 85) {
            console.log("buzz");
        } else if (x === 86) {
            console.log("86");
        } else if (x === 87) {
            console.log("fizz");
        } else if (x === 88) {
            console.log("88");
        } else if (x === 89) {
            console.log("89");
        } else if (x === 90) {
            console.log("fizzbuzz");
        } else if (x === 91) {
            console.log("91");
        } else if (x === 92) {
            console.log("92");
        } else if (x === 93) {
            console.log("fizz");
        } else if (x === 94) {
            console.log("94");
        } else if (x === 95) {
            console.log("buzz");
        } else if (x === 96) {
            console.log("fizz");
        } else if (x === 97) {
            console.log("97");
        } else if (x === 98) {
            console.log("98");
        } else if (x === 99) {
            console.log("fizz");
        } else if (x === 100) {
            console.log("buzz");
        }
    }
}


// 9. Refactor question 1 using a for-loop
// var i = 10;
//
// while (i > 0) {
//     console.log(i);
//     i--
// }
//
// console.log("loop is done");


/*
* BREAK AND CONTINUE
*/

// 11. Refactor question 1: using a 'break', stop the counting once it hits 70.

// 12. Refactor question 2: using a 'continue', skip numbers 50-26 and only
// log 25 - 1.


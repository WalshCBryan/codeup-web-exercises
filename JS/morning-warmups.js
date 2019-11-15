"use strict";

//write a function that adds 2 numbers together

function sumBoth(x) {
    var a = 3;
    var b = 2;
    return (a + b);
    // console.log(a + b);
}

function sumAll(X, Y) {
    var sum = X + Y;
    return sum;
}

// console.log(sumAll(2, 5));
// console.log(sumAll(1, 8));

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
// function heyStranger(name ="stranger") {
//     alert("Hey there, " + name);
// }

// heyStranger("bryan");


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

function roundDown(x) {
    if (typeof (x) === "number" && !isNaN(x)) {
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

function createPersonObject(x, y) {
    if (typeof x === "string" && typeof y === "number")
        personObject.push({
            name: x,
            age: y
        })
}

console.log(personObject);

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
            console.log(x);
        }
    }
    return console.log("FizzBuzz :)");
}

function fizzbuzz2() {
    for (var i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log("fizzbuzz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else console.log(i);
    }
    return console.log("Fizzbuzz!! :)");
}

var testarray = ['John', 'Paul', 'George', 'Ringo', 'Santana'];

// write a javascript function that returns the cart with the most oranges

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


// function mostOranges(arr) {
//     var winner = arr[0];
//     shoppingCarts.forEach(function (shoppingCart) {
//         if (shoppingCart.oranges > winner.oranges) {
//             winner = shoppingCart;
//         }
//     });
//     return console.log(winner);
// }

function mostOranges(carts) {
    var solution = [];
    var winner = carts[0];
    carts.forEach(function (cart, index) {
        if (cart.oranges > winner.oranges) {
            winner = cart;
        }

    });
    return console.log(winner);

}

mostOranges(shoppingCarts);


var shoppers = [
    {
        name: 'Cameron',
        amount: 180
    },
    {
        name: 'Ryan',
        amount: 250
    },
    {
        name: 'George',
        amount: 320
    }
];

shoppers.forEach(function (shopper) {
    var discount = shopper.amount * .12;
    var newtotal = shopper.amount - discount;
    if (shopper.amount >= 200) {
        console.log("great, for spending $" + shopper.amount + " you get a discount of $" + discount + ". New total is $" + newtotal);
    } else
        console.log("no discount for you. You still have a bill of $" + shopper.amount);
});

//write a function that accepts an array of students and reutrns array of students no regstered for class

var students = [
    {
        name: "Mary",
        grade: 10,
        gpa: 3.7,
        isRegistered: true
    },
    {
        name: "Tim",
        grade: 12,
        gpa: 3.2,
        isRegistered: false
    },
    {
        name: "Ellie",
        grade: 9,
        gpa: 4.0,
        isRegistered: false
    },
    {
        name: "Alex",
        grade: 10,
        gpa: 3.9,
        isRegistered: true
    }
];

function checkRegistration(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].isRegistered === false) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// console.log(checkRegistration(students));

// write a java script that returns an array of hampser object sorted by height

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

function tallestHamster(arr) {
    var byHeight = [];
    // for (var i = 0; i <= hamsters.length; i++) {
    return arr.sort(function (a, b) {
        return a.heightInMM - b.heightInMM
    });
}

// console.log(tallestHamster(hamsters));

//write a function that accepts a number 1-10 and returns that number as a string/spelled out. ie 2 return "two"


function numberToString(x) {
    if (x === 1) {
        return "one";
    } else if (x === 2) {
        return "two";
    } else if (x === 3) {
        return "three";
    } else if (x === 4) {
        return "four";
    } else if (x === 5) {
        return "five";
    } else if (x === 6) {
        return "six";
    } else if (x === 7) {
        return "seven";
    } else if (x === 8) {
        return "eight";
    } else if (x === 9) {
        return "nine";
    } else if (x === 10) {
        return "ten"
    } else return "Numbers 1-10 ONLY!"
}

//same, but as switch case
function numAsWord(num) {
    switch (num) {
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
        case 10:
            return "ten";
        default :
            return "numbers 1-10 ONLY!"
    }
}

var randomNum = Math.floor(Math.random() * 10) + 1;

// console.log(numAsWord(randomNum));


// write a jave script function that returns you're welcome, but only when passed an object with the property of gratitude and the value of "you're welcome"

//
// var newObj = {
//     gratitude: "thank you"
// };
//
// function urWelcome(obj) {
//     if (obj.gratitude === "thank you") {
//         return "you're welcome!!"
//     }
// }

// console.log(urWelcome(newObj));
// console.log(urwelcome("dfgh"));

//write a function that returns a random true or false


var randomNum = Math.floor(Math.random() * 2) + 1;


function coinFlip(num) {
    var num = Math.floor(Math.random() * 2) + 1;
    if (num === 1) {
        return true
    } else return false
}


// console.log(coinFlip());

// given an array of numbers return all even numbers

function evensOnly(arr) {
    var newArr = [];
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// console.log(evensOnly([1, 2, 3, 4, 5, 6, 7, 8]));


// write a function that returns a promise, the promise should resovle is promise takes in even number and reject if passed anything else

let randoNum = Math.floor(Math.random() * 10) + 1;


const evenPromise = num => {
    return new Promise((resolve, reject) => {
        if ((num % 2 === 0) && (typeof(num) === 'number')) {
            resolve('this is an even number');
        } else {
            reject('this is not an even number or isNaN');
        }
    })
};


evenPromise(randoNum)
    .then(message => console.log(`${randoNum}: ${message}`))
    .catch(message => console.log(`${randoNum}:  ${message}`));


//
// const evenNumsOnlyByPromise
// (num)
// {
//     return new Promise((resolve, reject) => {
//         if (typeof (num) === "number" && num % 2 === 0) {
//             resolve('this number is even');
//         } else {
//             reject('this number is not even or isNaN');
//         }
//     });
// }
//
//
// evenNumberPromise.then(response => console.log(response));
// evenNumberPromise.catch(error => console.error(error));

// console.log(evenNumsOnlyByPromise(2));
//
//
// const wait = (num) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, num);
//     })
// };
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


// write a function that returns a  promise, resolves wiht message of hello, write to the html doc an H! that has text of resolve

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        resolve('hello');
    })
};




const testPromise = () => {
    return new Promise((resolve, reject) => {
        let x = true;
        if  (x == true) {
            resolve('hello');
        } else {
            reject('no reject should happen, what you do!?!');
        }
    })
};

testPromise()
    .then(message => document.write(`<h1>${message}</h1>`))
    .catch(message => console.log('no go, partner!'));


// testPromise()
//     .then(message => document.getElementsByTagName('body[0]').innerHTML += `<h1>${message}</h1>`)
//     .catch(message => console.log('no go, partner!'));
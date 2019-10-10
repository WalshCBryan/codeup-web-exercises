"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 */


function numberGame() {
    var wantsToPlay = confirm("would you like to enter a number?");
    if (wantsToPlay === false) {
        return (alert("what, you don't want to play???"));
    } else {
        var num = parseInt(prompt("Give me a number, any number"));
    }

    if (isNaN(num)) {
        return (alert("That's NOT a number!!"));
    }

    if (num % 2 === 0) {
            alert("your number is even.");
    } else {
        alert("your number is odd.");
    }

    alert("your number plus 100 is " + (num + 100) + ".");

    if (num >= 0) {
        alert("your number is positive.")
    } else {
        alert("your number is negative.");
    }
}

/*
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// var color = prompt("give me a color as long as it's red, blue or cyan ;)");
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

function analyzeColor() {
    // var color = prompt("give me a color as long as it's red, blue or cyan ;)");

    if (randomColor === "red") {
        return ("roses are red");
    } else
        if (randomColor === "orange") {
        return ("oranges are orange");
    } else
        if (randomColor === "yellow") {
        return ("the sun is yellow");
    } else
        if (randomColor === "green") {
        return ("the grass is green");
    } else
        if (randomColor === "blue") {
        return ("the sky is blue");
    } else
        if (randomColor === "indigo") {
        return ("indigo is between blue and purple, like blurple");
    } else
        if (randomColor === "violet") {
        return ("just a fancy name for purple?");
    } else
        return ("I don't know about that color");
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function randomizeTheColor() {
    // var colors = randomColor;
    switch (randomColor) {
        case "red":
            return "roses are still red";
        case "orange":
            return "oranges are still orange";
        case "yellow":
            return "the sun is still yellow";
        case "green":
            return "grass is still green";
        case "blue":
            return "the sky is still blue";
        case "indigo":
            return "indigo is still fancy blurple";
        case "violet":
            return "is still fancy purple";
        default:
            return "i dont know that color";
    }
}

console.log(randomizeTheColor(colors));


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var userColor = prompt("give me a color, Roy G Biv");
// alert(analyzeColor(userColor));



    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     */

// var luckyNumber = Math.floor(Math.random() * 6);
// var total = parseFloat(prompt("How much is your current total??"));

    function calculateTotal(luckyNumber, total) {
        var luckyNumber = Math.floor(Math.random() * 6);
        var total = parseInt(prompt("How much is your current total??"));
        if (luckyNumber = 0) {
            return (alert("sorry, no discount today! Your total is still: $" + total));
        } else if (luckyNumber = 1) {
            return (alert("Cool, you get 10% off! New total is $" + (total - (total * .1))));
        } else if (luckyNumber = 2) {
            return (alert("Cool, you get 25% off! New total is $" + (total - (total * .25))));
        } else if (luckyNumber = 3) {
            return (alert("Cool, you get 35% off! New total is $" + (total - (total * .35))));
        } else if (luckyNumber = 4) {
            return (alert("WOW! You get 35% off! New total is $" + (total - (total * .5))));
        } else if (luckyNumber = 5) {
            return (alert("WOW, thats 100% off! New total is $" + (total - (total * 1))));
        }
    }


    /*
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */

    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// // Generate a random number between 0 and 6
//
    function showMeTheDeets() {
        parseFloat(calculateTotal());
        alert("original total " + total);
        alert("Your lucky number was " + luckyNumber);
    }








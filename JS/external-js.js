"use strict";

console.log("Hello from external JS");

alert("Welcome to my Website!!");

var favColor = prompt("Hey, what's your favorite color??");

alert("Cool, " + favColor + " is my favorite too!");

// ex 3.1

var totalDays = prompt("how many total days will you be renting all movies?");

var pricePerDay = 3;

alert("You owe $" + (totalDays * pricePerDay) + " for your movies");



// ex 3.2

var googleHours = parseInt(prompt("How many hours did you work for Google this week?"));
var amazonHours = parseInt(prompt("How many hours did you work for Amazon this week?"));
var fbHours = parseInt (prompt("How many hours did you work for Facebook this week?"));

function payMe() {
    var googleRate = 400;
    var amazonRate = 380;
    var facebookRate = 350;
    var totalPay = ((googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * fbHours));


    alert("Your total pay is $" + totalPay);
}

payMe()


// ex 3.3
// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

var classIsFull = confirm("Is the class full?");
var schedConflict = confirm("Does it conflict with your schedule?");

function canEnroll() {
    if ((classIsFull === true) || (schedConflict === true)) {
        alert("Unfortunately you cannot sign up for this class");
    } else {
        alert("Great, you can sign up for the class!");
    }
}
canEnroll();


// Ex 3.4
// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

var cart = parseInt(prompt("How many items are in your cart?"));
var premMember = confirm("Are you a premium member?");

function getsDiscount() {
    if ((cart > 2) || (premMember === true)) {
        alert("Great, you get the discount, dawg");
    } else {
        alert("No discount for you!");
    }
}
getsDiscount();


// ex 4

var username = prompt("Username:");
var password = prompt("Password:");


function validityTest() {
    if (password.length >= 5 &&
    password.indexOf(username) === -1 &&
        username.length <= 20 &&
        username === username.trim() &&
        password === password.trim()) {
        alert("Your credentials are valid") }
    else {
        alert("Your credentials are no good!");
    }
}

validityTest();

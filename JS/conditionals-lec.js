"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar 
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
    // code here runs if condition evaluates to true
// }
    

// ================ IF STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin

// if(isAdmin) {
//     //show a specific navbar
// }

//Together: Send a 20% off coupon if its users birthday

// if(isBirthday) {
//     //send bday e-mail w/ coupon
// }

//Together: Write an if statement that alerts "It's raining" if isRainy is true

// var isRainy = false;
//     if (isRainy) {
//         alert("It's Raining!");
// }

//Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.

 // var itemCost = 100;
 // var currentBalance = 200;
 //
 // if (itemCost < currentBalance) {
 //     alert("yay, you've got enough money!!");
 //     } else {
 //     alert("sorry, pal")
 // }


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0

var numberOfLives = 1;

function gameOver() {
    if (numberOfLives === 0) {
        alert("GAME OVER")
    } else {
        alert("Next Level!")
    }
}

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"

var weather = "snowing";

function whatsTheWeather() {
    if (weather === "snowing") {
        alert("It's snowing!")
    } else {
         alert("it's not snowing")
    }
}

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

var numberInput = 15

function greaterThanTen() {
    if (numberInput > 10) {
        alert("number is greater than 10");
    } else {
        alert("number is less than 10");
    }
}




//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }
    
    

// =============== IF / ELSE STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin, else show a different navbar

var isAdmin = false;

function userStatus() {
    if (isAdmin) {
        //show specific navbar
        return "user is an admin";
        } else {
        //show regular user navbar
        return "user is regular user";
    }
}
//Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"

var isRainy = true;

function weatherCheck() {
    if (isRainy) {
        //show raining icon
        alert("it's raining!")
    } else {
        alert("have a great day!")
    }
}





//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"

// var numberOfLives = 1;
//
// function gameOver() {
//     if (numberOfLives === 0) {
//         alert("GAME OVER")
//     } else {
//         alert("Next Level!")
//     }
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"

// var weather = "snowing";
//
// function whatsTheWeather() {
//     if (weather === "snowing") {
//         alert("It's snowing!")
//     } else {
//         alert("check back later for more details!")
//     }
// }

//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"

// var numberInput = 15

function greaterThanTen() {
    if (numberInput > 10) {
        alert("number is greater than 10");
    } else {
        alert("number is less than 10");
    }
}
//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!. 


// var numberOfLives = 1;

function checkIfGameIsOver(numberOfLives) {
    var numberOfLives = (parseInt(prompt("How many lives do you have left?")))
    if (numberOfLives === 0) {
        return ("GAME OVER")
    } else {
        return("Next Level!")
    }
}

//alternatively, can set something like returnMessage variable to the desired returns

// function gameOver(numberOfLives) {
// if (numberOfLives == 0) {
//     returnMessage = ("GAME OVER")
// } else {
//     returnMessage = ("Next Level!")
// }
// return returnMessage
// }



//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.

// var weather = "snowing";

function whatsTheWeather(weather) {
    var weather = prompt("what is the weather?");
    if (weather === "snowing") {
        return ("It's snowing!")
    } else {
        return ("check back later for more details!")
    }
}
    
    
// SHOULD WE DELETE STUFF EXAMPLE

// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
//
// console.log("The value of the confirm is: " + weShouldDeleteStuff);
//
// //response to confirm is stores as boolean value (true/false)
//
// if (weShouldDeleteStuff) {
//     // delete all the things...
//     alert("We are deleting everything...");
// } else {
//     alert("Operation Canceled!");
// }


//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// var areYouOfAge = confirm("Are you at least 13 years of age?");
// console.log(("The value of the confirm is:" + areYouOfAge));;

function ageCheck() {
    var areYouOfAge = confirm("Are you at least 13 years of age?");
    //line below is equal to [ if (areYouOfAge === true) ]
    if (areYouOfAge) {
        alert("You may proceed");
    } else {
        alert("You shall not pass!")
    }
}



// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }

    

// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases

// var weather = "raining";

function whatsItLikeOutside(weather) {
    var weather = prompt("Whats it like outside?");
    if (weather === "snowing") {
        alert("It's snowing!!");
    } else if (weather === "raining") {
        alert("It's raining!!");
    } else if (weather === "sunny") {
        alert("It's sunny!!");
    } else {
        alert("Have a nice day")
    }
}


//Together: refactor the above statement as a function

// Together: PIZZA PREFERENCE EXAMPLE 

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

function trafficLight(lightColor) {
    var lightColor = prompt("What color is the light?");
    if (lightColor === "green") {
        return ("You can go, go, go!");
    } else if (lightColor === "yellow") {
        return ("slow down and be cautious");
    } else if (lightColor === "red" ) {
        return ("you need to stop!");
    } else {
        return ("proceed with caution")
    }
}






// ================ NESTED STATEMENTS ===============
//Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.

// if user is less than 15, not eligible
// at 15 can has learners permit
// if 16 can has license, but only if has permit

// var userAge = 16;
// var hasPermit = true;


function canHasDrive() {
    var userAge = parseInt(prompt("How old is you?"));
    var hasPermit = confirm("Do you have a learner's permit already?");
    if (userAge < 15) {
        alert("Sorry, you're not eligible for a permit. Please come back at at age 15");
    } else {
        if (userAge === 15) {
            alert("You are eligible for a learner's permit");
        } else if (userAge > 15 && hasPermit) {
            alert("you can have a driver's license");
        } else if (userAge > 15 && !hasPermit) {
            alert("sorry, you need a permit first!")
        }
    }
}


// ================ TERNARY STATEMENT ================

//Together: Regular way

// var message;
// var success = true;

// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


var success = true;
var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
console.log(message);


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!

// var weather = ("rainy");
// var message = (weather === "rainy") ? "ahh shucks its raining" : "yay! Its not raining!";
//
// console.log(message);

// =============== SWITCH STATEMENT ================
//Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     case  "ham":
//         alert("Ham is tasty and easy to spell.");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.



function checkWeather(wetherConditions) {
    var weatherConditions = prompt("What is the weather like today?");
    switch (weatherConditions) {
        case "rainy":
            return("ahh, crud it's raining!");
            break;
        case "sunny":
            return("Yay! It's sunny out!");
            break;
        case "snowy":
            return("Brrrrrr... its snowing out!");
            break;
        default:
            return("Well its not snowy, rainy, or sunny...");
            break;
    }
}




//TODO: Rewrite the intersection function from earlier as a switch statement.


function intersection(lightColor) {
    var lightColor = prompt("What color is the light?");
    var returnMessage;
    switch (lightColor) {
        case "green":
            returnMessage = "GO, GO, GO!";
            break;
        case "yellow":
            returnMessage = "Slow down!";
            break;
        case "red":
            returnMessage = "STOP!";
            break;
        default:
            returnMessage = "Proceed with caution!";
            break;

    }
    return returnMessage
}



// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html

// var allowance = 5;
// var shoppingDone = true;

//confirm is accomplished by a checkbox

function allowanceIncrease() {
    var shoppingDone = confirm("Has the shopping been done?");
    if (shoppingDone === false) {
        return ("you only get $5 this week");
    } else {
        return ("you get $10 this week");
    }
}


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html

//input =  determines which parameter is now the argument
//returns appropriate response based on weather input








// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html




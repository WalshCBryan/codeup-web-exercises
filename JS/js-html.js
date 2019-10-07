//use strict forces JS to be 'more correct' and not allow lapses in syntax. needs to initialize variables and add semicolons appropriately
"use strict";

//logs to console
console.log("Hello Deimos");

//writes to body
// document.write("Ahoy Deimos");

var message = "whats up";
console.log(message);

alert("CONGRATS, YOU WON SOME BOGUS PRIZE");

var wantsPrize = confirm("DO YOU WANT TO CLAIM YOUR BOGUS PRIZE??");

console.log(wantsPrize);

var name = prompt("WHAT IS YOUR NAME??");
// returns form a prompt will always be a string, but can be converted using something like parseInt

document.write("Hello " + name)
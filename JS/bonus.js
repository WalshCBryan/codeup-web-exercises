// Heather is wanting to join an after school club. She is currently involved with another club at school, but luckily all after
// // school clubs will only meet on one day out of the week. Return a string to Heather as to whether or not she can join another
// // club.

var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
var randomDayOfWeek = daysOfWeek[Math.floor(Math.random() * daysOfWeek.length)];


function canJoin() {
    var dayRequest = prompt("What day would the new club meet?");
    console.log("Your current club meets on " + randomDayOfWeek + "s.");
    console.log("This club meets on " + dayRequest + "s.");
    if (dayRequest === randomDayOfWeek) {
        return ("Sorry, that conflicts with your current schedule!")
    } else return ("Awesome, you can join that club!");

}

// Rodrigo is a chef, and needs to buy food for his restaurant. He's worked out a deal with the shop and can get his food for a
// twenty percent discount, but the shop changes their prices from week to week.
//
// Rodrigo needs to buy tofu, lamb, and potatoes.
//

var tofuPrice = 4.99;
var lambPrice = 14.99;
var potatoPrice = 3.49;
discountRate = 20;


function purchaseOrder(x,y,z) {
    var total = 0;
    var x = parseInt(prompt("How many pounds of tofu would you like?"));
    var y = parseInt(prompt("How many pounds of lamb would you like?"));
    var z = parseInt(prompt("How many pounds of potatoes would you like?"));
    total += ((tofuPrice * x) + (lambPrice * y) + (potatoPrice * z));
    return ("You are buying " + x + " lb(s) of tofu at $" + tofuPrice + " per lb. You are buying " + y + " lb(s) of lamb at $" + lambPrice + " per lb. You are buying " + z + " lb(s) of potatoes at $" + potatoPrice + " per lb. Your pre discount total is $" + total + ". Your " + discountRate + "% discount gets you an additional $" + (total * (discountRate / 100)).toFixed(2) + ". Your new final total is $" + (total -(total * (discountRate / 100))).toFixed(2));

}
//Return a string to Rodrigo with his total based on how much of each item he's buying, by weight in pounds, the price of the
// items per pound, and also inform him of the savings he's receiving from the store.
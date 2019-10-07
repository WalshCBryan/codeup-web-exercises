// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?


    function totalRent(x) {
    var totalDays = x;
    var pricePerDay = 3;
    return (totalDays * pricePerDay);

    // console.log((totalRent(9)));


// instructor example
// var lMRental = 3;
// var brRental = 5;
// var hercules = 1;
// var totalRental = lMRental+brRental+hercules;
// var totalcost = totalRental * 3;
// //says totalcost is not defined???
// console.log(totalCost);


// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

function totalPay() {
    var google = 400;
    var amazon = 380;
    var facebook = 350;
    return ((google * 6) + (amazon * 4) + (facebook * 10));
}

console.log ((totalPay()));


// instructor example
// function totalPay() {
//     var googleRate = 400;
//     var amazonRate = 380;
//     var facebookRate = 350;
//     var googleHours = 6;
//     var amazonHours = 4;
//     var facebookHours = 10;
//
//     return (googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * facebookHours);

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

function canEnroll() {
    var classIsFull = false;
    var conflictsWithSchedule = false;
    if ((classIsFull = false) && (conflictsWithSchedule = false)) { return true }
}

// comes back as undefined

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

function getsDiscount() {
     if ((productsBought > 2) || (membership = premium)); }
    price - x%;

// EX4----------------------------------------->
var username = 'codeup';
var password = 'notastrongpassword';


password.length >= 5 &&;
    password.indexOf(username) === -1 &&;
        username.length <= 20 &&;
            username == username.trim() &&;
                password == password.trim();
                    validPassword = true;




// if (password.length > 5) minlength = true;
//
// if (password.search('username') == -1)  passwordTest2 = true;
//
// if (username.length > 20)  passwordTest2 = false;
//
// if (((username.startsWith = ('') || (username.endsWith = (''))) passwordtest3 = false;









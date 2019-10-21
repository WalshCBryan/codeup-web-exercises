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
// Return a string to Rodrigo with his total based on how much of each item he's buying, by weight in pounds, the price of the
// items per pound, and also inform him of the savings he's receiving from the store.

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

// Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascencding order.
//
//     Example input: ["fred", true, 5, 3] Example output: [3, 5]

function filterNumbers(x){
    var newArray = [];
    for (i = 0; i <= x.length; i++) {
        if (typeof(x[i]) === "number") {
            // console.log(typeof (x[i]));
            newArray.unshift(parseFloat(x[i]));
        }
    }
    var newNewArray = newArray.sort(function(a,b) {
        return a-b;
    });
    return newNewArray;
}

// Write a function, getOlder() that takes in array of dog objects and increases the value of each object's age property by 1.
//
// Example input:

var doggos = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];

console.log(doggos);

function addDogYear(doggos) {
    doggos.forEach(function(doggo,index) {
        doggos[index].age += 1
    });
    console.log(doggos);
}

// function addDogYear() {
//     for (var i = 0; i <= doggos.length; i++) {
//         this.doggos.age += 1
//     } console.log(doggos);
//
// }

var cars = [
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
];

console.log(cars);

function washCars(cars) {
    cars.forEach(function(car,index) {
        cars[index].isDirty = false
    });
    console.log(cars);
}

// Write a function, adminList() that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.

var credentials = [
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
    {
        isAdmin: true,
        email: 'user2@email.com'
    },
    {
        isAdmin: false,
        email: 'user3@email.com'
    }
];

console.log(credentials);


function adminCount(credentials) {
    var admins = [];
    credentials.forEach(function(credential,index) {
       if (credentials[index].isAdmin === true) {
           admins.unshift(credential.email);
       }
    });
    console.log(admins);
}

// Refactor to return an array of admin-only user emails

function adminEmails(credentials) {
    var admins = [];
    credentials.forEach(function(credential,index) {
        if (credentials[index].isAdmin === true) {
            admins.unshift(credential);
        }
    });
    console.log(admins);
}





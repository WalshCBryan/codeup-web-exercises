// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

// var i = 0;
//
// function showMultiplictionTable(num) {
//     while (i <= 10) {
//         console.log("" + num + " x " + i + " = " + (num * i));
//         i++;
//     }
// } return(console.log("All done"));

function showMultiplicationTable(num) {
    for (i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));

    } return(console.log("All done"));
}


// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:


// Math.floor(Math.random() * 50) + 1;
//
// function randomOdds() {
//     for (i = 0; i <= 20; i++) {
//         if (Math.floor(Math.random() * 50) + 1;) % 2 === 0) {
//         }
//
//     }
//
// }

function randomOdds() {
    for (var x = 0; x <= 20; x++) {
        randonNum = Math.floor(Math.random() * 50) + 1;
        if (randonNum % 2 === 0) {
            console.log(randonNum + " is even");
        } else {
            console.log(randonNum + " is odd");
        }
    }
}

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// function numberPyramid() {
//     for (var x = 1; x <= 9; x++) {
//         console.log("" + x)
//     }
// }

function numberPyramid() {
    for (var i = 1; i <= 9; i++) {
        var num = "";
        for (var z = 1; z <= i; z++) {
            num += i;
        } console.log(num);

    }
}
//how to get it to repeat same number instead of iterated number?

function hundredToFive() {
    for (x = 100; x >= 5; x -= 5) {
        console.log(x);
    }

}
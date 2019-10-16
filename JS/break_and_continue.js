// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.


// function oddsOnly() {
// do {
//     userNum = prompt("Name an odd number");
// } while (userNum % 2 === 0);
// // userNum = parseFloat(userNum);
// console.log(userNum + " is the user's number");
//     for (var i = 0; i <= 50; i++) {
//         if (i % 2 !== 0) {
//             if (i === userNum) {
//                 console.log(" skipping this number");
//                 continue;
//             }
//             console.log(i + " is an odd number");
//         }
//     }
// }

function oddsOnlyAlternate() {
    while (true) {
        var num = parseInt(prompt("give me a number between 1 and 50"));
        if (num % 2 !== 0 && num <= 50 && num >= 0) {
            break;
        }
    }

    console.log("skipping the number " + num);

    for (var q = 1; q <= 50; q += 2) {
        if (q === num) {
            console.log("skipping this one!");
            continue;
        }
        console.log(q);
    }
}






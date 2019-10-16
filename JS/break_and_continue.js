// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
//     Your output should look like this:


function oddsOnly() {
do {
    userNum = prompt("Name an odd number");
} while (userNum % 2 === 0);
userNum = parseFloat(userNum);
console.log(userNum + "is the user's number");
    for (var i = 0; i <= 50; i++) {
        if (i % 2 !== 0) {
            if (i === userNum) {
                console.log(" skipping this number");
                continue;
            }
            console.log(i + " is an odd number");
        }
    }
}
//

//
// else if (i % 2 === 0) {
//     continue;
// //
// if (i == userNum) {
//     console.log("skipping this number");


//
//
// var text = "";
//
// for (var i = 0; i < 10; i++) {
//     if (i === 3) {
//         continue;
//     }
//     text = text + i;
// }
//
// console.log(text);
// expected output: "012456789"
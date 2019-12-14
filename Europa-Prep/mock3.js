//the following functions will be useful for solving more complicated functions! These were taken from previous exercises! You will also notice that I use some concepts from es6, although it is not absolutely necessary, it usually results in simpler and/or more eloquent functions.

// Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.

function isNegative(num) {
    return num < 0;
}

// 2. Write a function named `isTen` that accepts a number and returns a boolean
// that indicates whether or not that number is equal

function isTen(num) {
    return num === 10;
}

// Write a function named `double` that accepts a number and returns the number
// doubled.

function double(num) {
    return (num * 2);
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// write a function named remove3s that accepts and array of numbers and returns an array with all all of the same numbers except for 3

function remove3s(arr) {
    let bucket = [];
    arr.forEach(function(num){
        if (num !==3) {
            bucket.push(num);
        }
    });
    return bucket
}

// this works, but filter (es6) is more eloquent

// function remove3s(arr){
//     arr = arr.filter(num !== 3);
//     return arr;
// }

// can use isNot3 to filter nums

// function isNot3(num){
//     return num !==3;
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// write a function named sumAll that returns the sum of all numbers in an array
function sumAll(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = parseFloat(arr[i]);
        total += arr[i];
    }
    return total;
}

// once we have the sum of all numbers in an array we can use it for further math problems.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// write a function named countEvens that accepts an array of nuyms and returns the number of even numbers in the array.
function countEvens(arr) {
    var evenCount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenCount += 1;
        }
    }
    return evenCount
}

// function isEven(num){
//     if(num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
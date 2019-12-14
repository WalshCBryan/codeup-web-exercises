"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

// Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.

function isNegative(num) {
    return num < 0;
}

// 2. Write a function named `isTen` that accepts a number and returns a boolean
// that indicates whether or not that number is equal

function isTen(num) {
    return num === 10;
}

// 3. Write a function named `double` that accepts a number and returns the number
// doubled.

function double(num) {
    return (num * 2);
}

// Write a function named `remove9s` that accepts an array of numbers and
// returns an array with all the same numbers except for `9`.


function isNot9(num) {
    return num !== 9
}

function remove9s(arr) {
    arr = arr.filter(isNot9);
    return arr
}

//this works, but filter (es6) is more eloquent
// function remove9s(arr) {
//     var bucket = [];
//     arr.forEach(function(num){
//         if (num !==9) {
//             bucket.push(num);
//         }
//     });
//     return bucket
// }

// console.log(remove9s([7, 8, 9, 10])); // [7, 8, 10]
// console.log(remove9s([1, 2, 3]));     // [1, 2, 3]
// console.log(remove9s([9, 9, 9]));     // []

// . Write a function named `average` that accepts an array of numbers and returns
// the average of those numbers.

function average(arr) {
    var counter = 0;
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        parseFloat(arr[i]);
        total += arr[i];
        counter += 1;
    }
    return parseFloat(total / counter);
}

// console.log(average([1, 2, 3])); // 2
// console.log(average([4, 6, 8, 10, 12])); // 8
// console.log(average([1, 2])); // 1.5

// 6. Write a function named `countOdds` that accepts an array of numbers and
// returns the number of odd numbers in the array.

function countOdds(arr) {
    var oddCount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddCount += 1;
        }
    }
    return oddCount
}

// console.log(countOdds([1, 2, 3])); // 2
// console.log(countOdds([4, 6, 8, 10])); // 0
// console.log(countOdds([1, 2, 1, 1])); // 3

// 7. Write a function named `convertNameToObject` that accepts a string that
// contains a first name and last name separated by a space character, and returns an
// object with properties `firstName` and `lastName`.

function convertNameToObject(str) {
    var nameObject = {};
    var name = str.split(" ");
    nameObject.firstName = (name[0]);
    nameObject.lastName = (name[1]);
    return nameObject;
}

// console.log(convertNameToObject('Harry Potter')); // {firstName: 'Harry', lastName: 'Potter'}
// console.log(convertNameToObject('Ron Weasley')); // {firstName: 'Ron', lastName: 'Weasley'}

// 8. Write a function named `capitalizeName` that accepts a string that is a first
// and last name separated by a space, and returns a string that that has the
// first and last names capitalized.

// *For this problem, you may assume that the function will only ever be called
// with a string that has two words separated by a single space.*

function capitalizeName(str) {
    str = str.split(" ");
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}


// console.log(capitalizeName('ron weasley'))

// . Write a function named `capitalizeAllNames` that accepts an array of strings
// where each string is in the format described in the previous problem, and
// returns an array of strings where each string contains a capitalized named.

function capitalizeAllNames(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(capitalizeName(arr[i]))
    }
    return newArr;
}

// console.log(capitalizeAllNames(['ron weasley', 'harry potter', 'hermione granger']));
// ['Ron Weasley', 'Harry Potter', 'Hermione Granger']


// Write a function named `countVowels` that accepts a string and returns the
// number of vowels in that string. (Don't worry about or count "y" as a vowel)

function countVowels(str) {
    var vowelsCount = 0;
    var string = str.toString();
    for (var i = 0; i <= string.length - 1; i++) {
        if (string.charAt(i) === "a" || string.charAt(i) === "e" || string.charAt(i) === "i" || string.charAt(i) === "o" || string.charAt(i) === "u") {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}

// function isVowel(letter) {
//     letter = letter.toLowerCase();
//     if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
//         return true
//     } else {
//         return false
//     }
// }
//
// function countVowels(str) {
//    var counter = 0;
//     var strArr = str.split("");
//     strArr.foreach(function(letter){
//         if (isVowel(letter)) {
//             counter++
//         }
//     }); return counter
//
// }

// console.log(countVowels('Hello, Codeup!')); // 5


// Write a function named `averageSales` that accepts an array of objects where
// each object represents a person, and has a `sales` property. The function
// should return the average of every object's `sales` property.

function averageSales(arr) {
    var totalSales = 0;
    var totalEmployees = 0;
    for (var i = 0; i < arr.length; i++) {
        var empSales = parseFloat(arr[i].sales);
        totalSales += empSales;
        totalEmployees += 1;
    }
    return (totalSales / totalEmployees);
}

// console.log(    averageSales([
//     {name: 'Jim Halpert', sales: 100},
//     {name: 'Dwight Schrute', sales: 50},
//     {name: 'Andy Bernard', sales: 150},
// ]));
//     100


// 12. Write a function named `analyzeWord`. It should take in a string and return
// an object with information about the input word. The object returned should
// have the following properties:

// - `word`: the original word that was passed into the function
// - `numberOfLetters`: the number of letters in the word
// - `numberOfVowels`: the number of vowels in the word

function analyzeWord(str) {
    var analyzedWord = {};
    analyzedWord.word = str;
    analyzedWord.numberOfLetters = str.length;
    analyzedWord.numberOfVowels = countVowels(str);
    return analyzedWord;
}


console.log(analyzeWord('codeup'));

// { word: 'codeup', numberOfLetters: 6, numberOfVowels: 3 }

// Write a function named `analyzeAllWords`. It should take in an array of
// strings, and return an array where each element contains an object with the
//     same analysis of the word as described in the previous problem.

function analyzeAllWords(arr) {
    var analyzedWords = [];
    for (var i = 0; i < arr.length; i++) {
        analyzedWords.push(analyzeWord(arr[i]))
    }
    return analyzedWords;
}






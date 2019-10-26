// #Assessment Review
// ###Arrays and Objects
//
// Welcome to your JS 2nd Assessment Review. This will include some things from
// the previous assessments, as well as Array and Object manipulation. Below are
// some practice questions for you to get started.
//
// - Write a function named 'typeOfValue' that takes in a value and returns its
// type.
//
console.log("hello");

function typeOfValue(val) {
    return typeof (val);
}

//     ```$xslt
// console.log(typeOfValue("hello"));// "string"
// console.log(typeOfValue(123));// "number"
// console.log(typeOfValue([])); // "object"
// console.log(typeOfValue([4, 5, 6])); // "object"
// ```
//
// - Write a function 'isPositive' that takes in a number and returns `true` or
//     `false` based on whether the input is positive.

function isPositive(num) {
    return (num > 0)
}

//
//     ```$xslt
// console.log(isPositive(2)); // true
// console.log(isPositive(-4)); // false
// console.log(isPositive(0)); // false
// ```
//
// - Write a function 'removeElement' that takes in an array and a value, and
// returns an Array with the first instance of the indicated value removed.
//
function removeElement(arr, val) {
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] === val) {
            arr.splice(i, 1);
            break;
        }
    }
    return arr
}

//     arr.splice(val - 1, 1);
//     return arr;
//
// }

//     ```$xslt
// console.log(removeElement([1, 2, 3, 4, 5], 4)); // returns [1,2,3,5]
// console.log(removeElement([2, 2, 4, 4, 5], 2)); // returns [2,4,4,5]
// console.log(removeElement([10], 10)); // returns []
// ```
//
// - Write a function 'sumOfNumbers' that takes in an array of numbers and
// returns the sum of all values.
//
function sumOfNumbers(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        var num = parseInt(arr[i]);
        sum += num;
    }
    return sum
}

//     ```$xslt
// console.log(sumOfNumbers([1, 2, 3, 4, 5])); // 15
// console.log(sumOfNumbers([-1, 15])); // 14
// ```
//
// - Write a function 'evensIndex' that takes in an array of numbers and returns
// an array containing the index values of all even numbers.
//

function evensIndex(arr) {
    var evenArrIndex = [];
    for (var i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if (arr[i] % 2 === 0) {
            // console.log(arr[i]);
            evenArrIndex.push(i);
        }

    }
    return evenArrIndex;
}

//     ```$xslt
// console.log(evensIndex([1, 2, 3, 4, 5, 6])); // returns [1,3,5]
// console.log(evensIndex([3, 7, 11, 12])); // returns [3]
// console.log(evensIndex([5, 5, 7, 13])); // returns []
// ```
//
// - Write a function 'stringToArray' that takes in a comma separated list and
// returns it as an array.

function stringToArray(str) {
    var arr = str.split(",");
    return arr;
}

//
//     ```$xslt
// console.log(stringToArray("red,orange,yellow,green,blue")); // returns ['red','orange','yellow','green','blue']
// console.log(stringToArray("1,2,3")); // returns ['1','2','3']
// console.log(stringToArray("dog")); // returns ['dog']
// ```
//
// - Given the following array of objects, write a function 'findUsers' that
// returns
// an
// Array of usernames.
//
//     ```$xslt
var myMac = {};
myMac.users = [
    {
        username: "sophie",
        id: 1
    },
    {
        username: "vivian",
        id: 2
    },
    {
        username: "david",
        id: 3
    }
];


function findUsers(user) {
    var usernames = [];
    for (var i = 0; i < myMac.users.length; i++) {
        usernames.push(myMac.users[i].username);
    }
    return usernames;
}

// console.log(findUsers(myMac.users)); // returns ['sophie','vivian','david']
// ```
//
// - Write a function 'addRole' that accepts the array of objects, then adds the
// property 'role' to each object with a value of 'instructor.' The
// results should look like this:
//
// ```$xslt
// addRole("instructor");
//
// [
//     {
//        username: "sophie",
//        id: 1,
//        role: "instructor"
//     },
//     {
//         username: "vivian",
//         id: 2,
//         role: "instructor"
//     },
//     {
//         username: "david",
//         id: 3,
//         role: "instructor"
//     }
// ];
//
// ```

function addRole(role) {
    for (var i = 0; i < myMac.users.length; i++) {
        // console.log(myMac.users[i]);
        myMac.users[i].role = role;
    }
}

addRole("instructor");

console.log(myMac);



// - Write a function 'countLetters' that takes in a string and a character, and
// counts the number of instances of that character in the string.

function countLetters(str, val){
    var counter = 0;
    // val = val.toLowerCase();
    str = str.toLowerCase();
    for (var i=0; i<=str.length; i++){
        if (str.charAt(i) === val) {
            counter += 1;
        }
    } return counter
}

//
//     ```$xslt
// console.log(countLetters("banana", "a")); // returns 3
// console.log(countLetters("Bob", "b")); // returns 2
// console.log(countLetters("javascript", "x")); // returns 0
// ```
//
// ####BONUS:
//
//     - Write a function 'countAll' that takes in an array of strings and returns an
// array with the count of a character for each string. You may be able to use
// your countLetters function here.

function countAll(arr, val){
    var countingArr = [];
    for (i = 0; i < arr.length; i++) {
        var count = (countLetters(arr[i],val));
        countingArr.push(count);
    } return countingArr
}

//
// ```$xslt
// console.log(countAll(["banana", "html", "java"], "a")); // returns [3,0,2]
// console.log(countAll(["push", "your", "commits"], "u")); // returns [1,1,0]
// ```

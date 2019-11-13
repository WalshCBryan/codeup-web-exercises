const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

// const ones = binary.filter(num => num == true);

const multiLang = users.filter(obj => obj.languages.length >= 3)


console.log(multiLang);

// Use .map to create an array of strings where each element is a user's email address


// let newNumbers = [];
// numbers.forEach(function (number){
//     return newNumbers.push(number + 1);
// });

let emails = [];
function emailList() {
    users.forEach(function (user) {
        emails.push(user.email)
    });
    return emails
}

console.log(emailList());

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const totalYears = users.reduce((total, currentUser) => {
    return total + currentUser.yearsOfExperience;
}, 0);

console.log(totalYears);

//this works... but does not utilize reduce functionality
function totalYears2(obj) {
    let total = 0;
    users.forEach(function (user) {
        total += (user.yearsOfExperience)
    });
    return total
}
console.log(totalYears2());

let averageExp = totalYears / users.length;

console.log(averageExp);


// Use .reduce to get the longest email from the list of users.





// as ternary
// var longest = emails.reduce(function(longestEmail, currentEmail) {
//     return longestEmail.length > currentEmail.length ? longestEmail : currentEmail
// }, '');
//
// console.log(longest);

//standard
var longest = emails.reduce(function(longestEmail, currentEmail) {
    if (longestEmail.length > currentEmail.length) {
        return longestEmail
    } else return currentEmail
}, "");

console.log(longest);

//
// if longestemail.length > currentemail.length {
//     return longestemail
// } else return current email

// ternary syntax
// return (condition) ? returnIfTrue : returnIfFalse


// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// const nameList = users.reduce(function(listOfNames, currentNme))


let listOfNames = "";
function nameList() {
    users.forEach(function (user) {
        listOfNames += (` ${user.name},`)
    });
    return (` your instructors are ${listOfNames}`)
}

console.log(nameList());




let instructors = users.reduce((str, user) => {
    return `${str}, ${user.name}`

}, "your instructors are david s, sophie, vivian, trant ") + ".";

console.log(instructors);




let uniqueLanguages = Array.from(users.reduce((accumulator, user) => {
    user.languages.forEach(language => accumulator.add(language));
    return accumulator;
}, new Set()));

console.log(uniqueLanguages);


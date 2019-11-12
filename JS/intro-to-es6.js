"use strict";

/*********************************************
 *              EXPONENTIATION
 ******************************************** */
// TO DO: We know that the old JS syntax uses this:
//     >> Math.pow(a,b)
//     Using the ES6 exponentiation Operator, refactor the following:


// var x = Math.pow(4,5);
// console.log(x);

// let x = 4 ** 5;
// console.log(x);

//
// const random = Math.floor(Math.random() * (Math.pow(2,3)));
// console.log(random);
//
// let random2 = Math.floor(Math.random() * (2 ** 3));
// console.log(random2);


/*********************************************
 *              let and const
 ******************************************** */
// random = Math.floor(Math.random() * x);
// console.log(random);

// TO DO: Refactor everything above to use es6 variable types.
//     What happens when you change the 'random' variable to a const?

// Why does this happen and how do we fix this behavior?

// TO DO TOGETHER: change the var keyword to const. What do you see in
// the console? Now change it to let and try again.

// const sayHello = "Hello World!";

// sayHello = "Hello Deimos!";
//
// console.log(sayHello);


// TO DO: change var i into let. What are your results?

// var numbers = [1,2,3,4,5];
//
// for(var i = 0; i < numbers.length; i++){
//     console.log(i);
// }
// console.log(i);

/*********************************************
 *              for ... of
 ******************************************** */
    // TO DO TOGETHER: using a for...of loop, console log each element in
    // the array.

const myArray = ["it", "is", "really", "cold", "outside"];

// for...of loops are more similar to forEach loops than for loops

// myArray.forEach(function(element){
//     console.log(element);
// });
//
//
// for(let element of myArray){
//     console.log(element);
// }



//TO DO: using a for ... of loop, iterate over the array of instructors. If
// the instructor is Sophie or David, console log the name.

// const instructors = [
//     'Daniel',
//     'Vivian',
//     'Sophie',
//     'David',
//     'Justin',
//     'Fer',
// ];

// instructors.forEach(function(instructor){
// if (instructor == "Sophie" || instructor === "David") {
//         console.log(instructor);
//     }
// });
//
// for(let instructor of instructors){
//     if (instructor == "Sophie" || instructor === "David") {
//         console.log(instructor);
//     }
// }

const numbers = [1,2,3,4,5,6,7,8];


function evensOnly(arr) {
    let newArray = [];
    for (let number of numbers) {
        if (number % 2 === 0) {
            newArray.push(number)
        }
    } return newArray
}

// console.log(evensOnly(numbers));

/*********************************************
 *              Arrow Functions
 ******************************************** */

// TO DO TOGETHER: refactor this into an arrow function. Be as concise as
// possible.
//

// function add(a,b){
//     return a + b;
// }
//
// const add = (a,b) => {
//     return a + b;
// };

//if logic is only one line, curly braces and return are not necessary
// const add = (a,b) => a + b;




// function square(num){
//     return num * num
// }

//if only one parameter, parentheses are not necessary
// const square = num => num * num;





// TO DO TOGETHER: refactor the following so that variable 'greeting' has a
// default value of 'Good Morning' and 'name' has the value of 'Deimos.
//
//      Check your work.

// const myGreeting = (greeting = 'good morning',name = 'deimos') => {
//     return `${greeting}, ${name}`;
// };
//
// console.log(myGreeting());
// console.log(myGreeting("Hello", "Sophie"));
//
// const guineaPig = 'sputnik';
// const dog = 'bean';
//
// console.log("my pets are " + guineaPig + " and " + dog);
// console.log(`My pets are ${guineaPig} and ${dog}`);

/*********************************************
 *              Objects
 ******************************************** */

// TO DO: Refactor the Object below to use shorthand property assignment

// const mydog = "Spike";
// const cat = "Tom";
// const mouse = "Jerry";
//
// const pals = {
//     dog: mydog,
//     myCat: cat,
//     mouse
// };

const pals = {
    dog: "spike",
    cat: "tom",
    mouse: "jerry"
};

// let myDog = pals.dog;
// let myCat = pals.cat;
// let myMouse = pals.mouse;
//
// console.log(pals);


//if can establish object with this syntax, but ensure the property names match
const {dog, cat, mouse} = pals;

// console.log(pals);


//if property name matches variable, attribute is not necessary
// console.log(pals.myCat);
// console.log(pals.mouse);


// TO DO TOGETHER: Use Object Destructuring to refactor

// const make = 'nissan';
// const model= 'rogue';
// const color = 'white';
//
// const myCar = {
//     make,
//     model,
//     color
// };
//
// const yourCar = {
//     make: 'hyundai',
//     model: 'sonata',
//     color: 'red'
// };

// const carInfo = (car) => {
//     let make = car.make;
//     let model = car.model;
//     console.log(make, model);
// };


// const carInfo = ({make, model}) => {
//     // let make = car.make;
//     // let model = car.model;
//     console.log(` my car is a: ${make} ${model}`);
// };
//
// carInfo(myCar);
// carInfo(yourCar);





//BONUS: Array Destructuring.

const instructors = [
    'Daniel',
    'Vivian',
    'Sophie',
    'David',
    'Justin',
    'Fer',
];


//will give back
const [a,b,c,d] = instructors;
console.log(a);
console.log(b);

const deimosInstructors = [a,b];
const europaInstructors = [c,d];
console.log(europaInstructors);
console.log(deimosInstructors);
console.log(c);
console.log(d);
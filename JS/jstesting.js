// if (true) {
//     let x = 5;
// }
// console.log(typeof x);
//

// function sayHello(name) {
//     return 'Hello, ' + name + '!';
// }



//
// const sayHello = (name) => { 'Hello, ' + name + '!' }
//
// console.log(sayHello('bryguy'));


let numbers = [1, 2, 3, 4, 5];
console.log(numbers.map(n => n * 3));

// const isDivisibleBy3 = n => n % 3 === 0;
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// console.log(numbers.filter(isDivisibleBy3));
// console.log(numbers);

// const p = new Promise((resolve, reject) => {
//     resolve (3);
// });
//
// p.then(result => console.log(result));
// p.catch(error => console.log('An error occured!'));

const p = new Promise((resolve, reject) => {
    return 3;



});

p.then(result => console.log(result));
p.catch(error => console.log('An error occured!'));
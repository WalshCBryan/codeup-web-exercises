"use strict";

//write a function that adds 2 numbers together

       function sumBoth(x) {
            a = 3;
            b = 2;
            return (a+b);
            console.log(a + b);
        }

        function sumAll(X, Y) {
            var sum = X + Y;
            return sum;
        } console.log(sumAll(2, 5));
        console.log(sumAll(1, 8));

//function to return area of triangle given 3 sides, Heron's formula

  function triArea(a, b, c){
      semi = (a + b + c) / 2;
      area =  Math.sqrt(semi * (semi - a) * (semi - b) * (semi - c));
      return (area);
  }

  // console.log(triArea(5,6,7));

//make a function that says hi


  function sayHi() {
      return("hi")
          }

  console.log(sayHi())


// write a function that takes a name and says "hello (name)!"

       function sayHello(name) {
      return ("Hello " + name + " !")
  }

   console.log(sayHello("Bryan"))

//  write a function that returns the first element of an array
//  returns element at index pos 0 (first pos) using x[0]

         function firstElement(x) {
         return x[0];
         }

         console.log(firstElement([4,5,8,5,2]));


// create a function to return the are of an equilateral triangle given a side length

         function eqTriArea(s) {
             return (Math.sqrt(3) / 4 * s * s);
         }
          console.log(eqTriArea(4))


// create a function that concatenates 3 items

        function concat(a, b, c) {
            return(a + " " + b + " " + c + "")
        }
        console.log(concat("how", "are", "you"))

 //create a function that takes in a string and returns the same string with all characters upper case//

        function upperCase(x) {
             return x.toUpperCase();

        }
        console.log(upperCase("pony"))

// function to dfind area of circle given the diameter

        function circleArea(d) {
             var r = d / 2;
             return (Math.PI * r * r);
        }

        console.log(circleArea(5))

//function to find perimeter of quadrilateral given side lengths

        function perimeter (a,b,c,d) {
             return (a + b + c + d)
        }

        console.log(perimeter(1,1,2,2))


        console.log()


// write a function that returns the type of argument

function typeOfArgument(x) {
    return (typeof (x));
}

// console.log(typeOfArgument("abc"));
// console.log(typeOfArgument(123));
// console.log(typeOfArgument(true));
// console.log(typeOfArgument(64));


//write a javascript function that returns true only when passed a positive even number

function isPosEven(x) {
    if (x % 2 == 0 && x > 0) {
        return true
    } else
        return false
}


// console.log(isPosEven(2));
// console.log(isPosEven(-2));
// console.log(isPosEven(5334));
// console.log(isPosEven(10751));
// console.log(isPosEven(0));


// write a function that takes in a number and return true if number is greater than 5

function greaterThanfive() {
    var x = parseInt(prompt("Lemme get a number, I'll check if it's greater than 5!"));
    if (x > 5) { return true
    } else
        return false
}

// console.log(greaterThanfive(1));
// console.log(greaterThanfive(5));
// console.log(greaterThanfive(-5));
// console.log(greaterThanfive(9));


// write a js function that returns the message 'hello there, stranger." alert the return from this function. refactor so that it returns "Hello there,"
// concatenated to an argument. prompt the user to input a string, call the function, and alert the return. refactor so that the function has 'stranger'
// as a default parameter



// var userInput = prompt("What's your name??");
function heyStranger(name="stranger") {
    alert("Hey there, " + name);
}

heyStranger("bryan");

// if no name is passed, should alert "hey there, stranger" but instead alerts "hey there, _______"

// write a js function that accepts an array and returns length of that array

function lengthOfArray(arr) {
    return arr.length;
}

console.log(lengthOfArray([1,2,3,4,5,6,7,8,9]));
console.log(lengthOfArray(["a","b","c","d","e","f"]));
console.log(lengthOfArray([NaN, NaN, "hddhd"]));
console.log(lengthOfArray([]));



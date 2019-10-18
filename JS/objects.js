(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     */

    var person = {};
    person.firstName = "Rick";
    person.lastName = "Sanchez";

    console.log(person.firstName);
    console.log(person.lastName);

    /* Example:
    *  > console.log(person.firstName) // "Rick"
    *  > console.log(person.lastName) // "Sanchez"
    */

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     */

    function sayHello() {
        return "Hello " + person.firstName + " " + person.lastName;
    }

    console.log(sayHello());
    /* Example
    * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
    */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {
            name: 'Cameron',
            amount: 180
        },
        {   name: 'Ryan',
            amount: 250
        },
        {   name: 'George',
            amount: 320
        }
    ];

    shoppers.forEach(function(shopper){
       var discount = shopper.amount * .12;
       var newtotal = shopper.amount - discount;
        if (shopper.amount >= 200) {
            console.log("great, for spending $" + shopper.amount + " you get a discount of $" + discount + ". New total is $" + newtotal);
        } else
            console.log("no discount for you. You still have a bill of $" + shopper.amount);
    });



    // console.log("here are the names of the shoppers");
    // shoppers.forEach(function(shopper) {
    //     console.log(shopper.name);
    // });





    // shoppers.forEach(function(shopper) {
    //     var discount = (shopper.amount * .12).toFixed(2);
    //     var newTotal = (shopper.amount - discount).toFixed(2);
    //     shopper.amount = shopper.amount.toFixed(2);
    //     if (shopper.amount >= 200) {
    //         console.log("Great, your bill is $" + shopper.amount + ". You receive a 12% discount of $" + discount + " which means your new total is $" + newTotal);
    //     } else console.log("Sorry, you have not spent enough to be eligible for the discount. Your total is $" + shopper.amount);
    // });


    // shoppers.forEach(function(shopper) {
    //     shoppers.name.forEach(function(name) {
    //         console.log(name);
    //     });
    // });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     */

    var books = [
        {
            title: "Harry Potter",
            author: {
                firstName: "JK",
                lastName: "Rowling"
            }
        },
        {
            title: "Cat's Cradle",
            author: {
                firstName: "Kurt",
                lastName: "Vonnegut"
            }
        },
        {
            title: "A Clockwork Orange",
            author: {
                firstName: "Anthony",
                lastName: "Burgess"
            }
        },
        {
            title: "The Unknown Self",
            author: {
                firstName: "CG",
                lastName: "Jung"
            }
        },
        {
            title: "Hitchhiker's Guide to the Galaxy",
            author: {
                firstName: "Douglas",
                lastName: "Adams"
            }
        }
    ];


    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);


    /* Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     */
    books.forEach(function(book, index){
        console.log("Book #" + (index + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("~~~~~~~~~~~~~");
    });

    /*
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     */

    function createBook(x,y) {
       var y = y.split(" ");
        books.push({
            title: x,
            author: {
                firstName: y[0],
                lastName: y[1]
            }
        })
    }

    console.log(books);
    createBook("How to Survive a Sharknado", "Andrew Shaffer");
    console.log(books);

    // books.unshift({
    //     title: "How To Survive A Sharknado",
    //     author: {
    //         firstName: "Andrew",
    //         lastName: "Shaffer"
    //     }
    // });
    // console.log(books)

    /* - Create a function named `showBookInfo` that accepts a book object and
    *   outputs the information described above. Refactor your loop to use your
    *   `showBookInfo` function.
    */

    function showBookInfo(book) {
        books.forEach(function(book) {
            console.log(book.title);
            console.log(book.author.firstName + " " + book.author.lastName);
        })
    }

    showBookInfo(books);
})();


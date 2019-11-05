$(document).ready(function () {
    "use strict";
    console.log("Intro to AJAX!");

    /*********************************************
     *              INTRO TO AJAX
     ******************************************** */

    /*
     * TO DO TOGETHER: Let's make our first AJAX request. Generate a new Hookbin
     * endpoint, then query it for a username...
     */

    // console.log($.ajax("https://hookb.in/G9bVBddEGGCdKrm9xnw9"));


    /*
     * TO DO TOGETHER: For this next one, we'll send over some data. Add the
     * following JavaScript Object to your Hookbin AJAX request:
     */

    var person = {
        type: "POST",
        data: {
            first: "Jesse",
            last: "Pinkman",
            location: "unknown"
        }
    };

// good--------------------------------------------------------
//     console.log($.ajax("https://hookb.in/G9bVBddEGGCdKrm9xnw9", person));


    /*
     * TO DO: Refactor the first example using a GET request object instead of
     * appending a query to the url.
     */

    // good--------------------------------------------------------
    var bob = {
        type: "GET",
        data: {
            "username": "Bob"
        }
    };

    // console.log($.ajax("https://hookb.in/G9bVBddEGGCdKrm9xnw9", bob));


    /*********************************************
     *              REQUESTS and RESPONSES
     ******************************************** */
    var starWars = $.ajax("https://swapi.co/api/films");

    /*
     * TO DO TOGETHER: Now, let's see how we can use AJAX requests to communicate with an
     * API and get data back. Uncomment the line below.
     */

    // good--------------------------------------------------------
    // $.ajax("https://pokeapi.co/api/v2/pokemon").done(function(data){
    //     console.log(data);
    // });

    // good--------------------------------------------------------
    // $.ajax("https://swapi.co/api/films").done(function(data){
    //     console.log(data);
    // });

    /*
     * TO DO: Look up the Star Wars API and make a similar request that would
     * return a list of all Star Wars films.
     */


    // good--------------------------------------------------------
    // $.ajax("https://swapi.co/api/films").done(function(data){
    //     console.log(data);
    // }).fail(function(jqXhr, status){
    //     console.log("you've been blocked");
    //     console.log(jqXhr);
    //     console.log(status);
    // }).always(function(){
    //     console.log("loading...");
    // });

    /*
     * That's fine and dandy, but what if we have a local JSON file and
     * want to request data from that? We can! The URL will be the path to
     * the JSON file.
     *
     * TO DO TOGETHER: Let's make a request to the books inventory we saved
      * previously.
     */

    var myBooks = $.ajax("data/books.json");

    // good--------------------------------------------------------
    // pre written functions for action on success, failure, and always behaviors
    // function onSuccess(data) {
    //     console.log(data);
    // }
    //
    // function onFail(jqXhr) {
    //     console.log("check your file path");
    // }
    //
    // function forAlways() {
    //     console.log("looking...");
    // }

    // good--------------------------------------------------------
    // myBooks.done(onSuccess);

    /*
     * TO DO TOGETHER: What if we want to display a message if this AJAX request
     * fails?
     */

    // good--------------------------------------------------------
// myBooks.done(onFail);

    /*
     * TO DO TOGETHER: How about a function that always runs whether the request
     * fails or not?
     */

    // good--------------------------------------------------------
// myBooks.done(forAlways);

    /*
     * TO DO: Refactor your Star Wars API request to log a message that says
     * "Something wrong with your request..." if it fails.
     */

    // good--------------------------------------------------------
    // starWars.fail(onFail);

    /*
     * TO DO: Refactor your Star Wars API request to log a message that says
     * "...loading" whether the request fails or not.
     */

    // good--------------------------------------------------------
    // starWars.always(forAlways);

    /*
     * TO DO TOGETHER: Create a Star Wars API request that queries for "A
     * New Hope" and store this request in a variable.
     *
     * Take a look at the object that is being returned. Write a console log
      * that displays the director of the film.
     */

    var newHope = $.ajax("https://swapi.co/api/films", {
        type: "GET",
        data: {
            "search": "A New Hope"
        }
    });

    // good--------------------------------------------------------
    newHope.done(function(data){
        console.log("The director of A New Hope is : " + data.results[0].director);
    });

    /*
     * TO DO: Create a new variable that makes a similar request. Search for
     * "The Force Awakens" and console log its release date.
     */

    var forceAwakens = $.ajax("https://swapi.co/api/films", {
        type: "GET",
        data: {
            "search": "The Force Awakens"
        }
    });


    // good--------------------------------------------------------

    forceAwakens.done(function(data){
        console.log("The Force Awakens was released on : " + data.results[0].release_date);
    });

    /*
     * TO DO: Make a request to books.json. Return the author of "The
     * Canterbury Tales."
     */
    var canterburyTales = $.get("data/books.json");

    canterburyTales.done(function (data) {
        var theAuthor;
        for (var i = 0; i < data.length; i++) {
            if (data[i].author === "Geoffrey Chaucer") {
                theAuthor = data[i].author;
            }
        }
        console.log("The author of the Canterbury Tales is : " + theAuthor);
    });


    /*********************************************
     *              GET and POST SHORTHAND
     ******************************************** */

    /*
     * TO DO TOGETHER: Let's take a look at our AJAX requests so far and see
     * how we can refactor them with the GET and POST shorthand.
     *
     * Remember, this isn't necessary. It's up to you to decide which
     * syntax to use. (: At the end of the day, what we are doing is making
     * a request to a server!
     */

    /*
     * TO DO TOGETHER: There's some additional refactoring we can do. We can
     * break up our callback methods on an AJAX request.
     *
     * We can also declare named functions to pass in to these methods.
     */

    /*********************************************
     *              AJAX and HTML
     ******************************************** */

    /*
     * TO DO TOGETHER: Make a request to books.json and append all book
     * titles to your html. You may need to create a div and assign a
     * class/id to target it.
     */

    /*
     * TO DO: Add your favorite book to the end of books.json.
     */


    function generateBooks() {
        var myBooks = $.ajax("data/books.json");

        myBooks.done(function (data) {
            // console.log(data);
            //parses through each object in json
            $.each(data, function (index, book) {
                //logs individual book data
                // console.log(data[index]);
                //formatting 'content' so can append stylized content to main
                var content = "<h2>";
                content += book.title;
                content += "</h2>";
                content += "<h4>";
                content += book.author;
                content += "</h4>";
                //test log
                // console.log(content);
                //appends stylized content to $("#main")
                $("#main").append(content);
            })
        });
        myBooks.fail(function (data) {
            console.log("Something went wrong.");
        });
    }

    generateBooks();


    $('#refresh').click(function () {
        // reset my html to empty string
        $('#main').html("");
        // call function to append new book list
        generateBooks();
    });
    /*
     * Bonus: Create a button the refreshes the contents of your html
     * without refreshing the page.
     */

});
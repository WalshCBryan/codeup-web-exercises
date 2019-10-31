"use strict";

$(document).ready(function () {
    //jQuery Docs ==> https://api.jquery.com/

    /**********************************************
     *        ** General Selector Syntax **
     *********************************************/
    // $('selector')


    /**********************************************
     *            ** jQuery Methods **
     *********************************************/

    // .html: returns the HTML contents of selected element or the first element in a collection. Similar to the innerHTML property we previously covered.
    // .css: allows us to change CSS properties for a given element or elements. Similar to the style property previously discussed.


    /**********************************************
     *            ** ID Selector **
     *********************************************/
    // $('#some-id');

    // TODO TOGETHER: Select the contents/html of the id 'book-welcome' and set equal to the variable 'contents'. Console.log the contents

    // var contents = $("#book-welcome").html();
    // console.log(contents);

    // TODO TOGETHER: Change the background color of the id 'book-welcome'

    $("#book-welcome").css({"background-color":"lightgray", "color":"black"});

    // TODO: Select the contents/html of the id 'book-bundle-one' and set equal to the variable 'bookBundle'. Console.log the contents

    var bookbundle = $("#book-bundle-one").html();
    console.log(bookbundle);


    // TODO: Change one css property of the id 'container'

    $("#container").css({"font-family":"monospace", "background-color":"black","color":"white", "font-size": "1.25em"});


    /**********************************************
     *            ** CLASS Selector **
     *********************************************/
    // $('.some-class');

    // TODO TOGETHER: Change the font size of all the .main-headings

    $(".main-headings").css("font-size","3rem");


    // TODO: Explore the following JS Bin example:
    //  https://jsbin.com/topupe/1/edit?js,output


    // TODO BONUS: Add additional class names to the page, and practice changing the css or viewing the contents


    $("#test").html("<h1>hello, this message is generated from Jquery</h1>");
    $("#book-genre-list").css("list-style-type","katakana");
    $("#book-bundle-list").css("list-style-type","hiragana");



    /**********************************************
     *            ** ELEMENT Selector **
     *********************************************/
    //	$('tag_name')

    // TODO TOGETHER: Change the background color of all paragraph tags

    $("p").css("background-color","orange");


    // TODO: Explore the following JS Bin example:
    //  https://jsbin.com/gayir/1/edit?js,output


    // TODO BONUS: Add additional elements to the page, and practice changing the css or viewing the contents

    $("li").css({"background-color":"gray", "display":"inline-block"});


    /**********************************************
     *            ** MULTIPLE Selector **
     *********************************************/
    // $("selector1, selector2, ...")


    // TODO TOGETHER: Change the background color of id 'mystery-genre' and 'book-bundle-three' to red

    $("#mystery-genre, #book-bundle-three").css("background-color","red");


    // TODO: Explore the following JS Bin example:
    //  https://jsbin.com/qejeli/1/edit?output


    // TODO BONUS: Add additional elements to the page with ids and classes, and practice changing the css or viewing the contents




    /**********************************************
     *            ** THE ALL Selector **
     *********************************************/
    // $('*')
    // A common use is to put a border around every element to help see the layout of a page.

    // TODO TOGETHER: Create a border around all elements

    function changeBorder() {
        $("*").css({"border": "6px solid bisque"});
    }

    function changeBorderBack() {
        $("*").css({"border": "0px solid bisque"});
    }
    $("#book-welcome").on("click", changeBorder);
    $("#mystery-genre").on("click", changeBorderBack);



    $("title").css("display","inline-block");


    // TODO: Explore the following JS Bin example:
    //  https://jsbin.com/fivucu/1/edit?js,output


$("#book-genre-list")

});
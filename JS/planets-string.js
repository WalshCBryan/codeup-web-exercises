(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    // planetsArray = planetsString.split('|')
    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */
// planetsString = planetsArray.join('<br>');
//     console.log(planetsString);


    /*
    * BONUS:
    * Create another string that would display your planets in an undordered
    * list. You will need an opening AND closing <ul> tags around the entire
    * string, and <li> tags around each planet.
    */


    // for (var i = 0; i < planetsArray.length; i++) {
    //     planetsArray[i].unshift('<li>');
    //     planetsArray[i].push('</li>');
    // }


    planetsArray = planetsString.split('|');
    planetsString = planetsArray.join(' </li> <li>');
    planetsArray = planetsString.split(" ");

    planetsArray = planetsString.split(',')
  var done = ("<ul style='list-style-type: none; border: 1px solid black; border-radius: 5px; display: inline-block; background-color: lightgray; padding: '> <li> " + planetsString + " </li> </ul>");
    console.log(done);
    document.write(done);



})();

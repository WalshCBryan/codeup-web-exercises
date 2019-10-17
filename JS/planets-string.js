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


    console.log(planetsString);
    planetsArray = planetsString.split('|');
    planetsString = planetsArray.join(' </li> <li>');
    console.log(planetsString);
    planetsArray = planetsString.split(" ");
    // console.log(planetsArray);
    // planetsArray.unshift('<ul> \n <li>');
    // planetsArray.push('</li> \n </ul>');
    console.log(planetsArray);
    planetsArray = planetsString.split(',')
    console.log("<ul> <li> " + planetsString + " </li> </ul>");

    // planetsArray = planetsString.split(',')
    // console.log(planetsString);


    // console.log(planetsString);



    // planetsString = planetsArray.join(', ');
    // planetsArray.unshift('<ul>');
    // planetsArray.push('</ul>');

    // console.log(planetsArray);


})();

// 2 through 65536

var i = 1;

 while (i <= 16) {
     console.log(Math.pow(2,i));
     i++;
 }
 // console.log("loop is done");

// This is how you get a random number between 50 and 100n(outside of loop)
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5 (inside do-while loop)
// var coneSale = Math.floor(Math.random() * 5) + 1;

//    5 cones sold...  // if there are enough cones
//    Cannot sell you 6 cones I only have 3...  // If there are not enough cones
//    Yay! I sold them all! // If there are no more cones

//tracks allcones-conessold

// while (allCones > 0 && allCones > coneSale){
//     allCones -= coneSale;
//     console.log("you sold " + coneSale + " cones.");
// }


// var allCones = Math.floor(Math.random() * 50) + 50;


// do {
//     var coneSale = Math.floor(Math.random() * 5) + 1;
//     console.log("you sold " + coneSale + " cones.");
//     allCones -= coneSale;
// }
// while (allCones > 0);

// function sellingCones() {
//     do {
//         var coneSale = Math.floor(Math.random() * 5) + 1;
//         allCones -= coneSale;
//         console.log("You sold " + coneSale + " cones. You have " + allCones + " left");
//         if (coneSale > allCones) {
//             console.log("You cannot sell " + coneSale + ", You only have " + allCones + " left.")
//         } else if (allCones - coneSale < 0) {
//             console.log("You cannot sell " + coneSale + ", You only have " + allCones + " left.")
//         }
//
//     } while (allCones > 0);
//     console.log("You sold all of your cones!!");
// }


function sellingCones() {
    do {
        var coneSale = Math.floor(Math.random() * 5) + 1;
        if (allCones >= coneSale) {
            allCones -= coneSale;
            console.log("You sold " + coneSale + " cones. You have " + allCones + " left");
        } else if (coneSale > allCones || allCones - coneSale < 0) {
            console.log("You cannot sell " + coneSale + ", You only have " + allCones + " left.")
        }
    } while (allCones > 0);
    console.log("You sold all of your cones!!");
}



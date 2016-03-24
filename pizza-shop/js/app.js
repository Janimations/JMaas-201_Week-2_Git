//Jmaas Week-2 Tuesday Lab Assignment:
// ****** PIZZA SHOP ******* //

// functions:

var pizzaRandom = function (min, max) {
    var x = (Math.random() * (max - min + 1)) + min;
    return Math.floor(x);
};


// pizzaShop Object-Constructor:

function pizzaShop(shopName) {

    this.shopName = shopName;

    this.openingHours = function () {                           // makes hours-array with strings: ["8 am", "9 am", .....]
                            var shopHours = [];
                            for (var i = 8; i < 27; i++) {
                                if (i < 13){
                                    shopHours.push(i + " am");
                                } else if (i > 12 && i < 25){
                                    shopHours.push((i -12) + " pm");
                                } else {
                                    shopHours.push((i - 24) + " am");
                                };

                            }
                            return shopHours;
                        };

    this.pizzaRange = [                         // index: 0 = pizzas min, 1 = pizzas max, 2 = deliveries min, 3 = deliveries max
                        [0, 4, 0, 4], // 8 am
                        [0, 4, 0, 4], // 9 am
                        [0, 4, 0, 4], // 10 am

                        [0, 7, 0, 4], // 11 am
                        [0, 7, 0, 4], // 12 am
                        [0, 7, 0, 4], // 1 pm

                        [2, 15, 1, 4], // 2 pm
                        [2, 15, 1, 4], // 3 pm
                        [2, 15, 1, 4], // 4 pm

                        [15, 35, 3, 8], // 5 pm
                        [15, 35, 3, 8], // 6 pm
                        [15, 35, 3, 8], // 7 pm

                        [12, 31, 5, 12], // 8 pm
                        [12, 31, 5, 12], // 9 pm
                        [12, 31, 5, 12], // 10 pm

                        [5, 20, 6, 11], // 11 pm
                        [5, 20, 6, 11], // 12 pm
                        [5, 20, 6, 11] // 1 am
                    ];

    this.pizzaGenerator = function () {                                                             // use 'this' because makePizzas() is called INSIDE of the pizzaShop Constructor!
                            var pizzasArray = [];
                                for (var i = 0; i < this.pizzaRange.length; i++) {
                                    pizzasArray.push(pizzaRandom(this.pizzaRange[i][0], this.pizzaRange[i][1]));  //make tihs the max for deliveries
                                }
                            return pizzasArray;
                        };

    this.totalPizzas = function () {
                            var baked = 0;
                            for (var i = 0; i < this.pizzasMade.length; i++){
                                baked += this.pizzasMade[i];
                            }
                            this.total = baked;
                            return baked;
                        };

    this.deliveriesGenerator = function () {            // makes this.deliveries property below
                            var deliveriesArray = [];
                                for (var i = 0; i < this.pizzaRange.length; i++) {
                                    deliveriesArray.push(pizzaRandom(this.pizzaRange[i][2], this.pizzasMade[i]));  // this.pizzas is a property made from pizzasMade() that is called below - it is the max for deliveries...
                                }
                            return deliveriesArray;
                        };

    this.driversNeeded = function () {
                            var driversNeededArray = [];
                                for (var i = 0; i < this.pizzaRange.length; i++) {
                                    var y = this.deliveries[i] / 3;
                                    driversNeededArray.push(Math.ceil(y));
                                };
                            return driversNeededArray;
                         };

    this.Timeslots = function () {
                            // make Array for the wholed day:
                            wholeDayArray = this.openingHours;

                            // take data from pizzasMade, deliveries and driversNeeded and push them into each index of wholeDayArray:
                            for (var i = 0; i < wholeDayArray.length; i ++) {
                                wholeDayArray[i].push(this.pizzasMade[i]);
                                wholeDayArray[i].push(this.deliveries[i]);
                                wholeDayArray[i].push(this.drivers[i]);
                                }
                            return wholeDayArray;
                      };

};

// // ShopData Object-Constructor:   //
//
// function shopData(location) {
//
//     this.location = location;
//
//     this.monday = function () {
//
//     };
//     this.tuesday = function () {
//
//     };
//     this.wednesday = function () {
//
//     };
//     this.thursday = function () {
//
//     };
//     this.friday = function () {
//
//     };
//     this.Saturday = function () {
//
//     };
//     this.Sunday = function () {
//
//     };
//     this.weekTotal = function () {
//
//     };
//
//     this.weekAverage = function () {
//
//     };
//
// };  // shopData close

// allShopsData  Object:

//  var allShopsData = {
//     mondayAverage = function () {
//     },
//     tuesdayAverage = function () {
//     },
//     wednesdayAverage = function () {
//     },
//     thursdayAverage = function () {
//     },
//     fridayAverage = function () {
//     },
//     SaturdayAverage = function () {
//     },
//     SundayAverage = function () {
//     },
//     weekAverage = function () {
//     }
// }  // allShopsData close


// call new pizzaShop Instances and add to shopArray:

var shopArray = [];

var Beaverton = new pizzaShop("Beaverton");
    shopArray.push(Beaverton);

var Hillsboro = new pizzaShop("Hillsboro");
    shopArray.push(Hillsboro);

var Downtown = new pizzaShop("Downtown");
    shopArray.push(Downtown);

var NorthEast = new pizzaShop("NorthEast");
    shopArray.push(NorthEast);

var Clackamas = new pizzaShop("Clackamas");
    shopArray.push(Clackamas);

var PDXairport = new pizzaShop("PDXairport");
    shopArray.push(PDXairport);

console.log('ShopArray: ' + shopArray);
console.log('shopArray[2].shopName = "Downtown" : ' + shopArray[2].shopName);


var Hamburg = new pizzaShop("Hamburg");
Hamburg.pizzasMade = Hamburg.pizzaGenerator();
Hamburg.totalPizzas();
Hamburg.deliveries = Hamburg.deliveriesGenerator();
Hamburg.drivers = Hamburg.driversNeeded();



console.log(Hamburg);
console.log('openingHours: ' + Hamburg.openingHours());
console.log('pizzasMade: ' + Hamburg.pizzasMade);          // Array  // IMPORTANT! creates Hamburg.pizzas property befoere it is called in .deliveries
console.log('deliveries: ' + Hamburg.deliveries);
console.log('total: ' + Hamburg.total);                     //  Array
console.log('drivers: ' + Hamburg.drivers);                   // Array



// push pizzaShop object data to storeList in INDEX.html:   later Table:





// push pizzaShop object data to storeList in DATA.html:   later Table:

        // create <div>s with id's (from Array) in DATA.html.

        // link tables for each shop-Object into the <div - id's>

        //

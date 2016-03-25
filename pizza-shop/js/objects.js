//Jmaas Week-2 Thursday Lab Assignment:
// ****** PIZZA SHOP ******* //

/***********************************************
              // OBJECTS : //
***********************************************/

var makeShopArray = ["Beaverton", "Hillsboro", "Downtown", "NorthEast", "Clackamas", "PDXairport"];

// functions:

var pizzaRandom = function (min, max) {
    var x = (Math.random() * (max - min + 1)) + min;
    return Math.floor(x);
};


// pizzaShop Object-Constructor:

function pizzaShop(shopName) {

    this.shopName = shopName;

    this.days = ["tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]; // Monday = closed

    this.OpenClose = [8, 26];       // individual shop hours changed here:

    this.makeOpeningHours = function () {                           // makes hours-array with strings: ["8 am", "9 am", .....]
                                var shopHours = [];
                                for (var i = this.OpenClose[0]; i < this.OpenClose[1]; i++) {
                                    if (i < 13){
                                        shopHours.push(i + " am");
                                    } else if (i > 12 && i < 25){
                                        shopHours.push((i -12) + " pm");
                                    } else {
                                        shopHours.push((i - 24) + " am");
                                    };

                                }
                                this.openingHours = shopHours;  // Array based on OpenClose times
                            };
    // re-define pizzaRange with a new Array if OpenClose changes !!!
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
                            this.pizzasMade = pizzasArray;
                        };

    this.totalPizzas = function () {
                            var baked = 0;
                            for (var i = 0; i < this.pizzasMade.length; i++){
                                baked += this.pizzasMade[i];
                            }
                            this.total = baked;
                        };

    this.deliveriesGenerator = function () {            // makes this.deliveries property below
                            var deliveriesArray = [];
                                for (var i = 0; i < this.pizzaRange.length; i++) {
                                    deliveriesArray.push(pizzaRandom(this.pizzaRange[i][2], this.pizzasMade[i]));  // this.pizzas is a property made from pizzasMade() that is called below - it is the max for deliveries...
                                }
                            this.deliveries = deliveriesArray;
                        };

    this.makeDrivers = function () {
                            var driversNeededArray = [];
                                for (var i = 0; i < this.pizzaRange.length; i++) {
                                    var y = this.deliveries[i] / 3;
                                        if (y < 1) {
                                            driversNeededArray.push(' --- no drivers needed --- ')
                                        } else {
                                            driversNeededArray.push(' --- DRIVERS: ' + Math.ceil(y) + ' --- ');
                                        };
                                };
                            this.drivers = driversNeededArray;
                         };

    this.makeTimeslots = function () {                                              // take data from pizzasMade, deliveries and driversNeeded and push them into each index of this.openingHours:

                            var wholeDayArray = [];
                            for (var i = 0; i < this.openingHours.length; i ++) {
                                var oneTimeslot = [];
                                oneTimeslot.push(this.openingHours[i]);
                                oneTimeslot.push(this.pizzasMade[i]);
                                oneTimeslot.push(this.deliveries[i]);
                                oneTimeslot.push(this.drivers[i]);

                                wholeDayArray.push(oneTimeslot);
                                }
                            this.timeslots = wholeDayArray;
                      };
    this.makeShopInfo = function () {
                            var shopInfoArray = [];
                            shopInfoArray[0] = this.shopName;
                            shopInfoArray[1] = this.openingHours[0] + " - " + (this.openingHours[17]);
                            shopInfoArray[2] = "Tuesday - Sunday";

                            this.shopInfo = shopInfoArray;
                      };
}; // pizzaShop constructor close



// call new pizzaShop Instances and add to shopArray:

var shopArray = [];

var Beaverton = new pizzaShop("Beaverton"); // [0]
    shopArray.push(Beaverton);

var Hillsboro = new pizzaShop("Hillsboro"); // [1]
    shopArray.push(Hillsboro);

var Downtown = new pizzaShop("Downtown"); // [2]
    shopArray.push(Downtown);

var NorthEast = new pizzaShop("NorthEast"); // [3]
    shopArray.push(NorthEast);

var Clackamas = new pizzaShop("Clackamas"); //[4]
    shopArray.push(Clackamas);

var PDXairport = new pizzaShop("PDXairport"); //[5]
    shopArray.push(PDXairport);



// shopDataWeek Object:  (literal notation)
// generates data for each day of the week:

 var shopDataWeek = {
    // gets total from all shops that day:
    makeMondayData: function () {
        // first call all methods in pizzaShop-Objects to "make" one day's worth of pizzas:
        for (var i = 0; i < shopArray.length; i++) {
            // the order is important!
            shopArray[i].makeOpeningHours();
            shopArray[i].pizzaGenerator();
            shopArray[i].deliveriesGenerator();
            shopArray[i].makeDrivers();
            shopArray[i].makeTimeslots();
            shopArray[i].makeShopInfo();
            shopArray[i].totalPizzas();
        };
        // then collect all totals from all pizzaShop-Objects:
        var monday = 0;
        for (var i = 0; i < shopArray[i].openingHours.length; i++) {      // shopArray[i].openingHours.length = in case i ndividual shop hours change they will have a different amount of timeslots
            monday += shopArray[i].total;
        };
       shopDataWeek.mondayTotal = monday;
   },  //makeMondayTotal close


    // makeWeekTotal: function () {
    //     // collect all day-totals from (inside)shopDataWeek:
    //     var total = 0;
    //     var weekDays = ["mondayTotal", "tuesdayTotal", "wednesdayTotal", "thursdayTotal", "fridayTotal", "saturdayTotal", "sundayTotal"];
    //     for (var i = 0; i < weekDays.length; i++) {
    //         if (shopDataWeek.hasOwnProperty(weekDays[i])) {
    //             total +=
    //         };
    //
    //     };
    //
    //     shopDataWeek.weekTotal = total;
    // };  // makeWeekTotal close
};  // shopDataWeek close


    // calculate average across shops:

    // makeMondayAverage = function () {
    // },
    //
    // makeWeekAverage = function () {
    // }







/*********************************************
        // TESTING OBJECT DATA: //
*********************************************/

// console.log('NorthEast: shopName: ' + shopArray[3].shopName);
// console.log('NorthEast: pizzasMade: ' + shopArray[3].pizzasMade);
//
// var Hamburg = new pizzaShop("Hamburg");
//
// Hamburg.makeOpeningHours();
// Hamburg.pizzaGenerator();
// Hamburg.deliveriesGenerator();
// Hamburg.makeDrivers();
// Hamburg.makeTimeslots();
// Hamburg.totalPizzas();
//
//
//
// console.log(Hamburg);
// console.log('openingHours: ' + Hamburg.openingHours);
// console.log('pizzasMade: ' + Hamburg.pizzasMade);
// console.log('deliveries: ' + Hamburg.deliveries);
// console.log('drivers: ' + Hamburg.drivers);
// console.log('timeslots: ' + Hamburg.timeslots);
// console.log('total: ' + Hamburg.total);

/****************************************************
****************************************************/

console.log('randZZZ = ' + pizzaRandom(0,5));

//Jmaas Week-2 Thursday Lab Assignment:
// ****** PIZZA SHOP ******* //

/***********************************************
              // OBJECTS : //
***********************************************/

// function that makes a new "makeShopArray" item out of a form:


var stats = [
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


var makeShopArray = [
    [
        "Beaverton",                                                        // name: [0]
        "18560 SW Farmiington Rd., Beaverton, OR 97005, 503-649-3030",       // address: [1]
        [8, 26],                                                            // openClose: [2]
        ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], // days: [3]
        stats                                                         // stats: [4]
    ],
    [
         "Hillsboro",
         "337 E Main St., Hillsboro, OR 97123, 503-693-7953",
         [8, 26],
         ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
         stats
    ],
    [
         "Downtown",
         "732 SW Yamhill St., Portland, OR 97205, 971-703-4153",
         [8, 26],
         ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
         stats
    ],
    [
         "NorthEast",
         "4935 NE 42nd ave., Portland, OR 97218, 503-288-4899",
         [8, 26],
         ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
         stats
    ],
    [
         "PDXairport",
         "7000 NE Airport Way, Portland, OR 97218, 971-230-7090",
         [8, 26],
         ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
         stats
    ]
];  // makeShopArray close


// MIN-MAX statsArray:



// call new pizzaShop and PizzaShopData Instances and add to shopArray:

var shopArray = [];   // --- THIS IS WHERE pizzaShop OBJECTS LIVE ---

for (var i = 0; i < makeShopArray.length; i++) {

                                // name [0]         // Address [1]       // openCloseArray [2]  // daysArray [3]    //  statsArray [4]
    shopArray[i] = new pizzaShop(makeShopArray[i][0], makeShopArray[i][1], makeShopArray[i][2], makeShopArray[i][3], makeShopArray[i][4]);
};



// functions:

function pizzaRandom(min, max) {
    var x = (Math.random() * (max - min + 1)) + min;
    return Math.floor(x);
};



// PIZZA-SHOP CONSTRUCTOR:

// features:    - adjustable hours                          (changes amount of timeslots)
//              - adjustable days open                      (data from that day will not be generated if that day is not in this.days array)
//              - can be given differernt max-min stats     (Array-format) also through user input (Form on data.html page)

function pizzaShop(name, address, openCloseArray, daysArray, statsArray) {

    this.shopName = name;  // shopName = Location
    this.shopAddress = address;

    this.days = daysArray;

    this.OpenClose = openCloseArray;       // individual shop hours changed here:

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

    this.pizzaRange = statsArray;

    this.pizzaGenerator = function () {
                            var pizzasArray = [];
                                for (var i = 0; i < this.openingHours.length; i++) {
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
                                for (var i = 0; i < this.openingHours.length; i++) {
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
                            shopInfoArray[2] = this.days[0] + " - " + this.days[this.days.length -1];       //  this.days.length -1  is always the last index-item in the array

                            this.shopInfo = shopInfoArray;
                      };
    this.populateOject = function () {
                            for (var i = 0; i < makeShopArray.length; i++) {
                                // the order is important!
                                this.makeOpeningHours();
                                this.pizzaGenerator();
                                this.deliveriesGenerator();
                                this.makeDrivers();
                                this.makeTimeslots();
                                this.makeShopInfo();
                                this.totalPizzas();
                            };
                        };
    this.populateOject();    // calls populateOject() once during the initial creation of the pizzaShop-Object

}; // pizzaShop constructor close




// shopDataWeek Object:  (literal notation)
// generates data for each day of the week:

 var shopDataWeek = {

    // creates data for ALL pizzaShops that day:

        makeDayData: function (weekDay, pizzaShopName) {    // weekDay = a string from this.days Array

            // first call all methods in all pizzaShop-Objects to "make" one day's worth of pizzas:
            for (var i = 0; i < shopArray.length; i++) {
                if (shopArray[i].days.indexOf(weekDay) > 0) {
                // the order is important!
                shopArray[i].makeOpeningHours();
                shopArray[i].pizzaGenerator();
                shopArray[i].deliveriesGenerator();
                shopArray[i].makeDrivers();
                shopArray[i].makeTimeslots();
                shopArray[i].makeShopInfo();
                shopArray[i].totalPizzas();
                }
            };

            var oneday = [weekDay, 0];                        // weekday identifies the data set for that weekday...
            var allShopsOneDay = [weekday];

            for (var i = 0; i < shopArray.length; i++) {    // then collect all totals from all pizzaShop-Objects that day - if they are open.

                if (shopArray[i].days.indexOf(weekDay) > 0) {       // if weekday is found in this.days array
                    oneday[0] += shopArray[i].total;

                    allShopsOneDay[i+1] = pizzaShopName;            // adds the name of the pizza shop before all the timeslots at index[0]
                    allShopsOneDay[i] = shopArray[i].timeslots;     // makes a 3D Array in allShopsMonday out of each shop's timeslots-sets...
                }
            };

            this.oneDayAllShopsTotal = oneday;
            this.oneDayAllShopsTimeslots =                // stores all shops data under week-Day, (as opposed to each weekday data under shop)


        },  //makeDayData close

        makeWeekData: function (){

            for (var i = 0; i < shopArray.length; i++) {

                for (var x = 0; x < shopArray[x].days.length; x++) {                // in case a shop is open less than 6 days a week...

                } // 1st for-loop
            } // 2nd for-loop


        }, // makeWeekData close









   }; //  shopDataWeek close




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
//};  // shopDataWeek close


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
// var Hamburg = new pizzaShop(makeShopArray[0][0], makeShopArray[0][1], makeShopArray[0][2], makeShopArray[0][3], makeShopArray[0][4]);
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

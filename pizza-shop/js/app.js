//Jmaas Week-2 Tuesday Lab Assignment:
// ****** PIZZA SHOP ******* //

// functions:

var pizzaRandom = function (min, max) {
    var x  = math.floor(math.random() * ((max+1) - min))
    return x;
};


// pizzaShop Object-Constructor:

function pizzaShop(location) {
    this.location = location;
    this.openingHours = function () {   // makes hours-array with strings: ["8 am", "9 am", .....]
                            var hours = [];
                            for (var i = 8; i < 26; i++) {
                                if (i < 13){
                                    hours.push(i + " am");
                                } else if(i > 12){
                                    hours.push(i + " pm");
                                } else {
                                    hours.push(i + " am");
                                };
                            return hours
                            }
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
                        [5, 20, 6, 11], // 1 am
                    ];

    this.pizzasMade = function () {                     // use 'this' because makePizzas() is called INSIDE of the pizzaShop Constructor!
                            var pizzasArray = [];
                                for (var i = 0; i < this.pizzaRange.length; i++) {
                                    pizzasArray.push(pizzaRandom(this.pizzaRange[i][0], this.pizzaRange[i][1]) );  //make tihs the max for deliveries
                                }
                            return pizzasArray;
                        };
    this.deliveries = function () {
                            var deliveriesArray = [];
                                for (var i = 0; i < this.pizzaRange.length; i++) {
                                    deliveriesArray.push(pizzaRandom(this.pizzaRange[i][2], this.pizzasMade[i]) );  // index[i] from pizzasMade is the max for deliveries...
                                }
                            return deliveriesArray;
                        };
    this.driversNeeded = function () {
                            var driversNeededArray = [];
                                for (var i = 0; i < this.deliveries.length; i++) {
                                    driversNeededArray.push(math.ceiling(this.deliveries[i] / 3));
                         };

    this.Timeslots = function () {
                            // make Array for the wholed day:
                            wholeDayArray = this.openingHours;

                            // take data from pizzasMade, deliveries and driversNeeded and push them into each index of wholeDayArray:
                            for (var i = 0; i < wholeDayArray.length; i ++) {
                                wholeDayArray[i].push(this.pizzasMade[i]);
                                wholeDayArray[i].push(this.deliveries[i]);
                                wholeDayArray[i].push(this.driversNeeded[i]);
                                }
                            return wholeDayArray;
                      };

}; // pizzaShop close



// call new pizzaShop Instances and add to shopArray:

var shopArray = [];


// push pizzaShop object data to storeList in INDEX.html:   later Table:



// push pizzaShop object data to storeList in DATA.html:   later Table:

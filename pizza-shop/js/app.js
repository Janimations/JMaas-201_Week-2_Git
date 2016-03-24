//Jmaas Week-2 Wednesday Lab Assignment:
// ****** PIZZA SHOP ******* //

// functions:

var pizzaRandom = function (min, max) {
    var x = (Math.random() * (max - min + 1)) + min;
    return Math.floor(x);
};


// pizzaShop Object-Constructor:

function pizzaShop(shopName) {

    this.shopName = shopName;

    this.OpenClose = [8, 26];       // individual shop hours changed here:

    this.makeOpeningHours = function (this.OpenClose[0], this.OpenClose[1]) {                           // makes hours-array with strings: ["8 am", "9 am", .....]
                                var shopHours = [];
                                for (var i = open; i < close; i++) {
                                    if (i < 13){
                                        shopHours.push(i + " am");
                                    } else if (i > 12 && i < 25){
                                        shopHours.push((i -12) + " pm");
                                    } else {
                                        shopHours.push((i - 24) + " am");
                                    };

                                }
                                this.openingHours = shopHours;
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
                                    driversNeededArray.push(Math.ceil(y));
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
    makeMondayTotal: function () {
        // first call all methods in pizzaShop-Objects to "make" one day's worth of pizzas:
        for (var i = 0; i < shopArray.length; i++) {
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
    },


    makeWeekTotal: function () {
    }

    mondayAverage = function () {
    },
    tuesdayAverage = function () {
    },
    wednesdayAverage = function () {
    },
    thursdayAverage = function () {
    },
    fridayAverage = function () {
    },
    SaturdayAverage = function () {
    },
    SundayAverage = function () {
    },
    weekAverage = function () {
    }
}  // shopDataWeek close

// call shopDataWeek:
shopDataWeek.makeMondayTotal();
console.log('mondayTotal: ' + shopDataWeek.mondayTotal);
console.log('Check shopArray:');


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
// console.log('pizzasMade: ' + Hamburg.pizzasMade);          // Array  // IMPORTANT! creates Hamburg.pizzas property befoere it is called in .deliveries
// console.log('deliveries: ' + Hamburg.deliveries);
// console.log('drivers: ' + Hamburg.drivers);
// console.log('timeslots: ' + Hamburg.timeslots);                 // Array
// console.log('total: ' + Hamburg.total);

/***************************************************************
***************************************************************/



// push pizzaShop object data to storeList in INDEX.html:   later Table:

var makeShopTable = function () {

    var body = document.getElementById("storeTable");
    var tbl     = document.createElement("table");
    var tblBody = document.createElement("tbody");

  // creating all cells for each row:
  for (var i = 0; i < shopArray.length; i++) {          // creates table row

    var row = document.createElement("tr");

    for (var x = 0; x < 3; x++) {
      var cell = document.createElement("td");
      var cellText = document.createTextNode(shopArray[i].shopInfo[x]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    };
    tblBody.appendChild(row);
};

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");

};  // makeShopTable close

makeShopTable();



// push pizzaShop object data to timeslot-List in DATA.html:

var makeDataList = function () {
    var body = getElementById('dataList');
    var list = document.createElement('ul');

    //create a <li> for each this.timeslots inex:
    for (var i = 0; i < this.timeslots.length; i++) {
        var row = document.createElement('li');
        var rowText = document.createTextNode(this.timeslots[i]);
        row.appendChild(rowText);
    };
    list.appendChild(row);
    body.appendChild(list);

};  // makeDataList close

makeDataList();
//
//


        // create <div>s with id's (from Array) in DATA.html.

        // link tables for each shop-Object into the <div - id's>



























        //

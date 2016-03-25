//Jmaas Week-2 Thursday Lab Assignment:
// ****** PIZZA SHOP ******* //

/***********************************************
              // FUNCTIONS : //
***********************************************/


/*======================================
   ****** GENERATE OBJECT DATA: ******
========================================*/

//shopDataWeek.makeMondayData();         // Monday (one day) only for testing



// ****** push weekTotal data to INDEX.html: ******

// var displayWeek = function () {
//     var week = document.getElementById("grandTotal");
//     week.textContent = shopDataWeek.weekTotal + ' frozen pizzas delivered this week!';
//
// };



/*==============================================
        ******  GENERATE TABLES ******
===============================================*/

// ****** push pizzaShop object data to storeTable in INDEX.html: ******

var makeShopTable = function () {

    var shopTableId = document.getElementById("shopTable");
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



// ****** push pizzaShop object data to timeslot-List in DATA.html: ******

var makeDayTable = function () {

};  // makeDayTable close




var makeDayTable = function () {

};  // makeDayTable close





// ****** push average data from shopDataWeek to DATA.html: ******

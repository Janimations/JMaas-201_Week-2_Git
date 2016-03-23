//Jmaas Week-2 Tuesday Lab Assignment:
// ****** PIZZA SHOP ******* //

var assert = require('assert');                 // assert is part of the test environment
var compute = require('../js/compute.js');

describe('Demo Code Tests:', function() {

  //*****************************************//
  // In-Class DEMO: Monday

  // Test the "is even " function in compute.js:
  it('should return true because 2 is even', function() { assert(true === compute.iseven(2)); });

  it('should return false because 5 is not even', function() { assert(false === compute.iseven(5)); });
  //*****************************************//
});




  // pizzaRandom() test:

describe('pizzaRandom Test:', function() {
    it('should return a random number equal to or larger than 4 and equal to or smaller than 10', function() {
        assert.equal(compute.pizzaRandom(4, 10), (>=4 && <=10)); });
});

// driversNeeded() test:

describe('driversNeeded Test:', function() {
  it('should return 2 because 4 / 3 rounded up is 2', function() {
      assert(2 == compute.driversNeeded(4, 5)); });
});


  // hours24() test:

  // hoursAmPm() test:

  // makeOpeningHours(this.hoursOpen, this.hoursClose) test:

  // makeData(this.hoursOpen, this.hoursClose) test:
























//

//Jmaas Week-2 Monday Lab Assignment:

var assert = require('assert');                 // assert is part of the test environment
var compute = require('../js/compute.js');

describe('My first test', function() {

  it('should check first question', function() {
    assert.deepEqual(compute.getQuestion(0), 'first');
  });

  it('should check third question', function() {
    assert.deepEqual(compute.getQuestion(2), 'third');
  });

  it('should increment 0 to get 5', function() { assert(5 === compute.addFive(0)); });
  it('should increment 4 to get 9', function() { assert(9 === compute.addFive(4)); });
  it('should increment -1008 to get -1003', function() { assert(compute.addFive(-1008) === -1003); });


  // In-Class DEMO: Monday

  // Test the "is even " function
  it('should return true because 2 is even', function() { assert(true === compute.iseven(2)); });
  it('should return false because 5 is not even', function() { assert(false === compute.iseven(5)); });

  // Test the " multipleThree " function
  it('should return true because 9 is a multiple of 3', function() { assert(true === compute.multipleThree(9)); });
  it('should return false because 5 is not a  multiple of 3', function() { assert(false === compute.multipleThree(5)); });

  // Test the " multipleSix " function
  it('should return true because 18 is amultiple of 6', function() { assert(true === compute.multipleSix(18)); });
  it('should return false because 5 is not a multiple of six', function() { assert(false === compute.multipleSix(25)); });


  // MONDAY LAB WORK:

  // Test problem-1:
  it('should return 12 because arg1 + arg2 + arg3 = 12', function() {     // test no.12
      assert(12 == compute.sum(6, 4, 2));
  });

  // Test problem-2:
  it('should return 50 because arg1 * arg2 * arg3 = 50', function() {      // test no.13
      assert(50 == compute.multiply(5, 5, 2));
  });

  // Test problem-3:
  it('should pass because problem3Array[0] = 12 and problem3Array[1] = 50', function() {        // test no.14
      var problem3Array = compute.sumAndMultiply(5, 5, 2);
      assert(12 == problem3Array[0] && 50 == problem3Array[1]);
  });

  // Test problem-4:
  it('should pass because 15 is the sum of 1, 2, 3, 4 and 5', function() {        // test no.15
      assert(15 === compute.sumArray([1, 2, 3, 4, 5]) );
  });

  // Test problem-5:
  it('should pass because 120 is the producct of 1, 2, 3, 4 and 5', function() {        // test no.15
      assert(120 === compute.multiplyArray([1, 2, 3, 4, 5]) );
  });

  // Test problem-6:

}); // describe close





















//

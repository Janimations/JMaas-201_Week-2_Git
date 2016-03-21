//Jmaas Week-2 Monday Lab Assignment:

/********************************************************
 * Example of TDD on a feature used in Week 1's labwork *
 ********************************************************/
var question = ['first', 'second', 'third'];

function getQuestion(index) {
  return (question[index]);
}

//exports refers to the "var app = require('../js/app');" in our test.js file. In other words its using the app.js as an object whose method is "getQuestion"
exports.getQuestion = getQuestion;

/***********************************************************
 * Example of TDD on a feature related to Week 2's labwork *
 ***********************************************************/
function addFive(num) {
  return num + 5;
}
exports.addFive = addFive;


// In-Class Demo:

function iseven(num) {
    return (num % 2) === 0;
}
exports.iseven = iseven;


function multipleThree(num) {
    return (num % 3 === 0);
}
exports.multipleThree = multipleThree;

function multipleSix(num) {
    if (iseven(num) && multipleThree(num)) {
        return true;
    } else {
        return false;
    }
}
exports.multipleSix = multipleSix;


/***********************************
Monday Lab Assignments:
***********************************/

// problem-1:



// problem-2:

// problem-3:

// problem-4:

// problem-5:

// problem-6:






//

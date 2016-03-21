//Jmaas Week-2 Monday Lab Assignment:

// workaround - bug-fix:
exports = {};

// Assignment Problems:

var problem_1_In = document.getElementById('problem_1_In');
var problem_1_Out = document.getElementById('problem_1_Out');

var problem_2_In = document.getElementById('problem_2_In');
var problem_2_Out = document.getElementById('problem_2_Out');

var problem_3_In = document.getElementById('problem_3_In');
var problem_3_Out = document.getElementById('problem_3_Out');

var problem_4_In = document.getElementById('problem_4_In');
var problem_4_Out = document.getElementById('problem_4_Out');

var problem_5_In = document.getElementById('problem_5_In');
var problem_5_Out = document.getElementById('problem_5_Out');

var problem_6_In = document.getElementById('problem_6_In');
var problem_6_Out = document.getElementById('problem_6_Out');


// Code Demo Examples:
var pAddFiveIn  = document.getElementById('pAddFiveIn');
var pAddFiveOut = document.getElementById('pAddFiveOut');



var arg = 10;
pAddFiveIn.textContent  = 'Calling addFive() with an argument of ' + arg;
pAddFiveOut.textContent = 'addFive() returned ' + addFive(arg);

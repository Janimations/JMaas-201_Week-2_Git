//Jmaas Week-2 Monday Lab Assignment:

// workaround - bug-fix:
exports = {};

// Variables for assignment problems:


var problem_1_Out = document.getElementById('problem_1_Out');


var problem_2_Out = document.getElementById('problem_2_Out');


var problem_3_Out_1 = document.getElementById('problem_3_Out');
var problem_3_Out_2 = document.getElementById('problem_3_Out');


var problem_4_Out = document.getElementById('problem_4_Out');


var problem_5_Out = document.getElementById('problem_5_Out');

// Code Demo Examples:
var pAddFiveIn  = document.getElementById('pAddFiveIn');
var pAddFiveOut = document.getElementById('pAddFiveOut');


// .textContent:

problem_1_Out.textContent = 'Output: The sum of ' + arg1 + ' and ' + arg2 + ' and ' + arg3 + ' is ' + (arg1 + arg2 + arg3);

problem_2_Out.textContent = 'Output: The product of ' + arg1 + ' times ' + arg2 + ' times ' + arg3 + ' is ' + (arg1 * arg2) * arg3);

problem_3_Out_1.textContent = 'Output 1: The sum of ' + arg1 + ' and ' + arg2 + ' and ' + arg3 + ' is ' + (arg1 + arg2 + arg3);
problem_3_Out_2.textContent = 'Output 2: The product of ' + arg1 + ' times ' + arg2 + ' times ' + arg3 + ' is ' + (arg1 * arg2) * arg3);

problem_4_Out.textContent = 'Output: ' + array + " was passed in as an array of numbers, and " + sum + " is their sum.");

problem_5_Out.textContent = 'Output: The numbers 1*2*3*4*5 have a product of 120.';











var arg = 10;
pAddFiveIn.textContent  = 'Calling addFive() with an argument of ' + arg;
pAddFiveOut.textContent = 'addFive() returned ' + addFive(arg);

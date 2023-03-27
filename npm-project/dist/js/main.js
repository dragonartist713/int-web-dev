"use strict";

var _moduleA = require("./moduleA.js");
var _moduleB = require("./moduleB.js");
var _grading = require("./grading.js");
// A site usually has a file named main.js file, which is similar to the Main class in a Java project

// ES6 Modules (to avoid namespace collisions)

(0, _moduleA.doSomething)();
(0, _moduleB.doSomething)();

// UNIT TESTING

if ((0, _grading.calculateLetterGrade)(90) == "A") {
  console.log("Test Passed!");
} else {
  console.log("Test Failed!!!");
}

// TODO - Write IF statements that test the other valid params/args for calculateLetterGrade()
// A site usually has a file named main.js file, which is similar to the Main class in a Java project

// ES6 Modules (to avoid namespace collisions)
import {doSomething, anotherFunction} from './moduleA.js'
import {doSomething as doSomethingElse} from './moduleB.js'

doSomething();
doSomethingElse();



// UNIT TESTING
import {calculateLetterGrade} from './grading.js';

if(calculateLetterGrade(90) == "A"){
    console.log("Test Passed!");
}else{
    console.log("Test Failed!!!");
}

// TODO - Write IF statements that test the other valid params/args for calculateLetterGrade()



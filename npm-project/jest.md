# Unit Testing With Jest
**Question:** How do you know if the code you wrote for a function works?

**Answer:** You test it!!!!

Complex appications are built one function at a time. You need to make sure each function works before you go and drop it into a complex application.

Here's a very simple function that has two string parameters. The function just concatenates the two strings and returns the result:
```js
const getFullName(firstName, lastName){
	return firstName + " " + lasstName;
}
```
If you look at the code for this function, you'll see that there's an error in it. This is just one reason why you should come up with some sort of routine to test each and every function that you write.

At the most basic level, you could test this function with a simple console log like this one:
```js
console.log(getFullName("Bob", "Jones"));
```

Running a simple test like this to ensure that your function works is the bare minimum you can do to test your work. A simple test like this can save your career. Many programmers (myself included) have rushed to make a quick change to a program. It's usually such a simple change that we didn't even bother to test it before pushing the changes up to the live server.

There are formal ways to test the functions you write, which are known as **unit testing** frameworks. We'll install one in a minute.

First, open the grading.js file which is in the src/js folder and spend a minute to read the description of how the function is supposed to work. Here is the code that you will see in the **grading.js** file:
```js
/**
Takes a test score (a number) as a parameter, and returns a letter grade.
The letter grade should be determined by the test score like so:
90 - 100 should return "A"
80 - 89 should return "B"
70 - 79 should return "C"
60 - 69 should return "D"
A test score lower than 60 should return "F"

@param {number} score       The score to be converted into a letter grade
@return {string}            The letter grade for the score
*/
function calculateLetterGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 60) {
    return "D";
  } else {
    return "F";
  }
}

export { calculateLetterGrade }
```

Note the export statement at the bottom of the file, this is an ES6 module that exports one function (calculateLetterGrade).

If you look in the main.js file you'll see code that looks like this:
```js

import {calculateLetterGrade} from './grading.js';

if(calculateLetterGrade(90) == "A"){
    console.log("Test Passed!");
}else{
    console.log("Test Failed!!!");
}
```
It runs one test by passing a score of 90, and checking to see if the result is equal to "A". If so, then our test passes! Unfortunately, many values other than "A" could potentionally be passed in as the parameter (argument).

You can automate the testing process by using a framework that we'll download with NPM. Run this command (from your project folder) to install a unit testing library called **Jest** (there are many unit testing libraries, but Jest seems to be one of the most popular):
```md
npm install --save-dev jest
```
Take a look at the **grading.test.js** file in the tests folder, it has this code in it:
```js
import { calculateLetterGrade } from "../src/js/grading";

describe("Test valid params for calculateLetterGrade()", () => {
    test("90 is an A", () => {
        const score = 90;
        const expectedResult = "A";
        expect(calculateLetterGrade(score)).toEqual(expectedResult);
    });

    test("80 is an B", () => {
        expect(calculateLetterGrade(80)).toEqual("B");
    });

    test("70 is a C", () => {
        expect(calculateLetterGrade(70)).toEqual("C");
    });

    test("60 is a D", () => {
        expect(calculateLetterGrade(60)).toEqual("D");
    });

    test("59 is an F", () => {
        expect(calculateLetterGrade(59)).toEqual("F");
    });

});
```
Note at the top of the file that it imports the function that we are testing. In the rest of the file you'll see lots of method calls to function that are defined in the Jest library, such as **describe()**, **test()**, and **expect()**. Here's a quick run down of those functions:

- **describe()** Allows you to group individual tests into categories (or suites)
- **test()** Is used to run a single test. You pass in two parameters, the first is a message that describes what you are testing, and the second param is a function that includes your test code. When you run your tests (which we'll see soon) Jest will automatically invoke this function.
- **expect()** - Actually runs the test code and compares the result to the value passed into **toEqual()**.

To run the test, enter this command in the terminal (make sure the terminal is in the my-project folder):
```md
npx jest tests/
```

This will run all tests in all files in the tests folder. Right now we only have one test (in a single test file), but we'll be adding many more soon. If you want to run tests for just one test file, you could do it like this:
```md
npx jest tests/grading.test.js
```
When you run the tests for the first time, you'll notice that a couple of them failed! If our test code is correct, this indicates that we have a bug in our code! Let's fix the bugs and get all the tests to pass!
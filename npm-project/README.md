# Node Package Manager
Make sure you have nodejs and npm installed.
To check for this run these commands:
```md
node -v
npm -v
```

Download the **npm-project** folder and open it in VS Code.

Review the files in the **src** folder.


Then open a terminal and initialize a new npm project by running this command:
```md
npm init --yes
```

This will create file named **package.json** on your project folder.
The contents of the package.json file will look like this:

```js
{
  "name": "npm-test",
  "version": "1.0.0",
  "description": "Make sure you have nodejs and npm installed.\r To check for this run these commands:\r ```md\r node -v\r npm -v\r ```",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
## Running the website on a server
You can launch the site on a server by entering this command:
```md
npx serve ./src
```


## Install Babel Packages
Babel is a tool that compiles modern JavaScript into Classic JavaScript (so your pages work in older browsers that don't support modern JS). Run these commands in the project folder to install a few Babel packages that we'll be using:

```md
npm install --save-dev @babel/core
npm install --save-dev @babel/cli
npm install --save-dev @babel/preset-env
npm install --save-dev @babel/plugin-syntax-class-properties
```

You could install all four packages with a single command like so (just separate each package name with a space):

```md
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/plugin-syntax-class-properties
```

Note that the **--save-dev** option means that the package.json file will be updated to show that the project is using the Babel plugins. Take a look inside package.json and you should see a setting called **devDependencies** that include each of the Babel packages that we just installed.

You'll also see that a **node_modules** folder has been created in the project directory. This is the folder where packages get downloaded to when you install them.

### A Note About Git
You should always 'ignore' the node_modules folder, and keep it out of your Git repository because it can get to be extremely large. If you clone a repository that depends on NPM packages, you can simply run npm install to create the node_modules folder and install all the packages that are listed in the package.json file.


The Babel packages that we just installed can be configured by adding a file named **babel.config.js**. Go ahead and create this file in the project folder and add this to it:

```js
module.exports = function(api) {
    api.cache(true);
    return {
        "presets": [
            [
                "@babel/preset-env",
                {
                    "targets": {
                        "browsers": "ie > 4" // Just added this to test if it would actually change anything
                    }
                }
            ]
        ],
        "plugins":  ["@babel/plugin-syntax-class-properties"]
    };
};
```
Don't worry about understanding the details of this file, it just instructs Babel to compile our mode JavaScript to 'classic' code that can run on IE4. It also instructs Babel to convert any JavaScript classes that we create in our project to classic JavaScript. Classes were not supported by JavaScript until ES6.


Now we're ready to try out Babel and convert our modern JavaScript code from ES6 to Classic JS. Converting code from one version of a language to an older one is known as **transpiling** (for backward compatibility). Run this command in the terminal:
```md
npx babel src -d dist
```
This will launch Babel and it will look for any .js files in the source folder. And it will put the transpiled versions of the files in a folder named dist (the -d option allows you to tell Babel where to put the transpiled code). When you want to run a package like Babel from the command line, you prefix it with npx.


Make sure to look at the **es6.js** and the **user.js** files in both the src and the dist folders. You'll see that Babel converted (transpiled) our modern JavaScript into classic JavaScript.


So we write our source code in the **src** folder and we'll run or npm packages that will compile the code into the **dist** folder. Dist is short for distribution. 
These would be the files that we 'distribute' to our live server.

The Babel plugin compiled and moved our .js files into the dist folder, but it did not touch any of the other files in our src directory. They would need to be copied into the dist folder as well. We could copy those files manually, but we can also install some other NPM packages to automate the process for us.

# Install Gulp
Now, we'll use NPM to install a package called Gulp, which is a **task runner** (it can automate many tasks for us).

We actually need to install two Gulp packages. The first one allows us to run Gulp commands from the terminal. We'll install this one 'globally' (by adding **-g** to the npm install command). When you install a package globally, it can be used by any project on your computer (it doesn't get installed into the node_modules folder, instead it get installed in a place that can accessible to all of your NPM projects).

```md
npm install gulp-cli -g
```
Note, that if you are installing a package globally on Linux or Mac OS you need to run the command with the super user's acount, like so: **sudo install gulp-cli -g**

If you already had gulp-cli installed, you may need to update it.
Start by checking the version, like so:
```md
npx gulp -v
```

If you need to re-install an updated version gulp-cli, use these commands:
```md
npm rm -g gulp-cli
npm install gulp-cli -g    (but if you are on a mac, use sudo npm install gulp-cli -g)
```

We also need to install Gulp in this project. 
Run this command from your project folder:
```md
npm install gulp --save-dev
```

## Configure Gulp
Now we need to create a configuration file for gulp, which will define all the tasks that we want to run. Create a file named **gulpfile.js** in your project folder and paste this code into it.

```js
// IMPORTS
const gulp = require('gulp');


// TASK FUNCTIONS
const test = (done) => {
    console.log("Test task running...");
    done();
}


// EXPORTS (in order to run the task functions, they must be exported)
module.exports.test = test 
```
This is a JavaScript file, but some of it may look unfamiliar if you haven't worked with NodeJS. The first line imports the gulp package from the node_modules folder.

Next we have a function that should look somewhat familiar to you. In Gulp, you define a 'task' by writing a function. This particlular task function doesn't actually do anything other than write a message into the terminal. You'll see the message in minute when we run the task. If you are wondering about the parameter (done), it's a callback function that NodeJS will pass into the task function. You should invoke this function after your task is complete, this lets NodeJS know that your task has completed. There are other ways to write your task functions, but we'll be using this approach.

The last line 'exports' the test function. In NodeJS you have to export the parts of a .js file that you want to be accessible to other files. By exporting a function you make it 'public'.

Run this command (from the project folder) to invoke our test task function:
```md
npx gulp test
```
You should see the console log message in the terminal (along with some statistics about the task)

Now add a task function (in the TASKS FUNCTIONS section) to gulpfile.js that will copy all .html and .css files into the dist folder:

```js
const copy = (done) => {
    gulp.src("src/**/*.html").pipe(gulp.dest("dist/"));
    gulp.src("src/**/*.css").pipe(gulp.dest("dist/"));
    done();
}
```

In the body of the function, a few methods of the gulp object (which we imported at the top of the file) are being called. The **src()** method allows you to specify the files you want to copy. The ***.html** in the path (the parameter passed to src()) indicates that you want to copy all files that have an .html extension. The two asterisks in the path tells gulp to do a recursive copy, so it would copy any html files that are inside of sub-directories within the src folder. The **pipe()** method allows you take the files that are returned by src() and feed them into another method, which in this case is called **dest()**. The parameter passed into dest() is the path that your files will be copied to. Don't worry if this all seems very strange to you, remember you are writing JavaScript for NodeJS, not for the browser.

Make sure to export the task, so add this line to the bottom of gulpfile.js:
```js
module.exports.copy = copy 
```

Now you can run the task from the terminal:
```md
npx gulp copy
```
Make sure to look around inside the dist folder. You should see that your .html and .css files have been copied into it.

## Integrating Babel into a Gulp Task
We can create a task to do the Babel work that we previously set up. Then we don't have to run the Babel job separately. Our ultimate goal is to do all of our tasks by running a single command (which we'll eventually be able to do).

First install the gulp-babel package:
```md
npm install --save-dev gulp-babel
```

Then add this import at the top of gulpfile.js:
```js
const babel = require('gulp-babel');
```

Now we can run babel commands in our tasks. So let's create a task function to do just that (add this task function to gulpfile.js):
```js
const transpile = (done) => {
    gulp.src('src/**/*.js')
            .pipe(babel())
            .pipe(gulp.dest('./dist'));
    done();
}
```

Don't forget to export the task at the bottom of gulpfile.js, by adding this:
```js
module.exports.transpile = transpile
```

Now you can run the babel task from the terminal like so:
```md
npx gulp transpile
```

## Optimizing Images With Gulp
We also need a task to copy the images folder to the dist folder, but we'll optimize the images along the way. Install this package:
```md
npm install gulp-imagemin@7.1.0  --save-dev
```
Side Note: I had to install an old version of this package because the new
one doesn't support the require() way of importing.

Import the package into the gulpfile:
```js
const imagemin = require('gulp-imagemin');
```

Add this task function:
```js
const images = (done) => {
    gulp.src('src/images/**/*')
        .pipe(imagemin({ optimizationLevel: 5 }))
        .pipe(gulp.dest('dist/images/'));

    done();
}
```

Note that this task 'pipes' the source files through the imagemin package before piping them to the destination folder.

Now update this export line at the bottom of gulpfile.js:
```js
module.exports.images = images
```

Now you can run the task from the terminal like so:
```md
npx gulp images
```

After you run the command, look at file sizes of the images in the dist folder compared to the src folder.

## Running Multiple Tasks At The Same Time
We've got a few separate task functions in our gulpfile now, ideally we want to run them all at the same time. We can do so by adding this to the very end of the file:

```js
module.exports.default = gulp.parallel(copy, transpile, images); 
```

Now you can run all tasks by simply entering npx gulp in the terminal (we'll do that next). In this case we are setting the default property of the export object to call the gulp parallel() method. The parameters that you pass in are the names of the task functions that you want to run 'in parallel'.

Now go ahead and run all the tasks functions by entering this in the terminal:
```md
npx gulp
```

## ES6 Modules 

It's not unusual for a web page to link to many .js files. But if you're not careful, this can lead to **namespace collisions**, which is when you end up with two variables with the same name, in the same scope.

In the src/js folder you'll see two example JavaScript libraries. libraryA.js contains this code:
```js
function doSomething(){
    alert("doing something");
}

function anotherFunction(){
    alert("foo");
}
```

And libraryB.js contains this code:
```js
function doSomething(){
    alert("doing something else");
}
```
Note that both libraries declare a function named doSomething(). If you look in index.html, you'll see that it includes both libraries (they are commented out). So, if your page links to both libraries and calls doSomething(), which version will execute? If you want to play around, look in index.html and notice that there are SCRIPT elements that link to both .js files (they are commented out).

We can avoid these namespace collisions by using ES6 modules. Here are some resources on ES6 modules:

1. https://www.tutorialspoint.com/es6/es6_modules.htm
1. https://www.sitepoint.com/using-es-modules/
1. https://www.freecodecamp.org/news/how-to-use-es6-modules-and-why-theyre-important-a9b20b480773/

Now look at the files named **moduleA.js** and **moduleB.js** inside the src/js folder. I've converted the two libraries into ES6 modules simply by adding the export statement at the bottom. Now these modules can be imported into another .js file. A common practice is to create a file named **main.js** that imports all the modules needed for a page. And then link your web page to main.js.

Look inside **main.js**, and note how it imports functions from both modules, but renames one version of doSomething to doSomethingElse. Now, if you use ES6 modules to create your libraries, you don't have to worry about namespace collisions, because the developers who use your modules can name them as they choose.

Finally, look inside the index.html file and notice how it's linking to main.js, it includes a **type** attribute that is set to a value of module. This declares that main.js is using ES6 modules.

```md
<script src="js/main.js" type="module"></script>
```

Note that as of today (early 2022), ES6 modules will not work if you launch a page directly from the file system. You must load the pages from a web server. Remember, you can do this by running **npx serve ./src** from the terminal.

There's more to ES6 modules than what we've covered here (there a diffent ways of importing and exporting moduels), but this is a start.




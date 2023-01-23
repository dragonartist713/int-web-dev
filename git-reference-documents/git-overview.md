---
title: "Git Overview"
description: "An overview of Git"
image: A nice image representing the blog post, mainly meant for the <meta> tags
tags: []
---
## Getting Started With Git

[Video - Getting Started with Git on Windows](https://youtu.be/pdLlOaLvF0g)

Git is a standard tool that all types of developers must know how to use.
It's great for collaborating on projects that involve a whole team of developers.
We won't get into that aspect of Git in this activity, but you will learn about one of the
other important uses of Git, which is to manage all the changes that you make to files in a project.


[Here's a really good high-level intro to Git](https://www.nobledesktop.com/learn/git/what-is-git)


## Install GitBash (Git for Windows)
Click on the link below to download and install Git on your Windows computer.
Just follow all the defaults when going through the install.

[Install Git on Windows](https://gitforwindows.org/) 


## Configure Git
There are lots of configuration settings that you can change in Git.
To see a list of all of them, enter this command:
```md
git config --list
```

You should configure Git to know your name and email address.
That way it can keep track of who is making changes to the file in the project.

Open the GitBash terminal and enter these commands to configure Git (make sure to use your name and email address instead of John Doe's):
```md
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

Finally, sometimes Git will try to open a file in a text editor.
You can configure it to use a specific text editor. 
Enter this command to set the default editor to Notepad:
```md
git config --global core.editor notepad
```

## Create a Project
Now we'll create a sample project so that we can start learning how to use Git.
This project will be a very simple website.


Create a folder called **my-sample-project**.


Then add an **index.html** inside the my-sample-project folder.
Add this code to index.html (make sure to save the file when you are done):
```html
<html>
	<head>
		<title>My Proj</title>
	</head>
	<body>
		<h1>My project</h1>
	</body>
</html> 
```

Now that we have our project started, we'll start using Git to manage all of the changes we make.
Open the GitBash terminal in the project folder (my-sample-project),
and enter this command to initialize a git repository (init is short for 'initialize'):
```md
git init
```
If you look at the hidden files in the project folder, you'll see a folder named **.git**.
This is the folder that Git uses to keep track of all the changes that you make to the project.
It's best if you don't fiddle with this file (which is why it's hidden).

## Adding (aka Staging) and Committing a File
In order for Git to start tracking a file in project you must **add** or **stage** the file 
(some programmers say 'add' and others say 'stage').

To add the index.html file to your Git repository, enter this command (make sure you are entering the command from the project folder):
```md
git add index.html
```
The file is now ready to be 'committed'.
Once it has been been committed, Git will keep track of any changes that you make to it.

Note that I said it is 'ready to be committed'. 
In order to commit a file, you must first add (or stage) it.
This might be confusing now, but we can discuss it later when we get a little deeper into Git.

Anyway, to commit the file, enter this command:
```md
git commit -m "Committed first version of homepage"
```
When you use the **git commit** command you must also use the **-m** option.
The **m** stands for message, and you must add your commit message after the m (and put it inside double quotes).

Whenever you do a commit in Git, all of the files that have been added (staged) will be included in the commit.


Now that we've committed the homepage, Git will keep track of all the changes we make to it. Web pages are often 'living documents', which means that are changed frequently.
Let's update the index.html page to look like this (note that we've just added a paragraph inside the body of the page):
```html
<html>
	<head>
		<title>My Proj</title>
	</head>
	<body>
		<h1>My project</h1>
		<p>This is my project!</p>
	</body>
</html> 
```

Now we'll commit the changes to the Git repository. 
But first, remember, we must add/stage the file.
So enter this command in the terminal (remember that the terminal should be in the project folder):
```md
git add index.html
```
And now to commit the changes, enter this command:
```md
git commit -m "Added a paragraph"
```

Note that if you create or update multiple files in your project, you can
can add/stage them all at once like so (we'll use this soon):
```md
git add .
```

## Git Log
Git keeps a log of all your commits, and you can view it by entering this command:
```md
git log
```

Note that we have two commits in the log and that each one starts with a line that says **commit** followed by a big long random looking string. 
This is the ID of the commit. Git assigns a random (and unique) ID to each commit.
After the commit ID is the name and email of the person who made the commit (remember when we configured that?). Then the date of the commit, and finally the commit message.


Also note that the newest commits show up first (it's reverse chronological order).


The log can become quite large as a project continues, and if you don't want to scroll 
through all the log entries, you can press **q** to exit the log and return to the terminal.


## Reverting to the Previous Commit
Have you ever made changes to a project and ended up making a big mess?
Then you wished you could just put it back to how it was before you made the mess?

In Git, you can **revert** your project to the state it was in for any commit that has been made.

Let's assume that we want to revert our project to the state it was in before we added the paragraph (this is a little silly, because it would be very easy to remove the paragraph, but imagine that you made a whole bunch of changes to a file, or even a bunch of files).

To revert the project to the state it was in before the last commit, run this command (get ready for Notepad to magically appear - I'll explain what to do with it in a minute):
```md
git revert HEAD
```
When you do a revert, Git doesn't remove the last commit, it makes another commit which sets the project files back to the state they were in before the last commit.
This allows you to keep a history of ALL the changes you've made to a project, including reverts.


After running the last command, Notepad should have opened with some text in it.
This is the message that will be used for the revert commit (remember a revert is a commit that sets the project back to a previous state).
You can edit the message in Notepad, or you can leave it as is (the lines that start with # will not be included in the message, they are simply notes to help you understand what's happening).
When you close Notepad, Git will complete the revert commit.


In Git, the most recent commit is also known as **HEAD**, so the previous command
reverts the last commit that was made to our project.


Now run **git log** and notice that the latest commit was actually a revert:
```md
git log
```

Note that you can revert your project to the state it was in after any commit.
To do this you would have to get the ID of the commit that you want to revert to 
(by using the git log command) and then enter **git revert** followed by the commit ID.


## Working with Multiple Files
Let's add a file to our project.
Create a file named **main.js** in the project folder (my-sample-project) and
put this code in it:
```js
window.addEventListener("load", function(){
	console.log("The page has finished loading.");
});
```
Now update **index.html** to include a link to the main.js file, like so:
```html
<html>
	<head>
		<title>My Proj</title>
		<script src="main.js"></script>
	</head>
	<body>
		<h1>My project</h1>
	</body>
</html> 
```
Since our last commit, we have added main.js and updated index.html.
Run this command to check the status of your project:
```md
git status
```
This shows the files in your project that have been added or updated since the last commit.
Note that the file names appear in red because they have not yet been added (staged).
Remember that in order to commit a file, it must first be added.

Now run this command to add/stage both of the files:
```md
git add .
```

Then check the status of the project again like so:
```md
git status
```
Note that the file names are now colored green, which indicates that they have been added/staged and will therefore be included in the next commit.
Remember that all files that have been staged/added will be included in the next commit.


Go ahead and commit the changes like so:
```md
git commit -m "Added main.js and linked to it in index.html"
```


## Git Branches
If you don't already have the GitBash terminal open for **my-sample-project**, go ahead and right-click on the my-sample-project folder and choose **GitBash Here**.


[Video - Git Branching](https://youtu.be/lUIn_7XMRcM)

Remember that a website (or any software project) is usually constantly changing.
As soon as a site goes live, the requests for changes start to pile up.
So you need a way to keep the live version intact while you are working on the many changes that will be included in the next release.


Git allows you to create **branches** so that you can keep a version of the project intact while you are making changes to a separate version. The separate versions are known as 'branches'. 

You usually create a new branch when you are adding a new feature to your project, or
when you are fixing a bug. And then, after the new feature is complete (or the bug is fixed), you can merge all the changes into the original branch. 
This allows you to make many changes (commits) without affecting the current live version of the project.


Assume that we are about to add a new feature to our project, but we don't want to change the current live version. Our new feature will be the addition of a stylesheet to the project.


Create a new branch by entering this command:
```md
git branch adding-css
```
This creates a copy of the project files (a branch) with the name of 'adding-css'.
Now we can work on the adding-css branch, by making as many commits as we want, without affecting the original branch (the original branch is usually called 'main' or 'master').



Run this command to look at all the branches for a project:
```md
git branch
```
It should show the original branch (named either 'main' or 'master') and the 'adding-css' branch. Also note that the asterisk indicates which branch you are currently working in.


We want to switch to the 'adding-css' branch so that we can start making changes without affecting the main branch. To do so, enter this command:
```md
git checkout adding-css
```


Now run this command again, and notice that the asterisk should be next to the 'adding-css' branch, which indicates that you are working in that branch:
```md
git branch
```

Add a file named **main.css** to the project folder (my-sample-folder) and put this code in it:
```css
body{font-family: Arial; }
```

Now a link element to index.html so that it looks like this:
```html
<html>
	<head>
		<title>My Proj</title>
		<link rel="stylesheet" href="main.css">
		<script src="main.js"></script>
	</head>
	<body>
		<h1>My project</h1>
	</body>
</html> 
```

Make sure that both files are saved.
Then check the status like so:
```md
git status
```
Note that index.html and main.css show up in red, which means they have not yet been added to the 'staging area'.


Add (stage) both files with this command:
```md
git add .
```
If you check the status again, you'll see that the file names now show up in green, which means that they will be included in the next commit that we run.


Go ahead and commit the files that have been staged, like so:
```md
git commit -m "Added stylesheet"
```

We are not done with the stylesheet yet, but imagine that in the middle of adding this new feature, we realize that we must make a change to our live site as soon as possible.


So, we can switch back to the master (or main) branch like so:
```md
git checkout master         // or use 'main' instead of 'master'
```

If you look at the project folder in File Explorer, you'll note that the changes we made to the 'adding-css' branch are not there (the style sheet is gone and the link to it in index.html is not there as well)! 
When you checkout a new branch, Git replaces all the files in the project folder from the previous branch with the ones for the branch that you just checked out.


Note that you cannot switch to another branch unless you commit the changes you've made to the current branch (we'll talk more about this later)

Update the index.html file too look like this:
```html
<html>
	<head>
		<title>My Proj</title>
		<link rel="stylesheet" href="main.css">
		<script src="main.js"></script>
	</head>
	<body>
		<h1>My project</h1>
		<h3>Coming soon to this website....CSS</h3>
	</body>
</html> 
```
Now add and commit the change with these commands:
```md
git add .
git commit -m "Added coming soon message"
```

At this point, you would could copy the files from the master/main branch to your live server in order to publish it.


And now you can get back to work on the new feature, so switch back to the
'adding-css' branch like so:
```md
git checkout adding-css
```
And finish off the main.css file by making it look like this:
```css
body{font-family: Arial; }
h1{ color: green; }
```
Then add/stage and commit the change like so:
```md
git add main.css
git commit -m "Finished stylesheet"
```
Now that our new feature is complete (the addition of a stylesheet),
we can **merge** the changes we made in branch back into the master/main branch. 


To merge a branch into the master/main branch, you must first switch to the master/main branch like so:
```md
git checkout master     (or main instead of master)
```

Now we can merge the changes made in the 'adding-css' branch into the master/main branch by running this command:
```md
git merge adding-css
```
When you run this command, Git will open Notepad with a default message for the merge (which is actually a commit, so it requires a message just like any other commit you would make).


Branching allows you to make many changes (commits) without affecting another branch in your project.


Now that the new feature has been merged into the master branch, 
we can delete the 'adding-css' branch like so:
```md
git branch -d adding-css
```

There's a lot more to Git that we will discuss soon. 
But in this activity you learned the most basic commands for using Git:
```md
git config
git init
git add
git commit
git status
git log
git revert
git branch
git checkout
git merge
```



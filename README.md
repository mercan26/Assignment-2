Author: Jake Levy

Directory contains:

    README.md - this file

    tracker - a folder that contains a packed NPM module for use in your
    lab assignment.

    Example - folder containing the lecture Examples

	> README.md - description of Example folder
	
	> censorify - book example for creating a NPM module

	> readwords - a program/app that utitlizes censorify

This directory is the "starting point" set of files from Lab 1
and is the starting point of your first lab assignment.

If you missed today's lecture, look over the slides and then follow the text's
directions on pages  XX - XX to understand what we did in class (packed censorify, installed it into readwords folder, imported it into readwords)

The first assignment is super simple and is just to help
you "get your feet wet" with NPM and javascript.

On your local file system, create a directory called ActivityTracker.
Install the tracker Module with npm, like we did in class, in ActivityTracker.

<b> 1) make a new ActivityTracker folder (in the terminal or in VS Code)</b>
     <em> a) change directories into ActivityTracker (this has to be in the terminal)
       
    Run:  npm install $PathToTracker Module (from the terminal)
    ($PathToTracker is a STAND-IN for the actual path to the tracker in your file system)
    

Inside the directory create a file named activityTracker.js

    >emacs activityTracker.js #or use vim/nano/vscode/whatever
    ** Opens activyTracker.js in emacs/vim/nano/text editor/vsCode**
	   
 and import the tracker using statement (on the first line):

    var tracker = require("tracker");
	   ^	      ^
    local instance    module definition

Copy the following array of Object Literals into activityTracker.js, below
your require statements:

    var activities = [ {activity: "walking", weight: 150, distance: 3, time: 45}, { activity: "running", weight: 200 , distance: 4, time: 40}, {activity: "running", weight: 175, distance: 5, time: 45}, {activity: "running", weight: 140, distance: 10, time: 240}, {activity: "walking", weight: 165, distance: 2, time: 20}, {activity: "walking", weight: 250, distance: 4, time: 75}, {activity: "running", weight: 215, distance: 3, time: 28}, {activity: "walking", weight: 220, distance: 5, time: 60}];
    

NOTE:  This is an array of literal, anonymous, Objects. 

Each literal is providing the following data:

    Activity Type
    Weight in pounds
    Distance in Miles
    Time in Minutes

Since tracker uses time in hours, don't forget to do some conversions.

USE A LOOP to process the array, using the functions provided by the tracker
module, and log the following data to the console:

    Activity: 1
    walking
    Weight: 150 lbs
    Speed: 4miles per hour
    Calories Burned: 135
    ***************************
    Activity: 2
    running
    Weight: 200 lbs
    Speed: 6miles per hour
    Calories Burned: 504
    ***************************
    ... Data continues for remaining objects...

 You will have to use your programming knowledge and skills to process the
 array, using basic JavaScript: control flow statements, equality checks, etc.
 Remember that to access items in an Array, you use array[index] notation
 To access Object properties you can use the standard dot-notation syntax


Do not hardcode each activity into your driver.
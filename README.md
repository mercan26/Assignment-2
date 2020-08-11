Author: Jake Levy
Directory lab1 contains:

README.md - this file

censorify - book example for creating a NPM module

readwords - a program/app that utitlizes censorify

tracker - a folder that contains a packed NPM module
for use in your lab assignment.

This directory is the "completed" set of files from Lab 1
and is the starting point of your first lab assignment.

The first assignment is super simple and is just to help
you "get your feet wet" with NPM and javascript.

On your local file system, create a directory called ActivityTracker.
Install the tracker Module with npm, like we did in class, in ActivityTracker.
Inside the directory create a file named activityTracker.js and import the
tracker

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
 Remember that to access Object properties you can use the standard
 dot-notation syntax.




Do not hardcode each activity into your driver.
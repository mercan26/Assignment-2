Author: Jake Levy
Directory contains:

    README.md - this file

    tracker - a folder that contains a NPM module for use in your lab
    assignment.

This directory is the "starting point" set of files for Lab 1: Intro to JS.  
  
If you missed today's lecture, look over the slides (if available, watch the  
lecture video), and  read Chapter 2: JavaScript Primer from your text to  
understand what we covered in class.  We want to get up to speed and be using  
Javascript to build cool stuff quickly.  
  
The first assignment is super simple and is just to help you "get your feet  
wet" with writing relatively simple javascript.
  
*0) Before everything else, remember that its easier to keep things organized
from the start than it is to organize a bunch of random files later.  Make sure
you have folder somewhere in your local for Labs/class assignments.  This
folder should be your **Workspace**.  In VS Code you can select the **File**
Menu, then select **Open Workspace** and then navigate to and choose the
appropriate folder.*

In your VS_Code terminal:  
**1) Clone the Homework folder**
*a) If you opened your HW folder as the workspace, then your terminal  
should already start in the correct directory location.  If not, navigate to  
the correct directory in your terminal using the **cd** command
  
b)  Once you are in the correct directory, you should run the following command*
    git clone https://github.com/ProfJake/lab1

<b> 1) make a new ActivityTracker folder (in the terminal or in VS Code)</b>

   <em> a) change directories into ActivityTracker (this has to be in the terminal)
       
  b) From the terminal you will have to run the command:</em>
  
     npm install $PathToTrackerModule
     
<em>  ($PathToTrackerModule is a STAND-IN variable for the actual path to the tracker directory, cloned from here, in your file system)</em>
    

<b> 2) Inside the directory create a file named activityTracker.js </b>

<em> a) Right click on the folder in the VS_Code Navigator and select "New File"

   b) This should open the file in the Editing window.  

   c) import the tracker using statement (on the first line): </em>

       var tracker = require("tracker");
	   ^	      ^
    local instance    module definition

Copy the following array of Object Literals into activityTracker.js, below
your require statements:

    var activities = [ {activity: "walking", weight: 150, distance: 3, time: 45}, { activity: "running", weight: 200 , distance: 4, time: 40}, {activity: "running", weight: 175, distance: 5, time: 45}, {activity: "running", weight: 140, distance: 10, time: 240} ]
    

NOTE:  This is an array of literal, anonymous, Objects. 

<b> Remember</b> that you can access properties of a JS object via dot OR subscript notation.  Also remember that arrays have a <b>length</b> property

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

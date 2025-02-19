// Import the trackerService.js module
var tracker = require("./tracker/trackerService.js");

// Array of activity data
var activities = [
    {activity: "walking", weight: 150, distance: 3, time: 45},
    {activity: "running", weight: 200, distance: 4, time: 40},
    {activity: "running", weight: 175, distance: 5, time: 45},
    {activity: "running", weight: 140, distance: 10, time: 240}
];

// Loop through each activity to process and display results
for (let i = 0; i < activities.length; i++) {
    let activity = activities[i];
    
    // Convert time from minutes to hours
    let timeInHours = activity.time / 60;
    
    // Calculate calories burned and speed using the tracker functions
    let caloriesBurned;
    let speed;

    if (activity.activity === "walking") {
        caloriesBurned = tracker.calcWalkCal(activity.weight, activity.distance);
    } else if (activity.activity === "running") {
        caloriesBurned = tracker.calcRunCal(activity.weight, activity.distance);
    }

    speed = tracker.calcSpeed(activity.distance, timeInHours);

    // Print the results
    console.log(`Activity: ${i + 1}`);
    console.log(`${activity.activity}`);
    console.log(`Weight: ${activity.weight} lbs`);
    console.log(`Speed: ${speed.toFixed(2)} miles per hour`);
    console.log(`Calories Burned: ${caloriesBurned.toFixed(0)}`);
    console.log("***************************");
}

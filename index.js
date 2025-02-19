var tracker = require("./tracker/trackerService.js");

var activities = [
    {activity: "walking", weight: 150, distance: 3, time: 45},
    {activity: "running", weight: 200, distance: 4, time: 40},
    {activity: "running", weight: 175, distance: 5, time: 45},
    {activity: "running", weight: 140, distance: 10, time: 240}
];

for (let i = 0; i < activities.length; i++) {
    let activity = activities[i];

    let timeInHours = activity.time / 60;

    let caloriesBurned;
    let speed;

    if (activity.activity === "walking") {
        caloriesBurned = tracker.calcWalkCal(activity.weight, activity.distance);
    } else if (activity.activity === "running") {
        caloriesBurned = tracker.calcRunCal(activity.weight, activity.distance);
    }

    speed = tracker.calcSpeed(activity.distance, timeInHours);

    console.log(`Activity: ${i + 1}`);
    console.log(`${activity.activity}`);
    console.log(`Weight: ${activity.weight} lbs`);
    console.log(`Speed: ${speed.toFixed(2)} miles per hour`);
    console.log(`Calories Burned: ${caloriesBurned.toFixed(0)}`);
    console.log("***************************");
}


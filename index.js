let nobody = prompt("Enter the scenario (yes or no):");

let temperature = +prompt("Enter the temperature:");
if (nobody === "yes") {
  console.log("Turn off the lights and lock the doors");
}
if (temperature === 22) {
  console.log("It's winter");
} else {
  if (temperature === 18) {
    console.log("It's summer");
  } else {
    console.log("Temperature is not related to winter or summer");
  }
}

var mathMarks = +prompt("Enter the Math marks:");
var scienceMarks = +prompt("Enter the Science marks:");

if (mathMarks >= 50 && scienceMarks >= 50) {
  console.log("Student graduates");
} else {
  console.log("Student doesn't graduate");
}
let ticketPrice = +prompt("Enter the ticket price (in Rs):");
let departureTime = prompt("Enter the departure time:");
let mealProvided = prompt("Is a meal provided? (yes or no):");
if (
  ticketPrice < 500 &&
  (departureTime === "morning" || mealProvided === "yes")
) {
  console.log("Booking the flight!");
} else {
  console.log("Looking for another flight.");
}
var ramStorage = prompt("enter the ramCapticy");
var graphicsQuality = prompt("enter the graphicsQuality(yes:no)");
var budget = prompt("enter the budeget");
if (ramStorage == "8" && graphicsQuality == "good" && budget <= "80000") {
  console.log("buy it");
} else {
  console.log("look for alternatives");
}
var attendence = +prompt("enter the attendencePercentage");
var grade = prompt("enter the grade");
if (
  attendence > "80" &&
  (grade === "A+" || grade == "A" || grade === "B+" || grade == "B")
) {
  console.log("go for trip");
} else {
  console.log("not allow for trip");
}

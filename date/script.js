let day = document.getElementById("day");
let time = document.getElementById("time");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date();
let currentDay = days[date.getDay()];
let currentHour = date.getHours();
let currentMinutes = date.getMinutes();
let currentSeconds = date.getSeconds();
let currentTime = `${currentHour}:${currentMinutes}:${currentSeconds}`;
console.log(currentTime);
console.log(currentDay);

day.innerHTML = `Today is: ${currentDay}`;
time.innerHTML = `Current time: ${currentTime}`;

let day = document.getElementById("day");
let time = document.getElementById("time");
let secondDate = document.getElementById("secondDate");
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
let currentMonth = date.getMonth() + 1;
let currentYear = date.getFullYear();
let secondDay = date.getDate();
let currentDay = days[date.getDay()];
let currentHour = date.getHours();
let currentMinutes = date.getMinutes();
let currentSeconds = date.getSeconds();
let currentTime = `${currentHour}:${currentMinutes}:${currentSeconds}`;
console.log(currentTime);
console.log(currentDay);

if (currentMonth < 10) {
  currentMonth = "0" + currentMonth;
}
if (secondDay < 10) {
  secondDay = "0" + secondDay;
}
if (currentHour < 10) {
  currentHour = "0" + currentHour;
}
if (currentMinutes < 10) {
  currentMinutes = "0" + currentMinutes;
}
if (currentSeconds < 10) {
  currentSeconds = "0" + currentSeconds;
}

day.innerHTML = `Today is: ${currentDay}`;
time.innerHTML = `Current time: ${currentTime}`;

secondDate.innerHTML = `${secondDay}-${currentMonth}-${currentYear}`;

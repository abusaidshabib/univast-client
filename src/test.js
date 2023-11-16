/*
const startsemester = [3, 2, 1];
const endSemester = [1, 2, 3];
let startyear = 2020;
// Define the range
const startNumber = 2023 - 1;
const endNumber = 2020 +1;

// Calculate the number of numbers between startNumber and endNumber
const countNumbers = Math.abs(startNumber - endNumber) + 1;

console.log(countNumbers * 3 + 3 + 3);

// spring -2020 to fall -2023
// fall- 2007 to summer-2020


// Example usage
const startDate = new Date(2020, 8, 1);
const endDate = new Date(2023, 11, 31);

// console.log(startDate, endDate)

const totalMonths =
(endDate.getFullYear() - startDate.getFullYear()) * 12 +
(endDate.getMonth() - startDate.getMonth());

console.log(Math.ceil(totalMonths / 4));

// Example usage
// const startDate = new Date(2007, 8, 1);
// const endDate = new Date(2020, 7, 31);
*/

// // A function that takes two date objects as parameters and returns the number of months between them
function countMonths(date1, date2) {
  // Get the year and month of each date
  var year1 = date1.getFullYear();
  var year2 = date2.getFullYear();
  var month1 = date1.getMonth();
  var month2 = date2.getMonth();

  // Calculate the difference in years and months
  var yearDiff = year2 - year1;
  var monthDiff = month2 - month1;

  // Add the year difference to the month difference and return the result
  var totalMonths = yearDiff * 12 + monthDiff;
  return totalMonths;
}

// Create two date objects for 2007 fall and 2020 summer
// var date1 = new Date("2007-08-20"); // September 2007
// var date2 = new Date("2020-05-15"); // June 2020
var date1 = new Date("2020-01-20");
var date2 = new Date();
// console.log(date1.getMonth(), date2)
console.log(new Date());

// Call the function and store the result
var totalMonths = countMonths(date1, date2);

// Display the result
console.log(Math.ceil(totalMonths / 4)); // 153

// const spring = ["jan", "feb", "mar", "apr"];
// const summer = ["may", "june", "july", "aug"];
// const fall = ["sept", "oct", "nov", "dec"];

// 1-4 > spring
// 4-8 > summer
// 8-12 > fall
// 2020 + 1

const semester = [
  {
    name: "spring",
    start: 0,
    end: 3,
  },
  {
    name: "summer",
    start: 4,
    end: 7,
  },
  {
    name: "fall",
    start: 8,
    end: 11,
  },
];

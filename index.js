// const addNumbers = (a: number, b: number): number => {
//   return a + b;
// };
// console.log(addNumbers(5, 10));
var firstName = "Raghav";
var age = 23;
var isAdult = true;
var marks = [54, 76, 34, 78, 67, 56];
var productTuples = ["Apples", 80];
marks.forEach(function (mark) { return console.log(mark); });
var days;
(function (days) {
    days[days["Monday"] = 0] = "Monday";
    days[days["Tuesday"] = 1] = "Tuesday";
    days[days["Wednessday"] = 2] = "Wednessday";
    days[days["Thursday"] = 3] = "Thursday";
    days[days["Friday"] = 4] = "Friday";
    days[days["Saturday"] = 5] = "Saturday";
    days[days["Sunday"] = 6] = "Sunday";
})(days || (days = {}));
var today = days.Monday;
console.log(today);

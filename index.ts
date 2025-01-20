// const addNumbers = (a: number, b: number): number => {
//   return a + b;
// };

// console.log(addNumbers(5, 10));

const firstName: string = "Raghav";
const age: number = 23;
const isAdult: boolean = true;
const marks: number[] = [54, 76, 34, 78, 67, 56];
const productTuples: [string, number] = ["Apples", 80];
marks.forEach((mark) => console.log(mark));
enum days {
  Monday,
  Tuesday,
  Wednessday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const today: days = days.Monday;
console.log(today)
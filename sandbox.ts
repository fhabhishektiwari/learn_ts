let character = "mario";
let ageP = 30;
let isBlackBelt = false;

// character=20
character = "Lungi";

// age = "yoshi";
ageP = 40;

// isBlackBelt='yes'
isBlackBelt = true;

// const circ = (diameter) => {
//   return diameter * Math.PI;
// };

// console.log(circ("hello")); //NaN

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(7.5));

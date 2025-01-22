let greet: Function;

greet = () => {
  console.log("Hello, world!");
};

// const add = (a: number, b: number, c?: number | string) => { // here c?: number | string is optional parameter
//   console.log(a + b);
//   console.log(c);
// };
const add = (a: number, b: number, c: number | string = 10) => {
  //here c: number | string = 10 is default parameter and function is void type
  console.log(a + b);
  console.log(c);
};
add(5, 10);
add(5, 10, "hello");

const minus = (a: number, b: number): number => {
  return a - b;
};

let result = minus(10, 7); //always specify the return type of the function is number

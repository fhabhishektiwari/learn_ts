"use strict";
// let greet: Function;
// example1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};

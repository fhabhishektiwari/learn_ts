// explicit types
let character: string;
let ageP: number;
let isLoggedIn: boolean;

// ageP = "luigi";
ageP = 30;

// isLoggedIn=25;
isLoggedIn = true;

// arrays
let ninjas: string[] = [];

ninjas.push("shaun");

// union types
let mixed: (string | number | boolean)[] = [];

mixed.push("Ryu");
mixed.push(23);
mixed.push(true);
console.log(mixed);

let uid: string | number;

uid = "123";
uid = 123;
// uid = true;

// objects
let ninjasOne: object;
ninjasOne = { name: "yoshi", age: 20 };

let ninjasTwo: {
  name: string;
  age: number;
  beltColor: string;
};

ninjasTwo = {
  name: "mario",
  age: 30,
  beltColor: "orange",
  // skills: []//skills does not exist
};

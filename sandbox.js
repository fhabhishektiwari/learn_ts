// explicit types
var character;
var ageP;
var isLoggedIn;
// ageP = "luigi";
ageP = 30;
// isLoggedIn=25;
isLoggedIn = true;
// arrays
var ninjas = [];
ninjas.push("shaun");
// union types
var mixed = [];
mixed.push("Ryu");
mixed.push(23);
mixed.push(true);
console.log(mixed);
var uid;
uid = "123";
uid = 123;
// uid = true;
// objects
var ninjasOne;
ninjasOne = { name: "yoshi", age: 20 };
var ninjasTwo;
ninjasTwo = {
    name: "mario",
    age: 30,
    beltColor: "orange",
    // skills: []//skills does not exist
};

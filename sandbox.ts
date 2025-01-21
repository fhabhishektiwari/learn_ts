let ageP: any = 25;

ageP = true;
console.log(ageP);
ageP = "hello";
console.log(ageP);
ageP = { name: "luigi" };
console.log(ageP);

let mixed: any[] = [];

mixed.push(5);
mixed.push("mario");
mixed.push(false);
console.log(mixed);

let ninja: { name: any; age: any };

ninja = { name: "yoshi", age: 30 };
console.log(ninja);

ninja = { name: 30, age: "yoshi" };
console.log(ninja);

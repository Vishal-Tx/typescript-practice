"use strict";
let a = "hello";
let b = true;
a += " world";
let mynumber = 10;
let myRegex = /foo/;
const aArray = a.split("");
console.log(aArray);
const myvalues = [1, 2, 3, 4];
console.log(a);
const myPerson = {
    fName: "John",
    lName: "Doe",
    cool: true
};
const ids = {
    10: "a",
    20: "b"
};
ids[30] = "c";
if (ids[30] === "b") {
    console.log("true");
}
else {
    console.log("false");
}
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
[1, 2, 3].forEach(v => console.log(v));
const ex = [4, 5, 6].map(num => num * 10);
console.log(ex);

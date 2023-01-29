"use strict";
// pluck
const pluck = (items, key) => {
    return items.map(item => item[key]);
};
const dogs = [{ name: "fifi", age: 4 }, { name: "Kion", age: 6 }, { name: "Plol", age: 8 }, { name: "fhii", age: 12 }];
console.log(pluck(dogs, "age"));
console.log(pluck(dogs, "name"));
const sendEvent = (name, data) => {
    console.log([name, data]);
};
sendEvent("addToCart", { productID: "1Ed23", quantity: 2, time: 45, user: "Harry" });
sendEvent("checkout", { time: 25, user: "Joel" });

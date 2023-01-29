"use strict";
function parseCoordinates(arg1, arg2) {
    let coord = {
        x: 0,
        y: 0
    };
    if (typeof arg1 === "object") {
        coord = Object.assign({}, arg1);
    }
    else if (typeof arg1 === "string") {
        arg1.split(",").forEach(str => {
            const [key, value] = str.split(":");
            coord[key] = parseInt(value, 10);
        });
    }
    else {
        coord = {
            x: arg1,
            y: arg2
        };
    }
    return coord;
}
console.log(parseCoordinates({ x: 12, y: 34 }));
console.log(parseCoordinates(44, 98));
console.log(parseCoordinates("x:44,y:55"));

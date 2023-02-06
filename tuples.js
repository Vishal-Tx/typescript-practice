"use strict";
const add3DCoordinates = (c1, c2) => {
    return [
        c1[1] + c2[1],
        c1[0] + c2[0],
        c1[2] + c2[2],
    ];
};
console.log(add3DCoordinates([2, 1, 3], [2, 3, 1]));
const simpleStringState = (initialState) => {
    let str = initialState;
    return [
        () => str,
        (v) => str = v
    ];
};
const [getvalue, setvalue] = simpleStringState("Hello");
console.log("getvalue", getvalue());
setvalue("yolo");
console.log("getvalue", getvalue());
function stringState(initialState) {
    let str = initialState;
    return [
        str,
        (v) => str = v
    ];
}
const [getstring, setString] = simpleStringState("Luke");
console.log("getvalue", getstring());
setString("Ray");
console.log("getvalue", getstring());

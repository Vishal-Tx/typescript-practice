"use strict";
const printIngredients = (quantity, Ingredient, extra) => {
    console.log(`${quantity} ${Ingredient} ${extra ? `${extra}` : ""}`);
};
printIngredients("120", "basil");
printIngredients("1mg", "sugar", "Optional");
function findEmail(user) {
    if (user.info) {
        return user.info.email;
    }
    return "";
}
// or
function findEmailnew(user) {
    if (user.info) {
        return user.info.email;
    }
    return "";
}
// or
function findEmailEasy(user) {
    var _a, _b;
    if (user.info) {
        return (_b = (_a = user === null || user === void 0 ? void 0 : user.info) === null || _a === void 0 ? void 0 : _a.email) !== null && _b !== void 0 ? _b : "";
    }
    return "";
}
console.log(findEmail({ name: "vishal Gupta", info: { email: "vishal" } }));
console.log(findEmailnew({ name: "vishal Gupta", info: { email: "vishal" } }));
console.log(findEmailEasy({ name: "vishal Gupta", info: { email: "vishal" } }));
// optional Callbacks
function addWithCallback(x, y, callback) {
    console.log([x, y]);
    callback === null || callback === void 0 ? void 0 : callback();
}
addWithCallback(2, 3, () => console.log("yolo"));

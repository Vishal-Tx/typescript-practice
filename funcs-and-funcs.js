"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdder = exports.mutateArray = exports.printToFile = void 0;
function printToFile(text, callback) {
    console.log(text);
    callback();
}
exports.printToFile = printToFile;
const mutateArray = (numbers, mutate) => {
    return numbers.map(mutate);
};
exports.mutateArray = mutateArray;
console.log((0, exports.mutateArray)([1, 2, 3], (v) => v * 10));
const createAdder = (v) => {
    return (val) => val + v;
};
exports.createAdder = createAdder;
const adder = (0, exports.createAdder)(55);
console.log(adder(1));

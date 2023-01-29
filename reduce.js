"use strict";
function myForEach(items, forEachFunc) {
    items.reduce((a, v) => {
        forEachFunc(v);
        return undefined;
    }, undefined);
}
myForEach(["a", "b"], (v) => console.log(`myForEach for ${v}`));
function myFilter(items, filterFunc) {
    return items.reduce((a, v) => (filterFunc(v) ? [...a, v] : a), []);
}
console.log(myFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (v) => v > 5));
function myMap(items, mapFunc) {
    return items.reduce((a, v) => [...a, mapFunc(v)], []);
}
console.log(myMap([1, 2, 3, 4, 5, 6], (v) => (v * 7).toString()));

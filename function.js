"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = exports.intro = exports.fetchData = exports.Printformat = exports.format = exports.addString = void 0;
function addNummbers(a, b) { return a + b; }
const addString = (a, b) => `${a}${b}`;
exports.addString = addString;
const format = (a, b) => `${a}${b}`;
exports.format = format;
const Printformat = (a, b) => console.log((0, exports.format)("he", 1));
exports.Printformat = Printformat;
const fetchData = (url) => Promise.resolve(`Data from ${url}`);
exports.fetchData = fetchData;
const intro = (salutatiion, ...names) => `${salutatiion}${names.join(" ")}`;
exports.intro = intro;
const getName = (user) => { var _a, _b; return `${(_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : "first"} ${(_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : "last"}`; };
exports.getName = getName;
exports.default = addNummbers;

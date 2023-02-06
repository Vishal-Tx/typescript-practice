"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// interface MyUserOptionals{
//     name?: string;
//     id?:string;
//     email?:string;
// }
const merge = (user, overrides) => {
    return Object.assign(Object.assign({}, user), overrides);
};
console.log(merge({ id: 1, name: "Jack", email: "Hello@123" }, { id: 2, email: "HelloBuddy@123" }));
const mapById = (users) => {
    return users.reduce((a, v) => (Object.assign(Object.assign({}, a), { [v.id]: v })), {});
};
console.log(mapById([{ id: 1, name: "Jack", email: "Hello@123" }, { id: 2, email: "HelloBuddy@", name: "Yamulack" }]));
const mapByIdOmit = (users) => {
    return users.reduce((a, v) => {
        const { id } = v, other = __rest(v, ["id"]);
        return Object.assign(Object.assign({}, a), { [id]: other });
    }, {});
};
console.log(mapByIdOmit([{ id: 1, name: "Jack", email: "Hello@123" }, { id: 2, email: "HelloBuddy@", name: "Yamulack" }]));

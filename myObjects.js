"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Hardik",
    age: 22,
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Hardik", isPaid: true, email: "test@gmail.com" };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 500 };
}
function createNewUser(user) {
    return __assign({}, user);
}
createNewUser({ name: "", email: "", isActive: true });

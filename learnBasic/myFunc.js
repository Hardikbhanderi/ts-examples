"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addNumbers(num) {
    return num + 2;
}
function getUpper(value) {
    return value.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("Hardik", "test@gmail.com");
signUpUser("Hardik", "Test@gmail.com", true);
getUpper("Hardik");
addNumbers(10);

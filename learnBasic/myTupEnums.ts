// const user : (number | string)[] = [1, "mac"];
let user: [string, number, boolean];

user = ["username", 1234, true];

let rgb: [number, number, number] = [255, 121, 145];

type UserType = [number, string];

const newUser: UserType = [111, "hardik"];

newUser[0] = 45;
// newUser[1] = 45; not allowed

// newUser.push(true) wrong behaviour

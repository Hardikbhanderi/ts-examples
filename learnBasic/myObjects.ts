const User = {
  name: "Hardik",
  age: 22,
  isActive: true
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "Hardik", isPaid: true, email: "test@gmail.com" };

createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 500 };
}

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createNewUser(user: User): User {
  return { ...user };
}

createNewUser({ name: "", email: "", isActive: true });

type UserInfo = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardNo?: number;
};

let myUser: UserInfo = {
  _id: "123",
  name: "hardik",
  email: "test@gmail.com",
  isActive: true
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber & cardDate;

myUser.email = "test1@gmail.com";
// myUser._id = "456" not allowed

export {};

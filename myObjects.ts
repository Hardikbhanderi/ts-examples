const User = {
  name: "Hardik",
  age: 22,
  isActive: true,
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

export {};

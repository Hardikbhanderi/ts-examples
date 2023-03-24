function addNumbers(num: number): number {
  return num + 2;
  //   return "Hello"
}

function getUpper(value: string) {
  return value.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("Hardik", "test@gmail.com");
signUpUser("Hardik", "Test@gmail.com", true);

getUpper("Hardik");

addNumbers(10);

// function getValue(myVal: number): boolean | string {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }

const getStringVal = (s: string): string => {
  return "" + s + "";
};

const numbers = ["one", "two", "three"];
numbers.map((num): string => {
  return `This is ${num}`;
});

function consoleError(errMsg: string): void {
  console.log(errMsg);
}

function handleError(errMsg: string): never {
  throw new Error(errMsg); 
}

export {};

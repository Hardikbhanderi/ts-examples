const detectType = (val: number | string) => {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 2;
};
const provideId = (id: string | null) => {
  if (!id) {
    console.log("Provide id here");
    return;
  }
  id.toLowerCase();
};

const printAll = (strs: string | string[] | null) => {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
};

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

const checkIsAdmin = (account: User | Admin): boolean => {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
  return false;
};

const checkDataType = (x: Date | string) => {
  if (x instanceof Date) {
    x.toUTCString();
  } else {
    x.toLowerCase();
  }
};

type Fish = { swim: () => void };
type Bird = { fly: () => void };

const isFish = (pet: Fish | Bird): pet is Fish => {
  return (pet as Fish).swim !== undefined;
};

const getFood = (pet: Fish | Bird) => {
  if (isFish(pet)) {
    pet;
    return "Fish Food";
  } else {
    pet;
    return "Bird Food";
  }
};

interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;

const getTrueShape = (shape: Shape) => {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  // return shape.side * shape.side;
};

const getArea = (shape: Shape) => {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side * shape.side;
      case "rectangle":
        return shape.length * shape.width
      default :
      const _defaultforshape : never = shape;
      return _defaultforshape
  }
};

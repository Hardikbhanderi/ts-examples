const score: Array<number> = [];
const names: Array<number> = [];
const names1: number[] = [];
// const [array, setArray] = <number[]> useState([])

const checkValidation = (val: boolean | number): boolean | number => {
  return val;
};
const checkValidationTwo = (val: any): any => {
  return val;
};

const checkFinal = <T>(val: T): T => {
  return val;
};

interface Cars {
  type: string;
  modalYear: number;
}

checkFinal<Cars>({ type: "suv", modalYear: 2018 });

function getSearchValue<T>(products: T[]): T {
  return products[3];
}

const getMoreSearchValue = <T>(prod: T[]): T => {
  return prod[2];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

const anotherFunction = <T, U extends Database>(
  valOne: T,
  valTwo: U
): object => {
  return { valOne, valTwo };
};

anotherFunction(3, {
  connection: "direct",
  username: "test",
  password: "Test@123"
});

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Playlist<T> {
  public video: T[] = [];
  addVideo(link:T){
    this.video.push(link)
  }
}

let score: number | string = 33;

score = 40;

score = "12";

type User = {
  id: number;
  name: string;
};

type Admin = {
  userName: string;
  id: number;
};

let hardik: User | Admin = { id: 456, name: "Hardik" };

const getDBId = (id: string | number) => {
  if (typeof id === "string") {
    id.toLowerCase();
  }
};

const data: number[] = [1, 2, 3];
const data1: string[] = ["1", "2", "3"];
let data2: number[] | string[] = [1, 2, 3];
data2 = ["111", "222", "333"];

const mixedData: (string | number | boolean)[] = ["1", 2, true];

hardik = { userName: "hd", id: 456 };

export {};

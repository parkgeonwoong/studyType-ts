type Member = {
  [key: string]: string;
};

const objM: Member = {
  name: "123",
};

// Q.
type My = {
  [key: string]: string | number;
};
const woong: My = {
  name: "geon Woong",
  age: 28,
  location: "Seoul",
};

// Q
type sing = {
  title: string;
  singer: string;
};

const objSing: sing = {
  title: "genius",
  singer: "zico",
};

// Q.
let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

export {};

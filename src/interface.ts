export {};

interface Name {
  name: string;
}

// interface Name {
//     score: number
// }

interface NewName extends Name {
  age: number;
}

let student: Name = {
  name: "a",
};

let teacher: NewName = {
  name: "b",
  age: 20,
};

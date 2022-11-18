export let 이름 = "Park";
export type NameE = string;

export type Car = {
  wheel: number;
  model: string;
};

export interface Bike {
  wheel: 2;
  model: string;
}

// Q.

export type TestType5 = (a?: object) => void;

// Q.
namespace SDog1 {
  export type Dog = string;
}

namespace SDog2 {
  export interface Dog {
    name: string;
  }
}

let dog1: SDog1.Dog = "bark";
let dog2: SDog2.Dog = { name: "paw" };

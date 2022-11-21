/**
 * index signatures
 */

export {};

interface StringOnly {
  [key: string]: string;
}

let user: StringOnly = {
  name: "kim",
  age: "20",
  location: "seoul",
};

// recursive
interface MyType {
  "font-size": MyType | number;
}

let obj: MyType = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};

// Q.
interface Type2 {
  [key: string]: string | number;
}

let obj2: Type2 = {
  model: "k5",
  brand: "kia",
  price: 6000,
  year: 2030,
  date: "6월",
  percent: "5%",
  dealer: "김차장",
};

// Q.
// 다음 object 자료의 타입을 interface 써서 만들어보십시오.
interface Type3 {
  "font-size": number;
  [key: string]: Type3 | number;
}

let obj3: Type3 = {
  "font-size": 10,
  secondary: {
    "font-size": 12,
    third: {
      "font-size": 14,
    },
  },
};

/**
 * object mapping , keyof
 */

let obj4 = { name: "kim", age: 20 };
Object.keys(obj4);

interface Person {
  age: number;
  name: string;
}

type PersonKeys = keyof Person;
let a: PersonKeys = "age";

// 타입 변환기

type Car = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};

type TypeChanger<T> = {
  [key in keyof T]: string;
};

type NewT = TypeChanger<Car>;

// Q.
type Bus = {
  color: string;
  model: boolean;
  price: number;
};

type BusChanger<T> = {
  [key in keyof T]: string | number;
};

type NewBus = BusChanger<Bus>;

// Q.
// object안에 들어있는 모든 속성을 string, number 이렇게 고정된 타입으로 변환해주는게 아니라
// 내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기를 만들어보십시오.

type IwantType<T, want> = {
  [key in keyof T]: want;
};

type NewIwant = IwantType<Bus, string[]>;

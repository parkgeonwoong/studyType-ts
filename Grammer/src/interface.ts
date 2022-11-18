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

// Q.
// interface 이용해서 간단하게 타입을 만들어봅시다
interface TypeItem {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: TypeItem = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

// Q.
// 인터페이스는 오브젝트인데 배열로 어떻게 나타내는가?

interface Basket {
  product: string;
  price: number;
}

interface ArrBasket extends Array<Basket> {}

let 장바구니: Basket[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

interface T1 extends Basket {
  card: boolean;
}

let t1: T1[] = [{ product: "청소기", price: 7000, card: false }];

// Q.
// object 안에 함수를 2개 넣고 싶은데요
// 1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다.
// 2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다.
// 이 object 자료를 어떻게 만들면 될까요?
// interface를 이용해서 object에 타입지정도 해보십시오.

interface InfObj {
  plus(a: number, b: number): number;
  minus(a: number, b: number): number;
}

let objTest: InfObj = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};

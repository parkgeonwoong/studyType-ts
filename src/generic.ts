export {};

function f<MyType>(x: MyType[]): MyType {
  return x[0];
}

let a = f<number>([4, 2]);
let b = f<string>(["1", "2"]);

// 타입 제한하는 = extends
function ff<MyType extends number>(x: MyType) {
  return x - 1;
}

let aa = ff<number>(100);

// Q
// 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요?

function qf<T extends string | string[]>(x: T) {
  return x.length;
}

console.log(qf<string>("hello"));
console.log(qf<string[]>(["123", "asd"]));

// Q.
// data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.
// 근데 변환된 object의 타입은 Animal이 되었으면 좋겠는데 어떻게 코드를 짜면 될까요?
interface Animal {
  name: string;
  age: number;
}

let data = '{"name" : "dog", "age" : 1 }';

function q2f<T>(x: string): T {
  return JSON.parse(x);
}

q2f<Animal>(data);

// Q.

class Person<T> {
  name;

  constructor(a: T) {
    this.name = a;
  }
}

let at = new Person<string>("어쩌구");
at.name; //any 타입이 되었넹

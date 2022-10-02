export {};

// 간단한 것 type
type A = { a: string };
const a: A = { a: "hello" };

// 객체지향 할려면 interface
interface B {
  a: string;
}
const b: B = { a: "hello" };

// union(|)
type union = string | number;

// intersection(&)
type intersection = { hello: "world" } & { woong: "woong" };

// 응용 -> 상속의 개념
type Animal = { breath: true };
type Mammal = Animal & { breed: true };
type Human = Mammal & { think: true };

const woong: Human = { breath: true, breed: true, think: true };

interface InA {
  breath: true;
}
interface InB extends InA {
  breed: true;
}
const exB: InB = { breath: true, breed: true };

/**
 * @desc: 타입은 집합으로 생각
 */

type Ta = { name: string };
type Tb = { age: number };

type C = Ta & Tb;
const c: C = { name: "woong", age: 20 };

/**
 * @desc: void
 */

interface InC {
  talk: () => void;
}

const cnA: InC = {
  talk() {
    return "abc";
  },
};

function fnA(callback: () => void): void {}
fnA(() => {
  return "3";
});

/**
 * @desc: 타입 가드
 */
function numOrStr(a: number | string) {
  if (typeof a === "string") {
    a.split(",");
  } else {
    a.toFixed(1);
  }
}

numOrStr("123");
console.log(numOrStr("123"));

// 타입가드 배열
function numOrStrArray(a: number | number[]) {
  if (Array.isArray(a)) {
    // number[]
    a.concat(4);
  } else {
    // number
    a.toFixed(2);
  }
}

numOrStrArray([1, 2, 3]);

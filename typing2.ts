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

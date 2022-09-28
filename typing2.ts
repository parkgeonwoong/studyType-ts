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

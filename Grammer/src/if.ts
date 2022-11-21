/**
 * 조건문 타입 & infer
 */

export {};

type Age<T> = T extends string ? string : unknown;

let a: Age<string>;

type FirstItem<T> = T extends any[] ? T[0] : any;

let b: FirstItem<string[]>;

/**
 * infer 키워드
 */

type typeInfer<T> = T extends (infer R)[] ? R : unknown;
let c: typeInfer<number[]>;

// 함수 리턴
type typeInfer2<T> = T extends () => infer R ? R : unknown;
let d: typeInfer2<() => void>;

type dd = ReturnType<() => void>;

// Q.
// array의 첫 자료가 string이면 string 타입을 그대로 남겨주고
// array의 첫 자료가 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까요?
type Age2<T> = T extends [string, ...any] ? T[0] : unknown;

let age1: Age2<[string, number]>;
let age2: Age2<[boolean, number]>;

type test1<T> = T extends (x: infer R) => void ? R : unknown;
let x: test1<(x: number) => void>;

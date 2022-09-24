/**
 * @desc: 기본 문법 -> 변수, 함수 등등
 * 타이핑을 적어서 익숙하게
 */

/**
 *   변수 : type
 */
const a: number = 5;
const b: string = "a";
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: symbol = Symbol.for("abc");
//const g: bigint = 1000000n;
const h: any = 123; // 모든 타입이 다 가능 = JS 쓰는 것이랑 동일 그러기에 any이 안쓰기를 지향

// 타입자리에 고정된 원시 값 넣을 수 있음
const i: true = true;

/**
 * 함수 사용
 * 리턴값에도 타입 자리가 중요하다 -> 매개변수 바로 뒤에
 */
function add(x: number, y: number): number {
  return x + y;
}

// 지웠을 경우 JS로 말이 되면 됨
const add1: (x: number, y: number) => number = (x, y) => x + y;

// type alias
type Add = (x: number, y: number) => number;
const add2: Add = (x, y) => x + y;

// 인터페이스 통해서 함수 만드는 법
interface Add2 {
  (x: number, y: number): number;
}
const add3: Add2 = (x, y) => x + y;

/**
 * 배열 & 객체
 */

// 배열
const arr: string[] = ["123", "abc"];
const arr2: Array<number> = [123, 456]; // 제네릭
const arr3: [number, number, string] = [12, 34, "hello"]; // 튜플: 길이가 정해진 배열

// 객체
const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

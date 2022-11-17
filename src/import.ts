/**
 * import, export
 */
import { 이름, NameE, Car, Bike, TestType5 } from "./export";

let ccc: Car = { wheel: 2, model: "ccc" };

// Q
const testFunc: TestType5 = (a) => {
  console.log(a);
};

testFunc({ abc: "hello" });

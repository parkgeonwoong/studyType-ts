"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a = { a: "hello" };
const b = { a: "hello" };
const woong = { breath: true, breed: true, think: true };
const exB = { breath: true, breed: true };
const c = { name: "woong", age: 20 };
const cnA = {
    talk() {
        return "abc";
    },
};
function fnA(callback) { }
fnA(() => {
    return "3";
});
/**
 * @desc: 타입 가드
 */
// 타입가드 문자열
function numOrStr(a) {
    if (typeof a === "string") {
        a.split(",");
    }
    else {
        a.toFixed(1);
    }
}
numOrStr("123");
console.log(numOrStr("123"));
// 타입가드 배열
function numOrStrArray(a) {
    if (Array.isArray(a)) {
        // number[]
        a.concat(4);
    }
    else {
        // number
        a.toFixed(2);
    }
}
numOrStrArray([1, 2, 3]);
// 타입 가드 클래스
class Ca {
    aaa() { }
}
class Cb {
    bbb() { }
}
function aOrB(param) {
    if (param instanceof Ca) {
        param.aaa();
    }
}
aOrB(new Ca());
// 객체를 만들때 태그 또는 라벨을 달아놓는 습관
const human1 = { type: "human1" };
const dog = { type: "dog" };

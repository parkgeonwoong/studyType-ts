"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objM = {
    name: "123",
};
const woong = {
    name: "geon Woong",
    age: 28,
    location: "Seoul",
};
const objSing = {
    title: "genius",
    singer: "zico",
};
// Q.
let project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
/**
 * union 타입 지정
 */
let members = [1, "2", 3];
let objtype = { a: 123 };
/**
 * any, unknown
 */
let any;
any = 123;
any = [];
let unknown;
let test = any;
// let test1:string = unknown // 타입에러 잡아줌
// Q.
let user = "kim";
let age = undefined;
let married = false;
let 철수 = [user, age, married];
// Q.
let 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
/**
 * 함수
 */
function double(n) {
    return n * 2;
}
function double2(n) {
    n * 2;
}
function testF(x) {
    x * 2;
}
testF();
// Q.
// 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
// 파라미터와 return 타입지정.
function app1(name) {
    if (typeof name === "string") {
        console.log(`안녕하세요 ${name}`);
    }
    if (typeof name === "undefined") {
        console.log("이름이 없습니다.");
    }
}
app1();
// Q.
// 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어라.
// 예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
// 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
// 숫자 또는 문자 이외의 자료가 들어오면 안됩니다.
function app2(param) {
    return String(param).length;
}
console.log("Q2: ", app2("512"));
console.log("Q2: ", app2(9567));
// Q.
// 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.
// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.
// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.
// (예시)
// 결혼가능하냐(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.
// 결혼가능하냐(100, false, '상') 이렇게 사용할 경우 아무것도 return되지 않습니다.
function app3(월소득, 집보유여부, 매력점수) {
    let cnt = 0;
    if (집보유여부 === true) {
        cnt = cnt + 500;
    }
    if (매력점수 === "상") {
        cnt = cnt + 100;
    }
    cnt += 월소득;
    if (cnt >= 600) {
        return "결혼 가능";
    }
}
console.log("Q3: ", app3(700, false, "중"));
console.log("Q3: ", app3(100, false, "상"));
console.clear();
/**
 * Narrowing
 */
function testNarrow(x) {
    let varArr = [];
    if (typeof x === "number") {
        varArr[0] = x;
    }
}
// Q.
// 숫자여러개를 array 자료에 저장해놨는데
// 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// 이걸 클리닝해주는 함수가 필요합니다.
// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
function app4(arr) {
    let newArr = [];
    arr.forEach((item) => {
        if (typeof item === "string") {
            newArr.push(parseInt(item));
        }
        else {
            newArr.push(item);
        }
    });
    return newArr;
}
console.log(app4(["1", 2, "3"]));

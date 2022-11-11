"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Rest 문법
 */
function rest(...args) {
    for (let item of args) {
        console.log(item);
    }
}
// rest(1, 2, 3, 4, 5);
/**
 * destructor
 */
let [a, b] = ["hello", 123];
console.log(b);
console.clear();
let person = { student: true, age: 20 };
function 함수({ student, age }) {
    console.log(student, age);
}
함수(person);
// Q.
// 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈
function restType(...args) {
    let max = 0;
    args.forEach((item) => {
        if (item < 0) {
            console.log("0 이상의 정수만!");
        }
        else {
            if (item > max) {
                max = item;
            }
        }
    });
    return max;
}
console.log(restType(6, 3, 7, 2));
console.clear();
const obj1 = {
    user: "kim",
    comment: [3, 5, 4],
    admin: false,
};
function obj1Func({ user, comment, admin }) {
    console.log(user, comment, admin);
}
obj1Func(obj1);
const arr1 = [40, "wine", false];
function arr1Func([a, b, c]) {
    console.log(a, b, c);
}
arr1Func(arr1);

export {};

/**
 * Rest 문법
 */
function rest(...args: number[]) {
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

type Student = { student: boolean; age: number };

function 함수({ student, age }: Student): void {
  console.log(student, age);
}
함수(person);

// Q.
// 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈

function restType(...args: number[]): number {
  let max = 0;

  args.forEach((item) => {
    if (item < 0) {
      console.log("0 이상의 정수만!");
    } else {
      if (item > max) {
        max = item;
      }
    }
  });

  return max;
}

console.log(restType(6, 3, 7, 2));

console.clear();

// Q.
// 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
// (조건1) 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.

// 함수({ user: "kim", comment: [3, 5, 4], admin: false });

type Obj1 = {
  user: string;
  comment: number[];
  admin: boolean;
};

const obj1: Obj1 = {
  user: "kim",
  comment: [3, 5, 4],
  admin: false,
};

function obj1Func({ user, comment, admin }: Obj1) {
  console.log(user, comment, admin);
}

obj1Func(obj1);

// Q.
// 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
// 함수( [40, 'wine', false] )
// 어떻게 코드를 짜야할까요?
// (조건1) 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.

type Arr1 = [number, string, boolean];

const arr1: Arr1 = [40, "wine", false];

function arr1Func([a, b, c]: Arr1) {
  console.log(a, b, c);
}

arr1Func(arr1);

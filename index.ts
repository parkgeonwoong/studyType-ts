/**
 * 복습, 단순 타입 지정
 */
type Member = {
  [key: string]: string;
};

const objM: Member = {
  name: "123",
};

// Q.
type My = {
  [key: string]: string | number;
};
const woong: My = {
  name: "geon Woong",
  age: 28,
  location: "Seoul",
};

// Q
type sing = {
  title: string;
  singer: string;
};

const objSing: sing = {
  title: "genius",
  singer: "zico",
};

// Q.
let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

export {};

/**
 * union 타입 지정
 */

let members: (number | string)[] = [1, "2", 3];
let objtype: { a: number | string } = { a: 123 };

/**
 * any, unknown
 */

let any: any;
any = 123;
any = [];

let unknown: unknown;
let test: string = any;
// let test1:string = unknown // 타입에러 잡아줌

// Q.
let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | undefined | number | boolean)[] = [user, age, married];

// Q.
let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

/**
 * 함수
 */

function double(n: number): number {
  return n * 2;
}
function double2(n: number): void {
  n * 2;
}

function testF(x?: number): void {
  x * 2;
}

testF();

// Q.
// 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
// 파라미터와 return 타입지정.

function app1(name?: string): void {
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

function app2(param: string | number): number {
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

function app3(
  월소득: number,
  집보유여부: boolean,
  매력점수: "상" | "중" | "하"
): string {
  let cnt: number = 0;

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

function testNarrow(x: number | string) {
  let varArr: number[] = [];

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

function app4(arr: (string | number)[]): number[] {
  let newArr: number[] = [];

  arr.forEach((item) => {
    if (typeof item === "string") {
      newArr.push(parseInt(item));
    } else {
      newArr.push(item);
    }
  });

  return newArr;
}

console.log(app4(["1", 2, "3"]));

// Q.
let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };

const sub: (obj: { subject: string | string[] }) => string = (obj) => {
  if (typeof obj.subject === "string") {
    return obj.subject;
  }

  if (Array.isArray(obj.subject)) {
    console.log(obj.subject);
    return obj.subject[obj.subject.length - 1];
  }
};

console.log("result: ", sub(민수쌤));

console.clear();

/**
 * type const
 */

type StudyType = {
  readonly name?: string;
};

const study: StudyType = {
  name: "node",
};

/**
 * 타입 합치기
 */
type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number; name: string };
type PositionY = { y: number; name: string };

type NewType = PositionX & PositionY;

// Q.1
// object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
// 교집합 -> 인터섹션
const Hello: NewType = {
  name: "1",
  x: 12,
  y: 2,
};

console.log(Hello);

// Q.2
// 다음 조건을 만족하는 타입을 만들어봅시다.
// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다.
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.
// type alias로 만들어보셈

type Qtype1 = {
  color?: string;
  size: number;
  readonly position: number[];
};

// Q.3
// 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오.
// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.

type Qtype2 = {
  name: string;
  phone: number;
  email: string;
};

const Atype2: Qtype2 = {
  name: "kim",
  phone: 123,
  email: "abc@naver.com",
};

// Q.4
// 다음을 만족하는 type alias를 만들어보십시오.
// 1. Q3와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다.
// 3. Q3에서 만들어둔  type alias를 재활용해봅시다.

type Qtype3 = {
  adult?: boolean;
};

type Atype3 = Qtype2 & Qtype3;

const Atype4: Atype3 = {
  name: "kim",
  phone: 123,
  email: "abc@naver.com",
  adult: true,
};

console.log(Atype4);

export {};

// 여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.
// 오늘 배운 tuple 타입으로 타입지정합시다.
// (예시) [ '동서녹차', 4000, true ] 이런 자료 만들고 타입지정하라는 소리입니다.

const at: [string, number, boolean] = ["동서녹차", 4000, true];

let arr: [string, number, ...boolean[]] = [
  "동서녹차",
  4000,
  true,
  false,
  true,
  true,
  false,
  true,
];

// Q.
// 1. 이 함수의 첫째 파라미터는 문자,
// 2. 둘째 파라미터는 boolean,
// 3. 셋째 파라미터부터는 숫자 또는 문자가 들어와야합니다.
// 그럼 함수에 파라미터를 어떻게 만들고 타입지정은 또 어떻게 해야할까요?
//  tuple 타입과 rest parameter를 사용해봅시다.

function tupleFunc(...rest: [string, boolean, ...(string | number)[]]) {}

tupleFunc("bb", true, 1, "12", 5);

// Q
// 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.
// 파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.
// 문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없습니다.
// 함수 만들어보시고 함수의 파라미터/return 타입지정도 확실하게 해봅시다.
// (동작예시)
// 함수('b', 5, 6, 8, 'a') 이렇게 사용할 경우 이 자리에 [ ['b', 'a'], [5, 6, 8] ] 이 return 되어야합니다.

// type Filter = (...rest: [...(string|number)[]]) => unknown

const filter: (...rest: (string | number)[]) => [string[], number[]] = (
  ...rest
) => {
  let result: [string[], number[]] = [[], []];

  rest.forEach((item) => {
    if (typeof item === "string") {
      result[0].push(item);
    } else {
      result[1].push(item);
    }
  });

  return result;
};

console.log(filter("b", 5, 6, 8, "a"));

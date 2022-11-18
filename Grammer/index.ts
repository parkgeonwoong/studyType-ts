/**
 * HTML과 연동
 */
let Title = document.querySelector("#title");

// narrowing 하는 방법
if (Title !== null) {
  Title.innerHTML = "Hello World!";
}

if (Title instanceof Element) {
  Title.innerHTML = "Instanceof!";
}

if (Title?.innerHTML != undefined) {
  Title.innerHTML = "Optional chaning!";
}

// Element의 상속된게 많고, 정확한 타입을 기재해야 한다
let Link = document.querySelector(".link");
if (Link instanceof HTMLAnchorElement) {
  Link.href = "https://kakao.com";
}

// 버튼 리스터
let button = document.querySelector("#button");

button?.addEventListener("click", () => {
  console.log("클릭!");
});

// Q.
let img = document.querySelector("#image");

if (img instanceof HTMLImageElement) {
  // img.src = "new.jpg";
}

// Q.
let naver = document.querySelectorAll(".naver");

naver.forEach((item) => {
  if (item instanceof HTMLAnchorElement) {
    item.href = "https://kakao.com";
  }
});

// class - js
// function Class1 (first, second) {
//     this.a = first
//     this.b = second
// }

// new Class1('a', 'b')

// class Class2 {
//     constructor(first, second) {
//         this.a = first
//         this.b = second
//     }
// }

// new Class2('a', 'b')

/**
 * class  문제
 */

const drawDiv = document.querySelector(".draw");
const drawBtn = document.querySelector(".drawBtn");

class Square {
  width: number;
  height: number;
  color: string;

  constructor(a: number, b: number, c: string) {
    this.width = a;
    this.height = b;
    this.color = c;
  }

  draw() {
    const newDiv = document.createElement("div");

    let random = Math.random();

    newDiv.style.top = `${random * 400}px`;
    newDiv.style.left = `${random * 400}px`;

    newDiv.style.position = "relative";
    newDiv.style.width = `${this.width}px`;
    newDiv.style.height = `${this.height}px`;
    newDiv.style.backgroundColor = `${this.color}`;
    newDiv.style.marginBottom = "10px";

    if (drawDiv instanceof Element) {
      drawDiv.appendChild(newDiv);
    }
  }
}

let 네모 = new Square(30, 30, "red");

drawBtn?.addEventListener("click", () => {
  네모.draw();
});

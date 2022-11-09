let Title = document.querySelector("#title");
// narrowing 하는 방법
if (Title !== null) {
    Title.innerHTML = "Hello World!";
}
if (Title instanceof Element) {
    Title.innerHTML = "Instanceof!";
}
if ((Title === null || Title === void 0 ? void 0 : Title.innerHTML) != undefined) {
    Title.innerHTML = "Optional chaning!";
}
// Element의 상속된게 많고, 정확한 타입을 기재해야 한다
let Link = document.querySelector(".link");
if (Link instanceof HTMLAnchorElement) {
    Link.href = "https://kakao.com";
}
// 버튼 리스터
let button = document.querySelector("#button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
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

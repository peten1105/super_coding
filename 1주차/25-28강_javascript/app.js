const 맥북 = "300만원";
let 아이패드 = "100만원";
var 아이폰 = "200만원";

// var 구식방법
// 문제점 : 아래와 같은 경우에 에러 처리되지 않고 정상적으로 출력된다.
/** 
var 아이폰 = "200만원";
console.log("(1) 아이폰은 ", 아이폰 );
var 아이폰 = "300만원";
console.log("(2) 아이폰은 ", 아이폰 );

// 출력결과
(1) 아이폰은 200만원
(2) 아이폰은 300만원
*/

console.log("맥북은 ", 맥북);
console.log("아이패드는 ", 아이패드);
console.log("아이폰은 ", 아이폰);

// 함수와 같은 표현
const 더하기 = (a, b) => {
  console.log("가격은", a + b, "만원입니다.");
};

console.log("애플워치랑 맥북 가격이 얼마에요?");
더하기(50, 200);

// 계산기 만들기
const 계산기 = {
  더하기: function (a, b) {
    console.log("가격은", a + b, "만원입니다");
  },
  빼기: function (a, b) {
    console.log("가격은", a - b, "만원입니다");
  },
  곱하기: function (a, b) {
    console.log("가격은", a * b, "만원입니다");
  },
  나누기: function (a, b) {
    console.log("가격은", a / b, "만원입니다");
  },
};

console.log("애플워치랑 맥북 얼마에요?");
계산기.더하기(50, 200);

// 태그를 가져오는 방법
// 1. document.getElementById()
/*
const timeEle = document.getElementById("time");
timeEle.style.color = "tomato";
timeEle.innerText = "01:20";
*/

// 2. document.querySelector() : id, class를 통해서도 가져올 수 있다.
//const timeEle2 = document.querySelector("h1");
// #id .class
/*
function 클릭시_실행될_함수() {
  timeEle2.style.color = "orange";
  timeEle2.innerText = "012:231";
}
*/
//timeEle2.addEventListener("click", 클릭시_실행될_함수);
//timeEle2.addEventListener("mouseover", 클릭시_실행될_함수);
/*
function sayHello() {
  console.log("hello");
}
*/

// 1회성
//setTimeout(sayHello, 1000);

const 시작시간 = new Date();

function setTime() {
  const time = new Date();

  const 현재시간 = time;
  const 흐른시간 = new Date(현재시간 - 시작시간);
  const 분 = 흐른시간.getMinutes().toString().padStart(2, "0");
  const 초 = 흐른시간.getSeconds().toString().padStart(2, "0");

  const timeH1 = document.getElementById("time");
  //timeElement.innerText = hour + " : " + minutes + " : " + second;

  timeH1.innerText = `${분}:${초}`;
}

// 주기성
setInterval(setTime, 1000);

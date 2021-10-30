/*
     chapter 54. this
*/

// this.valueA = 'a';
// // console.log(valueA);

// valueB = 'b';
// // console.log(this.valueB);

// function checkThis() {
//      console.log(this);
// }


// function checkThis2() {
//      "use strict";
//      console.log(this);
// }

// checkThis();
// checkThis2();



var apple = '독이 든 사과';
var home = {
  apple: '맛있는 사과',
  eatApple: eatAppleFn
}

function eatAppleFn() {	
  console.log(`백설공주가 ${this.apple}를 먹습니다.`);    
}

// (1) 객체 method 호출
home.eatApple(); // 백설공주가 맛있는 사과를 먹습니다.

// (2) 함수 직접 호출
eatAppleFn(); // 백설공주가 독이 든 사과를 먹습니다.




/*
     chapter 60. 표준 내장 객체 
*/

const str1 = '자바스크립트 200제';
const str2 = new String('자바스크립트 200제');

//string
console.log(typeof str1);
//object
console.log(typeof str2);

console.log(str1 === '자바스크립트 200제');
//값이 아닌 주소값을 참조하기 떄문에 false
console.log(str2 === new String('자바스크립트 200제'));

console.log(str1.valueOf());
console.log(str2.valueOf());
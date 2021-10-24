//2021.10.24 javascript study 

 /*
     chapter 8. 자료형
 */

//숫자형
var x = 5;

//문자형
var y = 'five';

//불린형
var isTrue = true;

//null
var empty = null;

//undefined
var nothing

//Symbol 
//변경 불가능한 자료형. 참조형의 키(key)로도 사용 가능
var sym = Symbol('me');

//객체(object)
//키:값 형태로 키는 반드시 String 형태
var item = {
    price: 5000,
    count: 10
};

//배열(Array)
var fruits = ['apple','orange','kiwi'];

//함수(function)
var addFruit = function (fruit) {
    fruits.push(fruit);
}
//함수 호출
addFruit('watermelon');

console.log(fruits);

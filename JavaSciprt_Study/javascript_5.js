 /*
     chapter 39. 스코프 
 */

//스코프는 유효 범위로써 변수와 매개변수가 어디까지 유효한지 나타냄 
//ex) 변수 a가 어디를 참조할지, 실제 값이 무엇인지 찾을 때 사용,,
//기본적으로 전역과 함수 단위로 스코프 생성 (전역에 선언한 변수는 어디에서나 접근 가능)

//1.
//전역 스코프 
var a = 10;
console.log(a);

function print() {
    //지역 스코프
    var b = 20;
    if(true) {
        //지역 스코프
        var c = 30;
    }
    //print 함수 안에서는 모두 c 접근 가능 
    console.log(c)
}

print();
//ReferenceError: b is not defined
//b는 해당 함수 내에서만 접근 가능 
// console.log(b);



     
//2.
var a = "global";

function print1() {
    console.log(a);
}

function print2() {
    var a = "local";
    print1();
}

//둘다 global
//자바스크립트는 렉시컬 스코프이기 때문에 코드 작성하는 시점에 확정. 
// > print1이 작성될 때는 이미 전역 a를 참조 하고 있기 때문에 global 출력
print1();
print2();






 /*
     chapter 40. 함수 호이스팅 
 */

//호이스팅 : 자바스크립트에서는 함수를 선언하기 전에 호출 가능 
// > 직역하면 끌어 올리기 인데, 함수가 실제 호출하기 이전으로 끌어 올라간 것처럼 동작 


//함수
hello();
function hello() {
    console.log('안녕');
}


//표현식 
//Uncaught TypeError: hello2 is not a function
//hello2 이름으로 선언된 변수는 호이스팅이 이루어짐. 여기에 undefined 할당됨 
// hello2();
var hello2 = function() {
    console.log('안녕2');
}




 /*
     chapter 41. let
 */

if(true) {
    //var로 정의한 변수는 함수 단위의 유효 범위 가짐. 블록 밖에서도 접근 가능
    var f = 'global';
    //let으로 정의한 변수는 블록 단위의 유효 범위 가짐. 블록 밖에서 접근 불가
    let b = 'local';
}

console.log(f);
//Uncaught ReferenceError: b is not defined
// console.log(b);


let value = "바깥";
if(ture) {
    //Uncaught ReferenceError: ture is not defined
    //블록 밖에서 선언된 let 변수는 접근 X
    console.log(value);
    let value = "안";
}





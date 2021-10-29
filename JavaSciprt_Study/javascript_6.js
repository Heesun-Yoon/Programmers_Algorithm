
/*
     chapter 42. const
*/

//let과 마찬가지로 블록 단위로 스코프 정의 가능. 대신 선언 시 값을 할당해야 하고 이후에 재할당 불가 

const URL = 'http://js.com';
//ypeError: Assignment to constant variable.
//const로 선언된 변수는 재할당 불가
// URL = 'http://js.com';

if(true) {
    const URL2 = 'http://js.com';
}

//URL2 변수는 블록 내에서 선언되었기 때문에 밖에서 접근 불가
// console.log(URL2);




/*
     chapter 43. 스코프 체인 
*/

//스코프 체인 : 문자 그대로 스코프가 연결되어 있음 

var person = 'harin';

function print() {
    var person2 = 'jay';

    function innerPrint() {
        console.log(person);
        console.log(person2);
    }
    innerPrint();

    console.log('print finished');
}

print();
console.log('finished');




/*
     chapter 44. 클로저
*/

//*렉시컬 환경(Lexical Environment): 식별자와 값을 관리하고, 외부 상위 스코프에 대한 참조를 기록하는 데 사용하는 자료구조. 환경 레코드와 외부 렉시컬 환경 참조에 대한 정보로 구성되어 있다.
//클로저 : 함수가 정의될 때의 렉시컬 환경을 기억하는 함수

function create() {
    let count = 0;
    return {
        increase: function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    };
}

//create 함수에는 객체를 반환 (increase, getCount)
//counter1 은 create 함수에서 반환된 2개의 객체 가지고 있음 
const counter1 = create();
const counter2 = create();

counter1.increase();
counter1.increase();
console.log('counter 1의 값 : ' + counter1.getCount());

counter2.increase();
console.log('counter 2의 값 : ' + counter2.getCount());





function count() {
    var i;
    for (i = 1; i < 10; i += 1) {
        console.log(i);
        setTimeout(function timer() {
            console.log(i);
        }, i*1000);
    }
}
count();


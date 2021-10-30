
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
            //맨 마지막에 실행됨
            // console.log(i);
        }, i*1000);
    }
}
count();




/*
     chapter 49. 생성자 함수
*/

//생성자 함수는 앞에 new 키워드가 붙으며 함수명은 대문자로 시작해야 한다.
//반환되는 객체의 초기 상태와 행위 정의할 수 있음

function Teacher(name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.teach = function (student) {
        console.log(student + '에게' + this.subject + '를 가르칩니다.');
    };
}

//생성자 함수 호출
const jay = new Teacher('jay',30,'JavaScript');
//Teacher {name: 'jay', age: 30, subject: 'JavaScript', teach: ƒ}
console.log(jay);
//bbo에게JavaScript를 가르칩니다.
jay.teach('bbo');


console.log(jay.constructor);
console.log(jay instanceof Teacher);

const jay2 = Teacher('jay',30,'JavaScript');
//undefined
console.log(jay2);
//30 (전역변수의 age를 참조해 출력)
console.log(age);



/*
     chapter 50. 생성자 함수
*/

//생성자 함수로부터 만들어진 객체는 그 생성자 함수의 프로토타입 객체를 상속
 
//생성자 함수 정의. 내부 속성으로 dataStore 가지고 빈 객체 할당
function Storage() {
    this.dataStore = {};
}

//Stroge 생성자 함수의 프로토타입 객체에 put 메소드 추가. put 메소드는 주어진 키에 해당하는 값을 dataStore 속성에 할당
Storage.prototype.put = function(key, data) {
    this.dataStore[key] = data;
}

//Stroge 생성자 함수의 프로토타입 객체에 getData 메소드 추가. getData 메소드는 매개변수의 값을 키로 해서 dataStroe 속성에서 찾아 반환
Storage.prototype.getData = function(key) {
    return this.dataStore[key];
}

//생성자 호출
const productStorage = new Storage();
//key <-> value 값 형태
productStorage.put('id001', {name: '키보드', price: 2000});
//{name: '키보드', price: 2000}
console.log(productStorage.getData('id001'));

//remover 생성자 함수의 this에 Storage 생성자 함수에서 정의한 대로 dataStroe가 속성으로 추가됨
function Remover() {
    Storage.call(this);
}

//Storage 함수의 프로토타입 객체가 remover 함수의 프로토타입 객체의 __proto__에 할당 > 두 프로토타입이 상속 관계 형성
Remover.prototype = Object.create(Storage.prototype);
//remover 생성자 함수의 프로토타입 객체에 removerAll 메소드 추가
Remover.prototype.removerAll = function() {
    this.dataStore = {}
}

const productStorage2 = new Remover();
productStorage2.put('id001', {name: '키보드', price: 2000});
productStorage2.removerAll();
const item2 = productStorage2.getData('id001');
console.log('마지막' + item2);
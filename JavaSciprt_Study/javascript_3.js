//2021.10.27 javascript study 

 /*
     chapter 24. 삼항 연산자
 */


// 조건문 ? 표현문1 : 표현문2 
// 조건문이 참 일때 표현문1 실행, 거짓일 때 표현문2 실행

var condition = 5 > 10;
condition ? console.log('참') : console.log('거짓');


 /*
     chapter 26. 자료형 변환

     - 덧셈 연산자는 대입된 값에 따라 숫자형 또는 문자형
     - 뺄셈, 곱셈, 나눗셈은 항상 숫자형 반환
     - String, Number 함수를 통해 며이적으로 자료형 변환 가능

 */


console.log("5" + 1);
console.log("5" * 2);
console.log("There is" + 5);
console.log("Five" * 2);

console.log('- 연산자를 활용한 자료형 변환');
var str = 5 + "1";
console.log(str);
console.log(typeof str);

var num = +str;
console.log(num);
console.log(typeof num);

console.log('- 함수를 활용한 자료형 변환');
str = String(num);
console.log(str);
console.log(typeof str);

num = Number(str);
console.log(num);
console.log(typeof num);



 /*
     chapter 28. 객체 
 */

var family = {

    'address' : 'Seoul',
    members : {},
    addFamily : function(age, name, role){
        this.members[role] = {
            age: age,
            name: name
        };
    },
    getHeadcount : function() {
        //member들의 key를 모아 배열로 반환하고, 그 반환된 배열의 길이를 통해 family 객체 사이즈 알 수 있음
        //Object.keys() 메소드는 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환
        return Object.keys(this.members).length;
    }


};

family.addFamily(30, 'chloe', 'aunt');
//member에 추가된 개수(인원수) 출력
console.log(family.getHeadcount());



 /*
     chapter 30. ES6 향상된 객체 문법 - 단축 속성명
 */

var address = 'Seoul';
var members = {};

var addFamily = function(age, name, role) {
    //{변수명} 으로 정의한 객체는 {변수명 : 변수값} 으로 정의된 것과 동일
    this.members[role] = {age, name};
};

var getHeadcount = function() {
    return Object.keys(this.members).length;
};



 /*
     chapter 31. ES6 향상된 객체 문법 - 속성 계산명
 */

var obj = {};
for (var i = 0; i<4; i++) {
    obj['key' + i] = i;
}
console.log(obj);


var profile = 'chloe:30';
var person = {
    [profile] : true,
    //profile을 split으로 짜르면 배열에 chole, 30 각각 담김 
    [profile.split(':')[0]]: profile.split(':')[1]
};

console.log(person);


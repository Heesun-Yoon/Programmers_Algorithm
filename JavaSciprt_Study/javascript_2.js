//2021.10.24 javascript study 

 /*
     chapter 10. if
 */

    
//if
var result = true;
if(result) console.log('result 참');

if(!result)
    console.log('실행 X');

if(result) {
    console.log('result 결과');
    console.log('>> 참');
}


//if-else
var number = 2;

if(number == 1) {
    console.log('number는 1');
} else if(number == 2) {
    console.log('number는 2');
} else {
    console.log('둘다 X');
}


//swith
var subject = '자바스크립트';

switch (subject) {
    case 'C언어':
        console.log('C언어');
        break;
    case '자바스크립트':
        console.log('자바스크립트');
        break;
    default:
        console.log('둘다 아님');
        break;
}



//for
for (var i = 0; i < 10; i++){
    console.log(i + '번째');
}


//for 활용
var hometown = [
    {name: '희선', place: '구리', city:'경기도'},
    {name: '준수', place: '남가좌동', city: '서대문구'}
];

for(var i = 0; i < hometown.length; i++){
    var h = hometown[i];
    // console.log(h);
    // console.log(h.city);
    if(!h || !h.city) {
        // console.log(h);
        continue;
    }

    console.log(i + '번째 실행');

    //객체 name 값이 '희선'으로 일치하는 경우 출력하고 for문 끝냄
    if(h.name === '희선') {
        console.log(h.name + '의 고향은 ' + h.city + ' ' + h.place + '입니다.');
        break;
    }
}



//for in
var store = {snack: 1000, flower: 5000, beverage: 2000};

//item 이라는 이름으로 store 요소 순회
//(*) item = store 라는 객체 이름으로 대입 -> item에 snack, flower, beverage..가 들어감. -> store[item]이 1000, 5000, 2000이 될 수 있는 이유
for (var item in store) {
    //for-in 사용시 hasOwnProperty 사용하여 객체 안에 속성이 있는지 한번 더 확인 권장
    if(!store.hasOwnProperty(item)) {
        continue;
    }

    console.log(item + '는 가격이 ' +store[item] + '입니다.');
}




//while
var hometown = [
    {name: '희선', place: '구리', city:'경기도'},
    {name: '준수', place: '남가좌동', city: '서대문구'}
];

var isHometown = function(h, name) {
    console.log('함수 실행 완료. ${h..city} 도시에서 ${name}을 찾습니다.');

    if(h.name === name) {
        console.log('${h.name} 의 고향은 ${h.city} ${h.place} 입니다.');
        return true;
    }
    return false;
}

var h;
while (h = hometown.shift()) {
    if(!h.name || !h.place || !h.city) continue;

    var result = isHometown(h,'희선');
    if(result) break;
}

var i =0;
var names = ['희선','준수'];
var citis = ['경기도','서대문구'];
do {
    hometown[i] = {name: name[i], city: citis[i]};
    i++;
} while(i < 4);

console.log(hometown);

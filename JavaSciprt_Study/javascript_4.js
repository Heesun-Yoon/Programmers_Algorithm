 /*
     chapter 35. 예외처리
 */

//1.
// function checkNumber(val) {
//     if (typeof val != 'number') throw '유효하지 않은 값';
//     console.log('유효한 값');
// }

// checkNumber(100);
// checkNumber('Wrong type');



//2.
// function checkNumber(val) {
//     if(typeof val !== 'number') throw '유효 X';
//     console.log('숫자형임');
// }

// try{
//     checkNumber(100);
//     checkNumber('Wrong type');
// } catch (e) {
//     console.log('에러')
// } finally {
//     console.log('완료');
// }



 /*
     chapter 36. arguments 객체
 */

//전달인자 (arguments) 은 함수가 호출될 때 전달되는 값

function sum() {
    var total = 0;
    for (var i = 0; i<arguments.length; i++){
        total += arguments[i];
    }
    //instanceof : 타입 확인하는 것 (array인지 ? 맞으면 true)
    console.log(arguments instanceof Array);
    return total;
}

var sumOf1to3 = sum(1,2,3);
console.log(sumOf1to3);


function testArg() {
    //slice 메소드 호출하면 arguments 개체 요소들을 복사하는 새로운 배열이 만들어짐 > newArr만 배열, arguments는 배열 X
    var newArr = Array.prototype.slice.call(arguments);
    console.log(newArr);
    console.log(newArr.indexOf('b'));
    //arguments는 배열이 아니라서 오류. indexOf는 배열에서만 사용 가능
    // console.log(arguments.indexOf('b'));
}

testArg('a','b');


//???
function draw(width = 200, height = 400) {
    console.log('${width} X ${height} 차트');
}

draw(100);
draw();


 /*
     chapter 38. 나머지 매개변수
 */

function sum(...args) {
    var total = 0;
    for(var i = 0; i < args.length; i++) {
        total += args[i];
    }
    console.log(args.indexOf(1));
    return total;
}

console.log(sum(1,2,3));





function sum2(a,b, ...others) {
    var total = a + b;
    console.log('others.length '+others.length);
    for(var i = 0; i < others.length; i++) {
        //a,b가 아닌 others의 합계 (a,b는 total에서 합계 되었음)
        total += others[i];
    }
    return total;
}

console.log(sum2(1,2));
console.log(sum2(1,2,3,4));


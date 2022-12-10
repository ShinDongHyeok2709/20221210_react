// 최신문법의 기준 ES6(2015)

/*
    1. var 문제점
        1) 중복 선언이 가능하다.
        2) 변수 호이스팅(끌어올리다 뜻)이 발생하다. => 변수 선언 이전에 참조간 되다. 변수 초기화시 undefined가 할당된다.
        3) 블록 레벨 스코프(유효 범위)를 지원하지 않는다.
*/
console.log(num); //호이스팅 발생
var num = 10;
console.log(num);
var num = 30;
console.log(num);

function sum(a) {
  var num = 0;
  num = num + a;
  return num;
}

console.log(sum(10));
console.log(num);

if (true) {
  var num = 100;
  var num02 = 200; //블록 레벨 스코프를 지원하지 않기 때문에 전역 변수 num02가 생성된다.
  console.log(num);
}

console.log(num, num02); //{}안의 결과 반영

if (true) {
  //console.log(num03); //선언 이전에 참조 불가능 => 엄밀히 말하면 변수 호이스팅 자체는 일어나나, 초기화가 진행되지 않음 => TDZ(템프러리 데드 존) 문제
  let num03 = 100;
  //let num03 = 200; //중복 선언 불가능
}

//console.log(num03); //블록레벨 스코프를 지원하기 때문에 전역 변수가 생성되지 않는다.

const TAX = 10; // Constant(상수) => 값을 무조건 초기화시켜야 한다.(선언만 하면 에러가 발상)
//TAX = 100; //상수이기 때문에 재할당 불가능

console.log("세율이 " + TAX + "% 입니다.");
console.log(`세율이 ${TAX + 10 / 2}% 입니다.`); //템플릿 리터럴 : ``(백틱) 안에 표현식(${수식})을 포함시킬 수 있다.

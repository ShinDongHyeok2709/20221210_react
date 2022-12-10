//import { PI, getSum } from "./lib.mjs";
import math, { PI as PINUM, getSum } from "./lib.mjs";

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

/*
  화살표 함수(Arrow Function)
    1) 표현이 간결하기 때문에 주로 콜백함수로 전달할 때 사용한다.
    2) 코드블록을 생략하면 return을 생략할 수 있다. => 객체도 {}를 사용하기 때문에 ()안에 사용해야 객체로 인지한다.
    3) this 바인딩이 되지 않는다.
*/
let divide = (a, b) => {
  return a / b;
};

let divide2 = (a, b) => a / b;
console.log(`10/2 : ${divide(10, 2)}`);

setTimeout(() => console.log("2초 경과"), 2000);

console.log(`10/2 : ${divide2(10, 2)}`);

let getObj = (name, age) => ({
  name,
  age,
});

console.log(`getObj : ${getObj("신동혁", 20)}`);

let user = {
  name: "seok",
  age: 30,
  hello: function () {
    console.log(this.name, this.age);
  },
};

user.hello();

let user2 = {
  name: "seok",
  age: 30,
  hello: () => {
    //console.log(this.name, this.age); //브라우저와 nodejs의 this가 다름
  },
};

user2.hello(); //undefined 출력

/*
  비구조화 할당(de-structure)
    - 객체나 배열의 값을 간결하게 할당할 수 있다.
    1) 객체는 변수 선언을 {}안에 해주면 된다. => 객체의 키값과 동일하게 작성해야 된다.
    2) 배열은 []안에 순서대로 변수명을 작성하면 배열에 저장된 인덱스에 따라 값이 할당된다.
    =>객체 비구조할당에 비해 변수명을 자유롭게 지을 수 있다.
*/

//let name = user.name;
//let age = user.age;

let { name: userName, age, height } = user;
console.log(userName, age, height);

let arr = ["seok", 30, "apple", function () {}];
let [name02, age02, truit, func] = arr;
//let { name02, age02, truit, func } = arr; //undefined

console.log(name02, func);

/*
  펼침 연산자(스프레드)
  객체는 참조복사 원칙
    1) 배열이나 객체의 값들을 나열하는 효과가 있다. => 기존값을 복사하고 새로운 값을 추가 및 변경하는데 유용하다.
    2) 복사할 경우 참조값 복사가 아니라, 값 자체를 복사하기 때문에 불변성을 지킬 수 있다.(첫번째 객체에 한해서...)
    => 객체가 중첩되는 경우 중첩된 객체는 참조 복사가 일어난다.
*/
let copy = user;
copy.age = 31; //객체는 참조값을 복사해온다.
console.log(user === copy);

let copy02 = { ...user, done: true, name: "hwangbo" };
copy02.age = 32; //객체는 참조값을 복사해온다.
console.log(user, copy02, user === copy02);

let copyArr = [1, ...arr, false];
console.log(copyArr);

let numArr = [1, 2, 10, 5, 7];
let max = Math.max(...numArr); //펼쳐서 여러파라미터로 전달
console.log("max : ", max);
console.log(numArr);

/*
  import/export
 */
console.log(PINUM);
console.log(getSum(1, 2));

console.log(math.PI);

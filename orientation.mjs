//import { PI, getSum } from "./lib.mjs";
import math, { PI as PINUM, getSum } from "./lib.mjs";

// 최신문법의 기준 ES6(2015)
// 실행은 터미널에서 node ./orientation.mjs

/*
    1. var 문제점
        1) 중복 선언이 가능하다.
        2) 변수 호이스팅(끌어올리다 뜻)이 발생하다. => 변수 선언 이전에 참조간 되다. 변수 초기화시 undefined가 할당된다.
        3) 블록 레벨 스코프(유효 범위)를 지원하지 않는다.
*/
console.log("================== var 문제점 ==================");

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

console.log(num, num02); //var가 전역변수 이므로, 블록{} 안의 변수 사용 가능

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
    2) 코드블록({})을 생략하면 return을 생략할 수 있다. => 객체도 {}를 사용하기 때문에 ()안에 사용해야 객체로 인지한다.
    3) this 바인딩이 되지 않는다.
*/
console.log("================== 화살표 함수(Arrow Function) ==================");

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

console.log(`getObj : ${getObj("신동혁", 20).name}`);

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
  비구조화 할당(de-structure) : 왼쪽 변수명 {}, []
    - 객체나 배열의 값을 간결하게 할당할 수 있다.
    1) 객체는 변수 선언을 {}안에 해주면 된다. => 객체의 키값과 동일하게 작성해야 된다.
    2) 배열은 []안에 순서대로 변수명을 작성하면 배열에 저장된 인덱스에 따라 값이 할당된다.
    => 객체 비구조할당에 비해 변수명을 자유롭게 지을 수 있다. 키값 또한 알 필요가 없다.
*/

console.log("================== 비구조화 할당(de-structure) ==================");

//let name = user.name;
//let age = user.age;

let { name: userName, age, height } = user;
console.log(userName, age, height);

let arr = ["seok", 30, "apple", function () {}];
let [name02, age02, truit, func] = arr;
//let { name02, age02, truit, func } = arr; //undefined

console.log(name02, func);

/*
  펼침 연산자(스프레드) : 오른쪽 수식 {}, []
  객체는 참조복사 원칙, 스프레드 연산자는 복사
    1) 배열이나 객체의 값들을 나열하는 효과가 있다. => 기존값을 복사하고 새로운 값을 추가 및 변경하는데 유용하다.
    2) 복사할 경우 참조값 복사가 아니라, 값 자체를 복사하기 때문에 불변성을 지킬 수 있다.(첫번째 객체에 한해서...)
    => 객체가 중첩되는 경우 중첩된 객체는 참조 복사가 일어난다.
*/
console.log("================== 펼침 연산자(스프레드) ==================");

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
console.log(...numArr);



/*
  import/export
 */
console.log("================== import/export ==================");

console.log(PINUM);
console.log(getSum(1, 2));

console.log(math.PI);

let PI = 3.141592;

console.log(PI);


/*
  Promise
    - Promise는 비동기 처리를 도와주는 객체. => 주로 서버에서 데이터를 받아올때 사용.
    - Promise 생성자의 인자로 함수를 전달하다. => 그 함수에 두개의 함수가 전달된다.
    => resolve : 성공했을 때 실행할 함수. resolve 값을 Promise.prototype.then(콜백함수)의 콜백함수의 첫번째 인자로 전달된다.
    => reject : 실패했을 때 실행할 함수. reject값을 에러 메시지로 전달한다. => Promise.prototype.catch(콜백함수)의 콜백함수의 첫번째 인자로 에러가 전달된다.
*/
console.log("================== Promise ==================");


let num04 = 5;
let promise = new Promise(function (resolve, reject) {
  //resolve(1);
  //reject("에러 발생!");
  if (num04 < 10) {
    reject("숫자가 10보다 작습니다.");
  }
  resolve(num04);
});
/*
promise.then(function (res) {
  console.log(res);
});

promise.catch(function (err) {
  console.log(err);
});
*/
promise
  .then(function (res) {
    console.log("- New Promise 1 : " + res);
  })
  .catch(function (err) {
    console.log("- New Promise 1 : " + err);
  });

function getData(str) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(str);
    }, 2000);
  });
}

function getID(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(id);
    }, 2000);
  });
}

// Promise가 중첩되면 복잡해 진다.
getData("자바스크립트")
  .then(function () {
    return getID(1);
  })
  .then(function (res) {
    console.log("- New Promise 2 : " + res);
  })
  .catch((err) => {
    console.log("- New Promise 2 : " + err);
  });



/*
    aysnc/await 무조건 쌍으로 사용함
      - 함수 키워드 앞에 async를 붙인다.
      - await을 앞에 붙이면 resolve될 때까지 다음 코드를 실행하지 않는다. => 비동기 코드를 동기처럼 순서를 제어하기 쉽다.
      - try/catch 문을 통해 에러를 처리할 수 있다.
      - Promise.all 등을 통해 병렬적으로 처리할 수 있다.
      - aysnc 함수는 return 값을 resolve하는 Promise를 반환한다. (리턴값 반환하지 않음)
*/
console.log("================== aysnc/await ==================");

async function fetchData() {
  try {
    let id = await getID(101); // 2초후 실행
    let data = await getData(id + "JS"); //2초후 실행
    console.log("- aysnc/await : ", data, id); //4초후 실행

    let result = await Promise.all([getData("JS"), getID(102)]); //병렬 실행
    console.log("- aysnc/await : " + result); //4초후 실행
  } catch (err) {
    console.log("- aysnc/await : " + err);
  }
  return 2;
}

console.log(fetchData());

// 삼항 연산자
console.log("================== 삼항 연산자, 단축 평가, 옵셔널 체이닝 ==================");

let result02 = num04 < 10 ? "10보다 작음" : "10보다 크거나 같음";
console.log("--- " + result02);

/*
단축 평가
 - &&(and) : 앞의 값이 truthy한 값이라면 뒤의 값으로 평가되고, 앞의 값이 falsy한 값이라면 앞의 값으로 평가된다.(javascript에서 0은 falsy한 값으로 취급)
 */
let color = num04 < 10 && "red";
console.log("--- color : " + color);

// ||(or) : and와 반대, 첫번째가 true이면 skip, false이면 두번째 실행
let str = num04 > 10 || "안녕하세요";
console.log("--- str : " + str);

// ??(nullish) : ?? 앞이 null이나 undefined이면, ?? 뒤의 값을 평가하고, 그 외의 값이면 앞의 값으로 평가한다. => 값을 참조해봐서 있으면 그 값을 사용하고 없으면, 대신할 값을 작성하면 된다.
let value = user.height ?? "할당 안됨";
console.log("--- value : " + value);

//옵셔널 체이닝 : 참조한 객체의 값이 null 이거나 undefined인 경우 뒤의 프로퍼티를 평가하지 않는다.
//console.log("---- value1 : " + undefined.age); //에러
console.log("--- value2 : " + undefined?.age);
console.log("--- value3 : " + user.age?.height?.str); //height가 undefined이므로 결과는 undefined



/*
배열 고차 함수 : 배열중에 함수를 전달받는 메소드
*/
console.log("================== 배열 고차 함수 ==================");

let userList = [
  { id: 1, name: "seok", age: 30 },
  { id: 2, name: "hwangbo", age: 32 },
  { id: 3, name: "minsu", age: 43 },
  { id: 4, name: "dongsu", age: 29 },
];

// Array.prototype.forEach() : 배열을 순회하며 각 값을 인자로 함수를 반복 실행한다.
userList.forEach((user) => {
  console.log("forEach : ", user);
});

// Array.prototype.filter() : 배열을 순회하며 각 값을 조건식에 따라 해당하는 요소만 배열로 모아서 반환한다.(필터링) => 콜백 함수의 return값이 true인 요소만 모아서 반환. 원본배열을 변경하지 않음
let filterArr = userList.filter((user) => {
  return user.age >= 30;
});
console.log("filter : ", filterArr);

let filterArr2 = userList.filter((_, idx) => {
  return idx % 2 === 1;
});
console.log("짝수 : ", filterArr2);

let filterArr3 = userList.filter((_, idx) => idx % 2 === 1);
console.log("짝수 : ", filterArr3);

// Array.prototype.map() : 배열을 순회하며 각 요소에 변형을 줄 때 사용 ==> 매 반복마다 return을 새로운 배열로 모아서 반환한다. 기존 배열 변경하지 않는다.
let mapArr = userList.map((user, idx) => {
  return user.age;
});

console.log("map : ", mapArr);

// age 30 이상인 user의 name 프로퍼티만 배열로 모아서 반환하기
let mapArr2 = userList.filter((user) => user.age > 30).map((user) => user.name);
console.log(mapArr2, mapArr2.length);

// Array.prototype.reduce() : 배열을 순회하며 누산을 할 때 사용한다. => 콜백 함수의 첫번째 인자로 누적되고 있는 값, 두번째 인자로는 순회중인 요소의 값이 전달된다.
let ageArr = userList.map((user) => user.age);
let totalAge = ageArr.reduce((acc, curr) => acc + curr, 1000); //1000은 초기 acc값
console.log("reduce ageArr : ", ageArr);
console.log("reduce totalAge : ", totalAge);

//find vs filter는 찾은 첫번째 요소만 반환 vs 조건에 맞는 값을 배열로 반환

let maxArr = ageArr.reduce((acc, curr) => (curr > acc) ? curr : acc ); //최대값 구하기 가능
console.log("maxArr : ", maxArr);
console.log("Math.max : ", Math.max(...ageArr)); //rest문법이 아닌, 변수 사용시 NaN 출력


//rest 문법 : 매개변수에 ...을 붙이면 전달된 인자가 몇개이던 배열로 모아준다. => 무조건 매개변수의 마지막에 사용해야 한다.
console.log("================== rest 문법 start ==================");

function getTotal(...numlist) {
  return numlist.reduce((acc, curr) => acc + curr);
}

function getTotal2(...numlist) {
  return numlist.filter((a) => a > 3);
}

console.log(getTotal(1, 2, 3, 4, 5));
console.log(getTotal2(1, 2, 3, 4, 5));

console.log("================== rest 문법 end ==================");
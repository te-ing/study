'use strict';

/*
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas'
// let job = 'teacher';
// const year = 1991;

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x == window.x);
// console.log(y == window.y); // 윈도우에 속성을 만들지 않음.
// console.log(z == window.z);

// 98. 정규함수와 화살표함수

var firstName = 'Matilada'; // 글로벌 객체에 속성 생성

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function() {
    console.log(this);
    console.log(2037 - this.year);

    // const isMillenial = function() { // 첫 번째 상황
    //   console.log(this);
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };
    // const self = this; // 두 번째 상황 (ES6 이전의 구식 해결방법)
    // const isMillenial = function() { 
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    const isMillenial = () => { // Arrow function 이 부모범위의 키워드를 상속하는 것을 이용
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);  // Arrow function은 글로벌 범위 사용
   }
}; 
jonas.greet(); // 위의 코드들은 코드블록이 아닌 객체 리터럴
jonas.calcAge(); // 첫 번째 상황에서는 this 가 정의되어 있지 않아 아래와 같은 에러가 생김
// Uncaught TypeError: Cannot read property 'year' of undefined
//     at isMillenial (script.js:30)
//     at Object.calcAge (script.js:32)
//     at script.js:40

// Arguments keyword
const addExpr = function (a, b) { 
  console.log(arguments);
  return a+b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12); // 정규함수에서는 정의된 parameters 보다 많은 것을 넣어도 문제없음

var addArrow = (a, b) => {
  console.log(arguments);
  return a+b;
};
addArrow(2,5,8); // Arrow function에서는 많은 것을 넣으면 문제발생
*/

// 99  프리미티브 객체를 사용할 때 생기는 오류
// 상황 1.
let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31 출력
console.log(oldAge); // 30 출력

// 상황 2.
const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend', friend); // { name: 'Jonas', age: 27 } 출력
console.log('Me', me); // { name: 'Jonas', age: 27 } 출력

// 다른 결과가 나타나는 이유:
// 상황1의 age는 콜스택에 저장되며 서로 다른 주소를 할당한다.
// 하지만 상황2 에서는 'me'는 스택에 저장되기 너무 크기 때문에 
//힙에 저장되며 차례로 힙에 있는 me의 메모리 조각을 가리킨다.
// me와 friend는 콜스택에서 같은 주소를 가르키고, 이것은 힙에서 불러온다.

// 100 프리미티브 객체를 사용할 때 생기는 오류2
const jessica = {
  firstNam: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica
marriedJessica.lastName = 'David';
console.log('Before marriage: ', jessica);
console.log('After marriage: ',marriedJessica);

const jessica2 = {
  firstNam: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // Object.assign 은 오브젝트를 병합하는 기능으로, 빈 오브젝트와 결합하여 얕게 복사 가능
jessicaCopy.lastname = 'Davis'; // 새로운 오브젝트를 만들어 수정하면 정상적으로 작동. 이는 새로운 객체가 힙에 생성되었다는 뜻
console.log('Before marriage: ', jessica2);
console.log('After marriage: ',jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);
// 하지만 이 경우 배열을 변경하면 다른 쪽에서도 변경된다. 이를 해결하기 위해서는 외부 라이브러리를 이용하여 해결해야 한다.

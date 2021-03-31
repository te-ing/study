'use strict';

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
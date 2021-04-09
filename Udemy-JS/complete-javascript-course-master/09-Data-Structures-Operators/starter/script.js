'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },    
  
  orderDelivery: function ({starterIndex = 0, mainIndex, time, address}) {
    console.log(`주문이 들어왔습니다! [${time}] ${address}에서 ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]}를 주문하였습니다.`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'kyeongmyeongload, 21',
  mainIndex: 2,
  starterIndex: 2,
});
// starterIndex 선택안한 주문
restaurant.orderDelivery({
  time: '22:30',
  address: 'kyeongmyeongload, 21',
  mainIndex: 1,
});

// 103 배열분해
// 변수 선언
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr; //  배열이 아닌 구조화 할당 destructuring
console.log(x, y, z);
console.log(arr); // 원래 배열은 영향받지 않음

const [first, ,second] = restaurant.categories;
console.log(first, second);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main]; // 단순한 재할당이므로 const나 let필요없음
console.log(main, secondary);

// 2개의 값을 반환하는 함수
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// 중첩된 비구조화 (destructuring)
const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i, j);

const [i, ,[j,k]] = nested; // 중첩된 배열을 분해하여 작동
console.log(i,j,k);

// Default values 기본값
const [p=1, q=1, r=1] = [8,9];
console.log(p, q, r); // r은 정의되지 않았지만 undefined 대신 1로 출력됨

// 104 객체분해

const { name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);
// 새로운 변수 이름선언
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// 새로운 변수 이름선언 예시
// 기본 값
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// 변수 변경
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

// let {a, b} = obj; //{}를 넣으면 자바스크립트는 코드블럭을 찾지 못하는 오류가 발생
({a, b} = obj); // 괄호로 묶는 트릭
console.log(a, b);

// Nested objects
const {fri: {open: o, close: c} } = openingHours;
console.log(o, c); //console.log(open, close);


// 105 spread operator

const arr = [7,8,9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const justArr = [1,2, arr]
const newArr = [1,2, ...arr]; // 스프레드 연산자 : 배열에서 모든 요소를 꺼냄
console.log(justArr);
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'hamberger'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables : arrays, strings, maps, sets. Not objects
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
//console.log(`${...str} 템플릿 리터럴은 사용불가`);


// 106 into array

// 1) Destructuring
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of = 
const [a, b, ...others] = [1, 2, 3, 4, 5]
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu, ...restaurant.starterMenu,];
  console.log(pizza, risotto, otherFood);
  
  // Objects
  const { sat, ...weekdays } = restaurant.openingHours;
  console.log(weekdays);
  
  // 2) Functions
  const add = function(...numbers) { // rest parameters
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
    
  }
  add(2, 3)
  add(5, 3, 7, 2);
  add(8, 2, 5, 3, 2, 1, 4);
  
  restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); // 메인재료와 부차재료
restaurant.orderPizza('mushrooms');
*/

// 107 Short Circuiting (&& and ||)

console.log( undefined || 0 || '' || 'Hello' || 23 || null);
console.log( 'Hello' && 23 && null && 'jonas'); // ||와 반대, falty를 출력

// 108 nullish coalescing operator ES2020에 도입됨

const guests = restaurant.numGuests || 0;
// const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null 과 undefined 만 반환 ( 0 이나 ''에는 반환되지 않음)
// const guestCorrect = restaurant.numGuests ?? 0;
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
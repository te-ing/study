'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section


// 111. Enhanced object literals
const weekdays = ['mon', 'tuw', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHour = {
  [weekdays[3]]: { // 🔺weekdays 구문을 이용
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, 
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHour, // 111. ES6 enhanced object literals
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
  
  // order: function(starterIndex, mainIndex) { // 이전 방식
  order(starterIndex, mainIndex) { // 현대 방식 (같은 효과)
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


// Coding Challenge #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  
  printGoals : function (name) { // task 6
    for (let i=0; i<game.scored.length; i++){
      if (name==game.scored[i]){
        console.log(`${game.scored[i]}는 골을 넣었으며 게임 스코어는 ${game.score}입니다!`);
      }
    }
  },
};

const { players : [players1, players2] } = game; // 플레이어 배열 생성
//const [players1, playes2] = game.players;
console.log(players1);

const [gk, ...fieldPlayers] = players1 // 골키퍼, 필드플레이어 배열 생성
console.log(gk)
console.log(fieldPlayers)

const allPlayers =  [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1,'Thiago', 'Coutinho', 'Perisic']; // 배열 변수 추가
console.log(players1Final);

const {team1, x, team2} = game.odds; // 변수 이름 지정
const [,draw,] = [team1, x, team2];
// const { odds : { team1, x: draw, team2 },} = game;
console.log(draw);

game.printGoals('Gnarby');

// 낮은 배당률의 팀은 이길 확률이 높다. 더 이길 것 같은 팀을 출력해라
team1 < team2 ? console.log("team1이 team2보다 이길 확률이 높습니다!") : console.log("team2이 team1보다 이길 확률이 높습니다!");

// team1 < team2 && console.log("team1이 team2보다 이길 확률이 높습니다!");
// team1 > team2 && console.log("team2이 team1보다 이길 확률이 높습니다!");


// 110. Looping Arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item); // for-of 루프

// for (const item of menu.entries()) { //  예전방식.  entries : 인덱스 
//   console.log(`${item[0] + 1}: ${item[1]}`); //
// } 
for (const [i, el] of menu.entries()) { // 현대방식(아이템 구조해체)
  console.log(`${i + 1}: ${el}`);
} 


//112 Optional chaining

if (restaurant.openingHours && restaurant.openingHours.mon) 
console.log(restaurant.openingHours.mon.open);

// WITH optional chaining ?. // 모든 속성이 정의되지 않았다면 바로 undefined 반환
console.log(restaurant.openingHours.mon ?. open); 
console.log(restaurant.openingHours?.mon ?. open); 

const days = ['mon', 'tuw', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed'; 
  // 대괄호표기법, sat의 open시간은 0이지만 || 연산자를 사용하면 closed로 뜨기 때문에 ?? 연산자(nullish)를 사용
  console.log(`On ${day}, we open at ${open}`);
}

// Methods 함수가 비어있는지 확인
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist'); // undefined를 반환 -> nullish 연산자로 인해 텍스트 반환

// Arrays 배열이 비어있는지 확인
const users = [
  {name: 'Jonas', email: 'hello@jonas.io'}
];
// if(users.length > 0) console.log(users[0]?.name ?? 'User array empty');
// else (users[1]?.name ?? 'User array empty'); // 선택적 연결 연산자를 사용하지 않을 때
console.log(users[0]?.name ?? 'User array empty');
console.log(users[1]?.name ?? 'User array empty');


// 113 Looping objects: object keys, values, and entries

const properties = Object.keys(openingHour); // Object.keys(배열) 배열의 값
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property Values
const values = Object.values(openingHour)
console.log(values);

// Entire object
const entries = Object.entries(openingHour);
console.log(entries);

// [key, value]
for(const [day, {open, close}] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

*/

// Coding Challenge #2

const scored = ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'];

const odds = {
  team1: 1.33,
  x: 3.25,
  team2: 6.5
}

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored,
  date: 'Nov 9th, 2037',
  odds,
}

// task 1. game.score 배열과 각각의 플레이어 이름을 콘솔에 출력하여라
// const  playersName  = Object.values(scored)
// let count= 1
// for ( const player of playersName)
// console.log(`Goal ${count++}: ${player} `); 

// task 1.
for(const [i, player] of game.scored.entries())
console.log(`Goal ${i + 1}: ${player}`);

// task 2. loop를 이용해 odd의 평균을 구하고 출력해라
// let average = 0
// const oddsValues = Object.values(odds)
// for (let sum of oddsValues){
// average += sum
// }
// console.log(average/oddsValues.length); 

// task 2.
let average = 0;
for (const odd of Object.values(game.odds))
  average += odd;
  console.log(average);
  average /= Object.values(game.odds).length;
  console.log(average);


// for ( const a of Object.keys(odds)){
//   const b = game[a];
//   console.log(`Odd of victory ${b}: ${odds[a]}`);
// }

// task 3. o
for(const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team  === 'x' ? 'draw' : `Victory ${game[team]}`
  console.log(`Odd of ${teamStr}: ${odd}`);
}

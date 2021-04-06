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

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },    

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
};

/*
// 103 객체분해
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
*/


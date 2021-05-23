'use strict';

/*
// 127. Default Parameters
const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
  // numPassengers = numPassengers || 1; // ES5방식, undefined일 경우 1
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price
  }
  console.log(booking);
  bookings.push(booking); // 함수 밖에서도 예약유지
}

createBooking('LH123')
createBooking('LH123', 5)

createBooking('LH123', undefined, 1000)


// 128. How Passing Arguments Works

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284
}

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  
  if(passenger.passport === 24739479284) {
    alert('Check in')
  } else {
    alert('Wrong passport!')
  }
}

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Is the same as doing...
const flightNum = flight;
const passenger = jonas;

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() *
  1000000000);
}

newPassport(jonas);
checkIn(flight, jonas);

// 자바스크립트는 C++ 같은 언어와는 달리 함수에 대한 값(Value)은 전달하지만 레퍼런스를 전달하지 않는다.


// 129. First-Class and Higher-Order Functions

// 자바스크립트는  First-citizens(First class citizen)로써 고차함수를 작성할 수 있다.

// First-citizen 이란 투표의 자유를 가진 시민이라는 것에서 비롯된 것으로
// 프로그래밍에서는 다른 객체들에게 적용 가능한 연산을 모두 지원하는 객체를 말한다.
// 즉 함수에서 함수를 받거나 반환할 수 있다는 것으로, 이를 통해 고차 함수를 만들 수 있다.
// First-class citizen 의 조건: 
// - 변수나 데이터 구조안에 담을 수 있다.
// - 파라미터로 전달할 수 있다.
// - 리턴 값으로 사용할 수 있다.
// [참고] (https://soeunlee.medium.com/javascript%EC%97%90%EC%84%9C-%EC%99%9C-%ED%95%A8%EC%88%98%EA%B0%80-1%EA%B8%89-%EA%B0%9D%EC%B2%B4%EC%9D%BC%EA%B9%8C%EC%9A%94-cc6bd2a9ecac)

*/

// 130. Function accepting callback functions

const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`); // 콜백함수
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function() {
  console.log('🙏');
}
document.body.addEventListener('click', high5); // 콜백함수

['Jonas', 'Martha', 'Adam'].forEach(high5);
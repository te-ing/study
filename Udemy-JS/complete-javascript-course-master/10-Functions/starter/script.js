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

*/

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
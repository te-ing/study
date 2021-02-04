/*
'use strict'; // 특정 오류가 발생했을 시, 오류 내용을 알려주고 특정 변수명을 비활성화함

function logger() {
    console.log('My name is TJ');
}

logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

console.log(fruitProcessor(5, 0));

const appleJuice = fruitProcessor(5, 0); 
console.log(appleJuice); // 위에서 fruitProcessor의 값을 저장했다.

const appleOrangeJuice =fruitProcessor(2, 4);
console.log(appleOrangeJuice);

logger(22);

// function calcAge1(birthYear){
    //      const age = 2037 - birthYear;
    //      return age;
    // } 아래 함수와 같은 기능
    
    // Function declaration
    function calcAge1(birthYear){
        return 2037 - birthYear;
    }
    const age1 =calcAge1(1991);
    
    // Function expression
    const calcAge2 = function (birthYear) { // 함수명이 없는 함수(익명함수)
        return 2037 - birthYear;
    }
    const age2 = calcAge2(1991);
    
    console.log(age1, age2);
    
    // Arrow function // return이 필요 없을 때 유용
    const calcAge3 = birthYear => 2037 - birthYear; //한가지 매개 변수만 가지고 있을 때 유용
    const age3 = calcAge3(1991);
    console.log(age3);
console.log(calcAge3(1996));

const yearsUntilRetirement = (birthYear, firstName) =>{
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1996, 'TJ'));


function cutFruitPieces(fruit) {
  return fruit * 4; //이후 조각이 바뀔 때를 대비해 함수를 분리해서 사용
}                  // 이후 cutFruitPieces 함수만 수정하면 된다.

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  
  console.log(apples, oranges);
  
  // const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  // return juice;
  
  const juice = `Juice with pieces of ${applePieces} apples and pieces of ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function(birthYear) { //아래의 burthYear과 전혀 관계없는 변수
  return 2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  
  if (retirement > 0) {
    return retirement;
  } else {
    console.log(`${firstName} is already retired ${-(retirement)} years ago.`)
    return -1;
  }
}

// return retirement;
// return `${firstName} retires in ${retirement} years.`

yearsUntilRetirement(1991, 'TJ');

console.log(yearsUntilRetirement(1996, 'TJ'));
console.log(yearsUntilRetirement(1960, 'YH'));

// Coding Challenge #1

// Dolphins와 Koalas는 3번 겨룬다. 그 후 평균점수를 구한다.
// 적어도 다른팀보다 2배높은 평균점수를 얻어야 우승할 수 있다.
// #임무
// 1. 'calcAverage'라는 arrow function을 만들어 3번의 점수를 나눠라
// 2. 함수를 이용해 두 팀의 평균점수를 계산하여라
// 3. 'checkWinner'함수를 만들어 각팀의 평점을 'avgDolpins', 'avgKoalas'인수로 변환시킨 후
// 승자와 두 팀의 점수를 콘솔로그로 출력해라. 
// 4. 'checkWinner'함수를 이용해 Data1과 Data2의 승자를 알아내라
// 5. 무승부는 무시해라

// Data 1: Dolphins score 44, 23, 71 Koalas score 65, 54, 49
// Data 2: Dolphins score 85, 54, 41 Koalas score 23, 34, 27

const calcAverage = avgScore => avgScore/3;
const scoreDolphins = calcAverage(44+23+71);
const scoreKoalas = calcAverage(85+54+41);

// const scoreDolphins = calcAverage(85+54+41);
// const scoreKoalas = calcAverage(23+34+27);

function checkWinner(avgDolphins, avgKoalas){
  if (avgDolphins >= avgKoalas*2){
    console.log(`Dolphins win! (${avgDolphins} vs. ${avgKoalas})`);
  }
  else if (avgKoalas >= avgDolphins*2){
    console.log(`Dolphins win! (${avgKoalas} vs. ${avgDolphins})`);
  }
  else return -1
}
checkWinner(scoreDolphins, scoreKoalas);

// Array
const friends = ['Michael', 'Steven', 'Peter'];

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length -1]); // length는 0부터 시작하지 않음

friends[2] = 'Jay';
console.log(friends);


const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

// friends.pop(); // 마지막 요소만 제거됨
// console.log(friends);
// const popped = friends.pop();
// console.log(popped);

friends.shift(friends); // 첫번째 요소만 제거
console.log(friends);

console.log(friends.indexOf('Jay')); // Jay의 위치값 반환
console.log(friends.indexOf('Bob')); // Bob는 존재하지 않으므로 -1 반환

friends.push(23);
console.log(friends.includes('Steven')); // 존재유무 판단, ES6 방식
console.log(friends.includes('Bob'));
console.log(friends.includes('23')); //type coercion 일어나지 않음

if (friends.includes('Steven')) {
  console.log('피터를 생일파티에 부르자!')
}
*/

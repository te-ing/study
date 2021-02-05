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

// Coding Challenge #2
// Steven은 여전히 50~300은 15% 그외는 20%인 팁계산기를 만들고 있다. 

// Tasks:
// 팁과 상응하는넣고 받을 수 있는 아무 값을 가진 'calcTip'함수를 써라 
// 100을 테스트해봐라
// 그리고 테스트 데이터를 가진 bills 이라는 배열을 써봐라 
// 배열은 함수를 통해 계산된 가격이 담긴 tips배열을 만들어라
// total이라는 배열을 만들어라

// TEST data: 125, 555, 44

function calcTip(bill){
  if (bill <= 50 || bill >= 300){
    return bill*0.2}
    else return bill*0.15;
  }
  
  console.log(calcTip(100));
  
  const bills = [125, 555, 44]
  console.log(bills);
  
  const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
  console.log(tips)
  
  const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
  console.log(total)
  
  // Object

  const TJ = {
    firstName: 'Taejung',
    lastName: 'Kim',
    age: ' 2021-1996',
    job: 'student',
    friends: ['CL', 'INO', 'PT']
  }; // value : key(properies)
  
  console.log(TJ.lastName);
  console.log(TJ['lastName']); // 콜론이 있어야함
  
  const nameKey = 'Name'
  console.log(TJ['first' + nameKey]);
  
  // const interestedIn = prompt("나에 대해 알고 싶은 것이 있니? firstName, lasName, age, job, friends 중에 골라줘" );
  // console.log(TJ[interestedIn]);

  // if (TJ[interestedIn]) {
    //   console.log(TJ[interestedIn]);
  // } else {
    //   console.log("잘못된 값 입력");
  // }
  
  TJ.location = 'Korea';
  TJ['instagram'] = '@kimtae_ing'
  console.log(TJ);
  
  console.log(`${TJ['firstName']} has ${TJ.friends.length} friends, and his best friend is called ${TJ.friends[0]}`)
  
  const TJ = {
    firstName: 'Taejung',
    lastName: 'Kim',
    birthYear: '1996',
    job: 'student',
    friends: ['CL', 'INO', 'PT'],
    hasDriversLicense: true,
    
    // calcAge: function(birthYear) { // TJd object 내의 함수
    //   return 2037 - birthYear
    // }
    
    // calcAge: function () { // TJd object 내의 함수
    //   console.log(this) // this : TJ의 모든 object
    //   return 2037 - this.birthYear; //birthYear의 값
    // }
    
    calcAge: function () { // TJd object 내의 함수
      this.age = 2037 - this.birthYear;
      return this.age; 
    },
    
    getSummary: function() {
      if(this.hasDriversLicense){
        return `${this.firstName} is a ${this.age}-year old teacher, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`}
      }
    };
    
    console.log(TJ.calcAge());
    console.log(TJ.age);
    
    
    // const calcAge = function(birthYear) { 원래 표기법
    //   return 2037 - birthYear
    // }
    
    console.log(TJ.getSummary())
    // const TJ = {
//   firstName: 'Taejung',
//   lastName: 'Kim',
//   birthYear: '1996',
//   job: 'student',
//   friends: ['CL', 'INO', 'PT'],
//   hasDriversLicense: true,


// Coding Challenge #3

// Mark와 John의 BMI지수 계산 BMI = mass / height ** 2 = mass / (height*height)

// 1. 각각의 이름과 mass, height를 기입한 object를 만들어라
// 2. calcBMI 함수를 이용해 BMI를 계산해라. BMI값을 저장하고, return하여라
// 3. BMI가 누가 더 높은지, 이름과 BMI지수를 출력해라. ex) John's BMI(23.3)is higher than Mark's(23.9)!

// Test data: Mark 78 / 1.69 John 92 / 1.95

const markBMI = {
  fullName : 'Mark Miller' ,
  mass: '78',
  height: '1.69',
  calcBMI : function(){
    return this.mass / (this.height**2)
  }
}

const johnBMI = {
  fullName : 'John Smith' ,
  mass: '92',
  height: '1.95',
  calcBMI : function(){
    return this.mass / (this.height**2)
  }
}


console.log(markBMI.calcBMI())
console.log(johnBMI.calcBMI())

console.log(`${markBMI.fullName}'s(${markBMI.calcBMI()})is higher than ${johnBMI.fullName}'s(${johnBMI.calcBMI()})!`)

// Loof

// for loof keeps running while condition is TRUE
// for(let rep = 1; rep <= 10; rep++) {
  //   console.log(`Lifting weights repetition ${rep}`)
  // }
  
  const TJ = [
    'Taejung',
    'Kim',
    '1996',
    'student',
    ['CL', 'INO', 'PT'],
    true
  ];
  const types = []
  
  for (let i = 0; i < TJ.length; i++) {
    console.log(TJ[i], typeof TJ[i])
    types.push(typeof TJ[i]);
  }
  
  console.log(types);
  
  console.log('---ONLY STRING---');
  // contionue and loof
  for (let i = 0; i < TJ.length; i++) {
    if(typeof TJ[i] !== 'string') continue; 
    console.log(TJ[i], typeof TJ[i])
  }
  console.log('---ONLY BREAK---');
  // contionue and loof
  for (let i = 0; i < TJ.length; i++) {
    if(typeof TJ[i] !== 'boolean') break; 
    console.log(TJ[i], typeof TJ[i])
  }
  
  
  const TJ = [
    'Taejung',
    'Kim',
    2037 - 1991,
    'student',
    ['CL', 'INO', 'PT'],
  ];
  
  for(let i = TJ.length -1; i >= 0; i--) {
    console.log(TJ[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-----Starting exercise ${exercise}`);
  
  for (let rep=1; rep<6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`)
  }
}

// for (let rep=1; rep<=5; rep++) {
  //   console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`)
  // }
  
  // let rep = 1; // while문에서는 밖에서 선언해줘야 함.
  // while(rep <=5) {
    //   console.log(`Lifting weight repetition ${rep}`);
    //   rep++;
    // }
    
    let dice = Math.trunc(Math.random()*6) // Math.random(): 0~1 사이의 랜덤 수 Math.trunc(Math.random()) 정수
    
    while(dice !==5) {
      dice = Math.trunc(Math.random()*6);
      console.log(`You rolled a ${dice+1}`);
    }
    
*/

// Coding Challenge #4

// loop를 이용해서 Steven씨의 tip 계산기를 업그레이드 해보자!
// 임무:
// 1. 10개의 bill값이 담긴 bills  배열을 만들어라
// 2. tip과 totals의 빈 배열을 만들어라
// 3. bills의 모든 값을 calcTip함수를 이용해 팁과 값을 계산해라.(For loop사용!)
// data: 22 295 176 440 37 105 101 100 86 52

// 4.인자 arr이라 불리는 caclAverage를 사용해라. 이 함수는 array의 평균을 가진다.
// 4.1 먼저 모든 값을 array에 추가해라. 그담 0부터 시작하는 sum변수를 넣어라
// 그담 loop를 사용해라 각각 sum 변수에 현재값을 넣어라 모든 값을 넣어야 끝난다.
// 4.2 평균계산을 위해 
// 5. 함수와 함께 totals. 정렬을 사용해라

let = bills = [22, 295, 176, 440, 37, 105, 101, 100 ,86, 52]
let = tips = []
let = totals = []

console.log(bills)



for (let i = 0; i < 10; i++) {
  const calcTip = calcTip=> bills[i] >= 50 || bills[i] <= 300 ? bills[i]*0.15 : bills[i]*0.15;
  tips.push(calcTip(bills[i]));
  totals.push(bills[i]+tips[i]);
}

console.log(tips);
console.log(totals);

arr = {
  bills,
  tips,
  totals,
  caclAverage: function(){
    let sum = 0;
    for ( let j = 0; j < this.length -1; j++){
      sum+this[j]
  } return sum / this.length -1
  }
}

console.log(arr.caclAverage(totals)


// calcBMI : function(){
//   return this.mass / (this.height**2)




// const calcAge3 = birthYear => 2037 - birthYear; //한가지 매개 변수만 가지고 있을 때 유용
// const age3 = calcAge3(1991);
// console.log(age3);

// const drink = age >= 18 ? 'wine' : 'milk🥛';
// console.log(drink);
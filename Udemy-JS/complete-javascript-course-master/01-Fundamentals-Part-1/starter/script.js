/*
let js = 'amazing';
console.log(40+8+23-10);

console.log('Jonas');
console.log(23);

let firstName = "Kim"
console.log(firstName);

//Lecture: Values and Variables
const contry = "KOREA",
continent = "ASIA",
population = 50000000;

console.log(contry, continent, population)
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun)

console.log(typeof true); // typeof: 타입을 보여주는 함수
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'TJ');

javascriptIsFun = 'YES!';

let age = 30;
age = 31;

const ageTJ = 2021 - 1996;
const ageCL = 2021 - 1999;
console.log(ageTJ, ageCL); 
*/

//Coding Challenge#1

// 1. 마크와 존의 키와 몸무게를 변수에 넣어라
// 2. 그들의 BMI를 공식을 이용해 계산하여라
// 3. 마크가 존보다 BMI지수가 높은가를 판단하는 markHigherBMI라는 Boolean변수를 만들어라

/*
let MarksMass = 78
let MarksHeight = 1.69
let MarksBMI = MarksMass/(MarksHeight**2)

let JohnsMass = 92
let JohnsHeight = 1.95
let JohnsBMI = JohnsMass/(JohnsHeight**2)

let MarkHigherBMI = MarksBMI > JohnsBMI

console.log("Mark's BMI", MarksBMI)
console.log("John's BMI", JohnsBMI)
console.log(MarkHigherBMI)

MarksMass = 95;
MarksHeight = 1.88;
MarksBMI = MarksMass/(MarksHeight**2)

JohnsMass = 85;
JohnsHeight = 1.76;
JohnsBMI = JohnsMass/(JohnsHeight**2)

MarkHigherBMI =  MarksBMI > JohnsBMI

console.log("Mark's BMI", MarksBMI)
console.log("John's BMI", JohnsBMI)
console.log(MarkHigherBMI)

//Coding Challenge#2
// 콘솔로 누가 높은 BMI를 가졌는지 출력해라.
// 메세지 예제: "Mark's BMI is highter than John's!" or "John's BMI is higher than Mark's!"
// 글자템플릿을 포함한 BMI 값을 아웃풋에 넣어라 
// 메세지 예제: "Mark's BMI(28.3) is higher than John's (23.9)!"

MarksBMI = 28.3
JohnsBMI = 23.9

if (MarkHigherBMI){
    console.log("Mark's BMI is highter than John's!"),
    console.log(`Mark's BMI(${MarksBMI}) is higher than John's BMI(${JohnsBMI})!`)
}
    else {
        console.log("John's BMI is higher than Mark's!")
}


// const firstName = 'TJ'
// const job = 'programmer'
// const birthYear = 1996;

// const info = `My name is ${firstName}, and i'm ${2021-birthYear} year old ${job}.`
// console.log(info)


const inputYear = '1996'
console.log(inputYear + 25); // type coercion 발생
// 자바스크립트는 타입을 자동으로 변환시키기 때문에 일어나는 현상
console.log(Number(inputYear) + 25); //type conversion
// 5 falsy values: 0, '', undefined, null, NaN(Not a Number)
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const age = 18;
if(age === 18) console.log('You just became an adult!')
console.log(age === '18') 
console.log(age == '18')//type coercion

const favourite = Number(prompt("What's your favourite number?"));
console.log(typeof favourite); 
if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!')
} else if(favourite ===7){
    console.log('7 is also a cool number')
} else {
    console.log('Numeber is no 23 or 7')
}

if (favourite !== 27) {
    console.log('Why not 27?') // 때에 따라서 ==(느슨), ===(강력) 사용
    
    const hasDriversLicense = true; // A
    const hasGoodVision = false; // B
    
    console.log(hasDriversLicense && hasGoodVision); //&& = and
    console.log(hasDriversLicense || hasGoodVision); // || = or
    console.log(!hasDriversLicense); // ! = not
    
    
// Coding Challenge #3

// Dolphins 와 Koalas는 각각 3번 겨룬다. 가장 높은 평균점수를 받은 사람이 우승한다.

// 1. data below를 이용하여 각 팀의 평균 점수를 계산하라
// 2. 각팀의 평점을 비교하여 우승자를 결정하고 콘솔로 출력해라. 비길 수도 있다.
// 보너스1) 최소 100점의 우승조건을 포함하여라. 이 룰은 무조건 다른 팀보다 점수가 높아야 한다.
// 보너스2) 최소 점수는 비기는 것도 포함한다. 비기는 것은 양 팀의 점수가 같으며  100보다 높거나 같아야 한다.
//         다시말해, 아무도 우승할 수 없다.

// Test Data
// Dolphins score 96, 108, 89 Koalas score 88, 91, 110
// Bonus 1) Dolphins score 97, 112, 101 Koalas score 109, 95, 123
// Bonus 2) Dolphins score 97, 112, 101  Koalas score 109, 95, 106

let DolphinsScore = (96+108+89)/3
let KoalasScore = (88+91+110)/3

if (DolphinsScore > KoalasScore){
    console.log("Dolphins win!");
}
else if (DolphinsScore < KoalasScore){
    console.log("Koalas win!");
}
else console.log("Draw!")

// Bonus 1)
DolphinsScore = (97+112+101)/3
KoalasScore = (109+95+123)/3

if ((DolphinsScore > KoalasScore) && (DolphinsScore >= 100)){
    console.log("Dolphins win!");
}
else if ((DolphinsScore < KoalasScore) && (KoalasScore >= 100)){
    console.log("Koalas win!");
}
else if (DolphinsScore = KoalasScore){
    console.log("Draw!")
}
else console.log("Anyone can't win")

// Bonus 2)
DolphinsScore = (97+112+101)/3
KoalasScore = (109+95+106)/3

if ((DolphinsScore > KoalasScore) && (DolphinsScore >= 100)){
    console.log("Dolphins win!");
}
else if ((DolphinsScore < KoalasScore) && (KoalasScore >= 100)){
    console.log("Koalas win!");
}
else if ((DolphinsScore = KoalasScore) && ((KoalasScore || DolphinsScore) >= 100)){
    console.log("Draw!")
}
else console.log("Anyone can't win")


// const day = 'monday';

// switch(day) { //스위치 구문은 이제 많이 쓰이지 않음
//     case 'monday': //day === 'monday',
//         console.log('Plan course structure');
//         console.log('Go to coding meetip');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday': // wedneday와 thursday에 같은 함수 할당
//         console.log('Write code examples');
//         break
//     case'friday':
//         console.log('Record videos');
//         break
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break
//     default: // 다른 사건이 실패할 때 실행되는 마무리코드
//         console.log('Not a valid day!')
// }
const day = 'monday';

if(day==='monday'){ //day === 'monday',
console.log('Plan course structure'),
console.log('Go to coding meetip');
}
else if(day==='tuesday'){
    console.log('Prepare theory videos');
}
else if(day==='wednesday'){
    console.log('Write code examples');
}
else if(day==='thursday'){// wedneday와 thursday에 같은 함수 할당
    console.log('Write code examples');
}
else if(day==='friday'){
    console.log('Record videos');
}
else if(day==='saturday'){
    console.log('Enjoy the weekend :D');
}
else if(day==='sunday'){
    console.log('Enjoy the weekend :D');
}
else console.log('Not a valid day!')

const age = 15;
// age >= 18 ? console.log('I like drink wine🍷'): // ?는 if와 비슷하지만 오직 한가지 일만 할 수 있다.
// console.log('I like to drink milk🥛'); // else와 같은 기능

// ternary operator 제3연산자
const drink = age >= 18 ? 'wine' : 'milk🥛';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'milk🥛'}`)
*/

// Steven은 간단한 식당 계산기를 원한다. 그는 보통 50에서 300빌이면 보통 15%의 팁을 준다. 
// 만약 값이 다르다면 20%를 준다.
// 1. if/else문을 사용하지 않고 tip 변수를 만들어 금액에 따른 팁을 계산하라.  
// 2. 금액과 팁, 그리고 합계에 따른 구문을 출력해라

// Data1: 275, 40, 430
const bill = 430;
const tip = bill <= 50 || bill >= 300 ? bill*0.2 : bill*0.15;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`)




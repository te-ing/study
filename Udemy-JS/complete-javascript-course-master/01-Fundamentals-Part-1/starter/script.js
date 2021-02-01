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


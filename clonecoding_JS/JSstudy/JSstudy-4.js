/*
console.log() 에서 console은 오브젝트, log는 키(key)
console.log는 내장함수(built-in-function)
*/
//function 사용법
function sayHello(){
    console.log("Hello!");
}

sayHello();
console.log("Hi!") //log: console object 안에 있는 함수 "Hi!": 인자(argument) 변수같은 값으로 주는 값을 저장


function sayHi(potato){
    console.log("Hi!", potato);
}

sayHi("TJ"); //TJ를 sayHi(potato)의 potato 부분에 넣는 것. potato는 아무렇게나 넣어도 상관없음

function sayniceMeetYou(name, age){
    console.log("Nice meet you!", name, "How old are you?", age);
}

sayniceMeetYou("태중", 26);


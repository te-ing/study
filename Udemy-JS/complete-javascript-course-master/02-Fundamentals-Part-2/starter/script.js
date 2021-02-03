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

    */
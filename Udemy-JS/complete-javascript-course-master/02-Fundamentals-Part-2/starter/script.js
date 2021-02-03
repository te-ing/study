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
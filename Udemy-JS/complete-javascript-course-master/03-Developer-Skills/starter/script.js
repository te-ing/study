// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const x = 23;

console.log(x);
console.log(40);

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: prompt("Degrees celsius"),
  };
  
  console.log(measurement.value10); // B)
  // console.warn(measurement.value); // 주의 발생
  // console.error(measurement.value); // 에러 발생

  const kelvin = measurement.value + 273;
  return kelvin;
};
//  A) 버그 확인
console.log(measureKelvin());


Coding Challenge #1

최대 기온의 배열을 가지고 온도계에 표시해라  [17, 21, 34]을 "17℃ in 1days ... 21℃ in 2day ..."

임무
1. arr 변수와 console.log를 포함하는 printForecast 함수를 만들어라
2. framework를 사용해 문제를 해결해라. 문제를 이용하고 멈춰서 작은 문제들을 해결해라

Data 1: [17, 21, 23] Data 2: [12, 5, -5, 0, 4]
*/

const Data1 = [17, 21, 23];
const Data2 = [12, 5, -5, 0, 4];

console.log(Data1);

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}℃ in ${i + 1} days...`);
  }
};

printForecast(Data1);
printForecast(Data2);

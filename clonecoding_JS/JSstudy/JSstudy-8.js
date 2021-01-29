if(10 === "10"){ /// === 변수를 할당하는 것이 아닌 체크(계산)
    console.log('hi');
} else if("10" === "10") {
    console.log('hello');
}

// 피연산자
if(20 > 5 && "TJ" === "TJ"){  // && : and의 의미.  || : or의 의미
    console.log("yes");
} else {
    console.log("no");
}

// 조건문 연습
const age = prompt("How old are you?");  //prompt는 매우 오래된 함수로 이제는 쓰이지 않음

console.log(age)
if(age >= 18 && age <= 80){
    console.log("당신은 술을 마실 수 있습니다.")
} else {
    console.log("당신은 술을 마시면 안돼요")
}
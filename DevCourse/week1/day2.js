export function hello(name) {
//   // alert(`Hello, ${name}!`)
}

// // 객체 리터럴
// const person = {
//   name: "김태중",
//   age: 26,
//   feature: function (like) {
//     console.log(`${like}를(을) 좋아합니다.`);
//   },
// };

// // // Object
// const person = new Object();
// person.name = "김태중";
// person.age = 26;
// person.feature = function (like) {
//   console.log(`${like}를(을) 좋아합니다.`);
// };

// // 생성자 함수
// function person(name, age, feature) {
//   this.name = name;
//   this.age = age;
//   this.feature = function (like) {
//     console.log(`${like}를(을) 좋아합니다.`);
//   };
// }
// console.log(new person("김태중",26));

const raw = "1";



// const regExp = /(.)\1*/g;
// const result = raw.match(regExp)
// .reduce((a,b)=>a+`${b.slice(0,1)}${b.length}`,"");

// console.log(raw.match(regExp));
// console.log(ant(1));
// console.log(ant(ant(ant(1))));


// const regNum = /(.)\1*/g
function toAnt(num){
  function DFS(L, n){ // 개미수열 재귀
    if(num===L) console.log(n);
    else{
      DFS(L+1,ant(n));
    }
  }
  DFS(0, 1);

  function ant(n){ // 개미수열화
    const regExp = /(.)\1*/g;
    const answer = String(n).match(regExp)
    .reduce((a,b)=>a+`${b.slice(0,1)}${b.length}`,"");
    return answer
  }
}
toAnt(5); // 112213 출력됨

// function solution(c, arr){
//   let answer = Number.MIN_SAFE_INTEGER;
//   let n = arr.length;

//   function DFS(L, sum){
//       if(n===L){
//           if(sum<c && sum>answer) answer = sum;
//       }
//       else{
//           DFS(L+1,sum+arr[L])
//           DFS(L+1,sum)
//       }
//   }
//   DFS(0, 0);
//   return answer;
// }
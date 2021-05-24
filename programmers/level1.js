/*

// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

function solution(arr) {
  var answer = 0;
  
  for (i=0; i<arr.length; i++){
      answer= answer+(arr[i]/arr.length);
  }
  console.log(answer);
  return answer;
}

const test1 = [1,2,3,4];
const test2 = [5,5];

solution(test1);
solution(test2);
*/

// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 
// 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 
// 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.

let count = 0;

function solution(s){
  var answer = true;
  s = s.toUpperCase();
  console.log(s);
  
  for (i=0; i<s.length; i++) {
    if(s[i] == "P")
    count += 1;
    
    if(s[i] == "Y") 
    count -= 1;
  }

  console.log(count);
  if (count!=0){
    answer = false;
  }
  return answer;
}

console.log(solution("pPoooyY"));

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


// 비밀지도
// 네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다. 그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야 한다. 다행히 지도 암호를 해독할 방법을 적어놓은 메모도 함께 발견했다.

// 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
// 전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 "지도 1"과 "지도 2"라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다. 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
// "지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
// 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.
// secret map

// 네오가 프로도의 비상금을 손에 넣을 수 있도록, 비밀지도의 암호를 해독하는 작업을 도와줄 프로그램을 작성하라.

// 입력 형식
// 입력으로 지도의 한 변 크기 n 과 2개의 정수 배열 arr1, arr2가 들어온다.

// 1 ≦ n ≦ 16
// arr1, arr2는 길이 n인 정수 배열로 주어진다.
// 정수 배열의 각 원소 x를 이진수로 변환했을 때의 길이는 n 이하이다. 즉, 0 ≦ x ≦ 2n - 1을 만족한다.
// 출력 형식
// 원래의 비밀지도를 해독하여 '#', 공백으로 구성된 문자열 배열로 출력하라.

// 입출력 예제
// 매개변수	값
// n	5
// arr1	[9, 20, 28, 18, 11]
// arr2	[30, 1, 21, 17, 28]
// 출력	["#####","# # #", "### #", "# ##", "#####"]
// 매개변수	값
// n	6
// arr1	[46, 33, 33 ,22, 31, 50]
// arr2	[27 ,56, 19, 14, 14, 10]
// 출력	["######", "### #", "## ##", " #### ", " #####", "### # "]

function solution(n, arr1, arr2){
  const answer = [];
  
  for(i=0; i<n; i++){
    const bin = (arr1[i]|arr2[i]).toString(2),
    line = [];
    for (let j = bin.length - n; j< bin.length; j++) {
      if(bin[j] === '1') {
        line.push('#');
      } else {
        line.push(' ');
      }
    }
    answer.push(line.join('')); // join 배열 합치기
    console.log(answer[i]);
  }
  
  return answer;
}

solution(5,[9, 20, 28, 18, 11],[30, 1, 21, 17, 28]);

*/

// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// array의 길이는 1 이상 100 이하입니다.
// array의 각 원소는 1 이상 100 이하입니다.
// commands의 길이는 1 이상 50 이하입니다.
// commands의 각 원소는 길이가 3입니다.

// function solution(array, commands) {

//   let answer = [];
  
//   function lineup(line){ 
//     let temp;
//     for(i=0; i<line.length; i++){
//       for(j=0; j<line.length; j++){
//         if(line[j]>line[j+1]){
//           temp=line[j];
//           line[j]=line[j+1];
//           line[j+1]=temp;
//         }
//       }
//     }
//     return line;
//   }

  
//   array1 = array.slice(commands[0][0]-1,commands[0][1]);
//   array2 = array.slice(commands[1][0]-1,commands[1][1]);
//   array3 = lineup(array.slice(commands[2][0]-1,commands[2][1]));

//   answer = [lineup(array1)[commands[0][2]-1], lineup(array2)[commands[1][2]-1], lineup(array3)[commands[2][2]-1]]

//   return answer;
// }

// solution(array,commands);

const array = [1, 5, 2, 6, 3, 7, 4];
const commands =[[2, 5, 3], [4, 4, 1], [1, 7, 3]];

function solution(array, commands) {
  var answer = [];

  for (i=0; i<commands.length; i++){
    answer.push(array.slice(commands[i][0]-1,commands[i][1]).sort(function(a,b) {
      return a - b;
    })[commands[i][2]-1]);
  }
  return answer;
}

solution(array,commands)

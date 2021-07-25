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
          
          
          // 체육복
          
          // 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.
          
          // 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.
          
          // 제한사항
          // 전체 학생의 수는 2명 이상 30명 이하입니다.
          // 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
          // 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
          // 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
          // 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
          
          // n	lost	reserve	return 입출력 예시
          // 5	[2, 4]	[1, 3, 5]	5
          // 5	[2, 4]	[3]	4
          // 3	[3]	[1]	2
          
          // function solution(n, lost, reserve) {
            //   var answer = n - lost.length;
            
            //   for(lostS of lost){
//       if (reserve.includes(lostS)) {
  //           answer ++;
  //           reserve.splice(reserve.indexOf(lostS),1);
  //           }
  //       else if (reserve.includes(lostS-1)) {
    //           answer ++;
    //           reserve.splice(reserve.indexOf(lostS-1),1);
    //           }
    //       else if (reserve.includes(lostS+1)) {
      //           answer ++;
      //           reserve.splice(reserve.indexOf(lostS+1),1);
      //           }
      //        }
      //   return answer;
      // }
      
      // console.log(solution(7, [2, 3, 4], [1, 2, 3, 6]));
      
      // // 정답코드
      // function solution(n, lost, reserve) {
        //   let answer = n;
        
        //   for (let i = 0; i < reserve.length; i++) { // 여벌 체육복
        //     if (lost.includes(reserve[i])) { // 체육복을 도난맞은 학생이 여벌 체육복이 있다면
        //       lost.splice(lost.indexOf(reserve[i]), 1); // 도난 체육복에서 여벌 체육복 제외
        //       reserve.splice(i, 1); // 여벌 체육복 제외
        //       i--; // reserve.length가 줄어드므로 i--;
        //     }
        //   }
        
        //   for (let i = 0; i < reserve.length; i++) { 
          //     if (lost.includes(reserve[i] - 1)) {
            //       lost.splice(lost.indexOf(reserve[i] - 1), 1);
            //       reserve.splice(i, 1);
            //       i--;
            //     } else if (lost.includes(reserve[i] + 1)) {
              //       lost.splice(lost.indexOf(reserve[i] + 1), 1);
              //       reserve.splice(i, 1);
              //       i--;
              //     }
              //   }
              //   answer = n - lost.length;
              //   return answer;
              // }
              
              
              // 수정 코드
              function solution(n, lost, reserve) {
                var answer = n;
                
                for(reserveS of reserve){
                  if (lost.includes(reserveS)) {
                    lost.splice(lost.indexOf(reserveS),1);
                    reserve.splice(reserve.indexOf(reserveS),1);
                  }
                }
                
                for(reserveS of reserve){
                  if (lost.includes(reserveS-1)) {
                    lost.splice(lost.indexOf(reserveS-1),1);
                    reserve.splice(reserve.indexOf(reserveS),1);
                  }
                  else if (lost.includes(reserveS+1)) {
                    lost.splice(lost.indexOf(reserveS+1),1);
                    reserve.splice(reserve.indexOf(reserveS),1);
                  }
                }
                answer = n - lost.length;
                
                return answer;
              }
              
console.log(solution(7, [2, 3, 4], [1, 2, 3, 6]));
              

// 모의고사
// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한 조건
// 시험은 최대 10,000 문제로 구성되어있습니다.
// 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
// 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
// 입출력 예
// answers	return
// [1,2,3,4,5]	[1]
// [1,3,2,4,2]	[1,2,3]


// 내 풀이
// function solution(answers) {
//     var answer = [];

//   let student1 = 0;
//   let student2 = 0;
//   let student3 = 0;
  
//   const answers2 = [2,1,2,3,2,4,2,5];
//   const answers3 = [3,3,1,1,2,2,4,4,5,5];

//   for (i=0; i<answers.length; i++){
//       if(answers[i] == i%5+1)
//           student1 ++;
//       if(answers[i]==answers2[i%8])
//           student2 ++;
//       if((answers[i])==answers3[i%10])
//           student3 ++;
//         }

//   if(student1 > student2 && student1 >  student3){
//     answer = [1]
//   }
//   if(student2 > student1 && student2 > student3){
//     answer = [2]
//   }
//   if(student3 > student1 && student3 > student2){
//     answer = [3]
//   }
//   if(student1 > student3 && student1 == student2){
//     answer = [1,2]
//   }
//   if(student1 > student2 && student1 == student3){
//     answer = [1,3]
//   }
//   if(student2 > student1 && student2 == student3){
//     answer = [2,3]
//   }
//   if(student1 == student2 && student2 == student3 && student1 == student3){
//     answer = [1,2,3]
//   }

//   return answer
// }              

// 다른사람의 풀이
// function solution(answers) {
//     var answer = [];
//     var a1 = [1, 2, 3, 4, 5];
//     var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
//     var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//     var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
//     var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
//     var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
//     var max = Math.max(a1c,a2c,a3c);

//     if (a1c === max) {answer.push(1)};
//     if (a2c === max) {answer.push(2)};
//     if (a3c === max) {answer.push(3)};

//     return answer;
// }

// 내 풀이 수정

// function solution(answers) {
//   var answer = [];

//   let student1 = 0;
//   let student2 = 0;
//   let student3 = 0;
  
//   const answers1 = [1,2,3,4,5]
//   const answers2 = [2,1,2,3,2,4,2,5];
//   const answers3 = [3,3,1,1,2,2,4,4,5,5];

//   for (i=0; i<answers.length; i++){
//       if(answers[i] == answers1[i%answers1.length])
//           student1 ++;
//       if(answers[i]== answers2[i%answers2.length])
//           student2 ++;
//       if((answers[i])== answers3[i%answers3.length])
//           student3 ++;
//         }
//   const max = Math.max(student1,student2,student3);
        
//   if (student1 == max) {answer.push(1)}
//   if (student2 == max) {answer.push(2)}
//   if (student3 == max) {answer.push(3)}

//   return answer
// }


//[크레인 인형뽑기 게임](programmers.co.kr/learn/courses/30/lessons/64061)

let board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
const moves = [1,5,3,5,1,2,1,4]

function solution(board, moves) {
  var answer = 0;
  let basket = []
  
  for (i=0; i<moves.length; i++){
    for (j=0; j<board[0].length; j++){
      if(board[j][moves[i]-1]!==0){
        basket.push(board[j][moves[i]-1]);
        board[j][moves[i]-1] = 0;
        j = board[0].length;
      }
    }
  }
  
  for (i=0; i<basket.length; i++){
    if(basket[i]===basket[i+1]){
      basket.splice(i,2);
      answer += 2;
      i = -1; 
    }
  }
  return answer;
}


//[신규아이디 추천](https://programmers.co.kr/learn/courses/30/lessons/72410)

function solution(new_id) {
  let answer = '';
  
  const ableWord = '0123456789qwertyuiopasdfghjklzxcvbnm-_.'
  let ableId = [];
  
  // 1단계
  answer = new_id.toLowerCase();
  
  // 2단계
  for (let word of answer){
      if(ableWord.includes(word)){
          ableId.push(word);
      }
  };
  // 3단계
  for(let i=0; i<ableId.length; i++){
    if (ableId[i-1]=='.' && ableId[i]=='.'){
          ableId.splice(i,1);
          i = 0;
        }
      };
      
      // 4단계
  if (ableId[0]=='.')
      ableId.shift();
      if (ableId[ableId.length-1]=='.')
      ableId.pop();
      
      // 5단계
  if (ableId=='')
  ableId.push('a')
  
  // 6단계
  if (ableId.length>15)
      ableId.splice(15,ableId.length);
      if (ableId[ableId.length-1]=='.')
      ableId.pop();
      
  // 7단계
  if (ableId.length<3)
      ableId.push(ableId[ableId.length-1]);
      if (ableId.length<3)
      ableId.push(ableId[ableId.length-1]);
      
  // 마지막 문자열을 문자로 변환해야함
  
  answer = ableId.join('');
  
    
  return answer;
}


// [로또의 최저순위와 최고순위](https://programmers.co.kr/learn/courses/30/lessons/77484)

function solution(lottos, win_nums) {
  let answer = [7,7];
  
  for (let lotto of lottos){
    if(win_nums.includes(lotto)){
      answer[0] --;
      answer[1] --;
    }
  }
  for (let unknown of lottos){
    if(unknown == 0)
    answer[0] --;
  }
  
  if(answer[0]==7){
    answer[0] --;
  }
  if(answer[1]==7){
    answer[1] --;
  }
  
  return answer;
}


// 네이버 부스트캠프 웹모바일 자가진단 코딩테스트
// [중복 숫자 찾기 함수구현](https://blog.naver.com/PostView.naver?blogId=boostcamp_official&logNo=221978031932&parentCategoryNo=&categoryNo=20&viewDate=&isShowPopularPosts=false&from=postList)

function solution(arr){
  
  let answer = [];
  let count = 0;
  let numbers = [...new Set(arr)].sort((a,b)=>a-b); // 정렬, 중복된 값 제거
  
  if(numbers.length == arr.length){ // 중복된 값이 없으면 -1 출력
    answer=[-1];
    return answer;
  }
  
  for(let num of numbers){
    for(let i=0;i<arr.length;i++){ // 중복된 값이 있는 경우 카운트 ++
      if(num == arr[i]){
        count ++;
      }
    }
    if(count>1){
      answer.push(count);
    }
    count=0;
  }
  return answer;
}

// [카카오 크레인 인형뽑기 게임](https://programmers.co.kr/learn/courses/30/lessons/64061)

function solution(board, moves) {
  var answer = 0;
  let basket = []
  
  for (i=0; i<moves.length; i++){
    for (j=0; j<board[1].length; j++){
        if(board[j][moves[i]-1]!==0 && typeof(board[j][moves[i]-1])==='number'){
          basket.push(board[j][moves[i]-1]);
          board[j][moves[i]-1] = 0;
          j = board[1].length;
        }
      }
    }
    
    for (i=0; i<basket.length; i++){
      if(basket[i]===basket[i+1]){
        basket.splice(i,2);
        answer += 2;
        i = -1;
  }
}

return answer;
}


// [소수만들기](https://programmers.co.kr/learn/courses/30/lessons/12977)
// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
// nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.

function solution(nums) {
  let answer = 0;
  let count = 0;
  
  // 서로 다른 3개 고르기
  for(let i=0; i<nums.length; i++){
      for(let j=0; j<nums.length; j++){
        if(i==j)
              continue
          for(let k=0; k<nums.length; k++){
            if(k==i || k==j)
                  continue
                  // 소수인지 확인
              for(let l=2; l<nums[i]+nums[j]+nums[k]; l++) {
                count = 0;   
                  if((nums[i]+nums[j]+nums[k])%l==0)
                  count ++;
                  if (count ==0)
                  answer ++;
                }
              }
      }
    }
    return answer;
}

*/

function solution(nums) {
  let answer = 0;
  let sums = [];
  // 서로 다른 3개 고르기 조합
  const getCombination = function (arr, selectNum) {
      const result = [];
      if (selectNum===1) return arr.map(v=>[v]); 
      
      arr.forEach((fixed, index, array)=>{
          const rest = array.slice(index+1);
          const combinations = getCombination(rest, selectNum-1);
          const attached = combinations.map(combi=>[fixed, ...combi]);
          result.push(...attached);
      });
      return result;
  }
  // 조합의 합
  const C3 = getCombination(nums,3); 
  for (let i=0; i<C3.length; i++) {
      sums.push(C3[i][0]+C3[i][1]+C3[i][2]);
  }
  
  // 소수인지 확인
  for(let sum of sums){
      let isPrime = true;
      for(let j=3; j<sum; j++){
          if(sum % j ===0){
           isPrime = false;
          }
      }
      if(isPrime)
      answer ++;
  }
  return answer;
}


// let arr = [1,2,3,4,5];

// function permutation ( arr, selectNum) { // 순열코드
//   let result = [];
//   if (selectNum ===1) return arr.map((item)=>[item]); // 하나씩 뽑는다면 아이템 그대로 반환

//   arr.forEach((item, index, arr) => {
//     const fixer = item; // 첫번째 고정
//     const restArr = arr.filter((_,idx) => index !==idx); // filter, index를 통해 같은수를 뽑지 않도록 "_" 는 인덱스를 사용하기 위한 빈 값
//     const permutationArr = permutation(restArr, selectNum -1); // 재귀함수 
//     const combineFixer = permutationArr.map((item) => [fixer, ...item]);
//     result.push(...combineFixer);
//   });
//   return result
// }
// permutation(arr,3);




// 코딩테스트 자주 쓰는 문법

// arr = [1,2,3,4,5]
// console.log(arr.indexOf(1)!==-1);  
// console.log(arr.includes(1)); // // arr에 1 있는지 확인 후 true나 false 반환
// arr.pop() // 배열의 마지막 요소 제거 후 반환
// arr.shift() // 배열의 첫번째 요소 제거 후 반환
// arr.unshift() // 배열의 앞쪽에 데이터 넣음
// arr.push() // 배열의 뒤쪽에 데이터 넣음
// arr.substr(start index, length) // start index부터 length 길이만큼 string을 잘라내어 반환
// arr.splice(arr.indexOf(1),1); // 1 삭제
// arr.splice(1,2); // arr 배열의 [1]부터 2개 제거
// arr.slice(1,2); // arr 배열의 [1] 부터 [2]까지 자르기
// arr.sort() // 아즈키코드 오름차순 정렬
// arr.sort(function(a,b){ // 숫자 오름차순 정렬
//   retrun a - b;
// });
// filter: 배열을 순회하며 조건을 만족하는 원소 리턴, i%ai.length : 배열 내 인덱스 반복
// const a1 = [1,2,3,4,5]
// var newArray = arr.filter((a,i)=> a === a1[i%a1.length]).length
// Math.max() 입력받은 숫자 중 가장 큰 숫자 반환
// Math.abs() 입력받은 숫자의 절대값 반환
// const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi; //  / /gi 의 의미: // 정규식표현 g: 모든 패턴에 대한 전역검색 i:대소문자 구분안함
// if(regExp.test(Data)){  // test() ㅡ 찾는 문자열이 들어있는지 확인
//   new_Data = Data.replace(regExp, "")}; // 찾은 특수 문자를 제거
// let fruit = 'apple, banana, orange';
// let replaced_fruit = fruit.replace('banana', 'tomato');
// arr.join(separator) // 배열 arr을 문자열로 바꿈. separator는 문자열 사이마다 들어가는 구분자, defalt값이 , 이므로 없애려면 arr.join('')
// const array1 = ['a', 'b', 'c'];
// array1.forEach(element => console.log(element)); // array1의 element 출력
// let num = x.charCodeAt(); 
// charCodeAt() 아스키코드 변환 65~90 대문자 97~122 소문자 (32를 빼면 대문자)
// String.fromCharCode(숫자); 아스키코드를 숫자로 변환
// arr.reverse() // arr의 배열을 반대로 변경
//   s=s.toLowerCase().replace(/[^a-z]/g,""); s의 문자열을 소문자로 변경, a-z가 아닌 것들은 삭제
// if(!isNaN(x)) // is Not a Number : isNaN(데이터) 데이터가 숫자이면 false
// parseInt(answer); // parseInt(숫자) 정수로 표현
// function isPrime(num){ // 소수구하기
//   if(num===1) return false;
//   for(i=2; i<=parseInt(Math.sqrt(num)); i++){ // Math.sqrt() 제곱근 반환
//       if(num%i==0) return false;
//   } return true;
// }
// Array.from({length: 5}, (v, i) => i); // [0, 1, 2, 3, 4] // Array.from({length: 5}, ()=>0); [0,0,0,0,0]
// Array.from(Array(35),()=>Array(35).fill(0)) // 35길이의 행, 35길이의 열을 0으로 채운다
// Array.trim() // Array에 있는 앞뒤 공백문자 제거
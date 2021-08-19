function reduce(f) {
  return function (acc, iter) {
    if (!iter) acc = (iter = acc[Symbol.iterator]()).next().value;
    for (const a of iter) acc = f(acc, a);
    return acc;
  }
}

function go(arg, ...fs) {
  return reduce((arg, f) => f(arg))(arg, fs);
}

function grading(answers, pattern){
  let score = Array.from({length:pattern.length},()=>0)
  for(let i=0; i<pattern.length; i++){
    for(let j=0; j<answers.length; j++)
    if(answers[j] === pattern[i][j%pattern[i].length]) score[i]++
  }
  return score
}

function ranking (arr){
  let rank = [];
  let highScore = Math.max(...arr)

  for(let i=0; i<arr.length; i++){
    if(arr[i]===highScore)
    rank.push(i+1)
  }
  return rank
}

function solution(answers) {
  const pattern = [
    [1,2,3,4,5],
    [2,1,2,3,2,4,2,5],
    [3,3,1,1,2,2,4,4,5,5]
  ]

return go(
  grading(answers,pattern),
  ranking,
)
}
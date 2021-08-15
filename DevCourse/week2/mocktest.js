/*
문제를 풀려 하였을때 가장 힘들었던 점은 3가지의 패턴을 저장하지 않고 이끌어 가야한다는 점이었습니다.
이전 마라톤 문제를 떠올리며 countBy를 통해 풀어야 한다고 구상했지만,
막상 하나의 흐름으로 이끌어 가야 한다는 점 때문에 구현해내지 못했습니다.

또, 학생1,2,3의 정답패턴을 제너레이터를 이용해 만들어 보려 했지만
이미 만들어진 함수를 수정하는 것이 아닌, 아무것도 없는 상태에서 원하는 함수를 
만드려 하니 제대로 구현을 못했습니다. 

함수형 사고방식이 익숙치 못해 풀지 못했던 기능개발 문제와 달리 모의고사 문제는 
제너레이터와 이터러블에 대한 이해도가 부족해 풀지 못했다는 생각 때문에 제 학습이 부족하지 않았나 라는 생각이 듭니다.
효율적인 함수형 프로그래밍을 위해서 이터러블과 제너레이터에 대한 공부가 더 필요하다고 느껴졌습니다.
*/

const students = [
  { name: 1, pattern: [1, 2, 3, 4, 5] },
  { name: 2, pattern: [2, 1, 2, 3, 2, 4, 2, 5] },
  { name: 3, pattern: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] }
];

const last = arr => arr[arr.length-1];

function* repeat(a) {
  while (true) yield a;
}

const randomAnswers = (pattern, length) => go(
    pattern,
    repeat,
    flat,
    take(length)
);

const scoring = answers => ({name, pattern}) => ({
  name,
  score: go(
    randomAnswers(pattern, answers.length),
    zip(answers),
    countBy(([a, b]) => a === b ? 'o' : 'x'),
    counted => counted.o || 0
  )
});

const solution = answers => go(
    students,
    map(scoring(answers)),
    groupBy(({score}) => score),
    Object.values,
    last,
    map(({name}) => name),
    _ => [..._]
);




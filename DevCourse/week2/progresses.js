function map(f) {
  return function* (iter) {
    for (const a of iter) yield f(a);
  }
}

function filter(f) {
  return function* (iter) {
    for (const a of iter) if (f(a)) yield a;
  }
}

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

const countBy = (f) => (iter) =>
  reduce((counts, a) => inc(counts, f(a)))({}, iter);

const identity = a => a;

const count = countBy(identity);

function zip(a) {
  return function* (b) {
    a = a[Symbol.iterator]();
    b = b[Symbol.iterator]();
    while (true) {
      const { value, done } = a.next();
      const { value: value2, done: done2 } = b.next();
      if (done && done2) break;
      yield [value, value2];
    }
  }
}

// 작업별 배포까지 걸리는 날짜를 받아, 배포 가능한 개수를 출력하는 함수

function numberOfTask(iter) { // 받는 배열은 배포까지 걸리는 일자
  let num = iter.next().value; // 배열의 첫번째 값
  let task = 1; // 배포 가능한 작업 개수
  let arr = []; // 출력되는 배열
  for (const day of iter) { 
    if(day > num) { // 앞선 작업보다 오래 걸리면 앞선 작업 배포
      arr.push(task)
      num = day
      task = 1
    } else task++; // 앞선 작업보다 빨리 끝나면 배포 가능 개수 + 1
  }
  arr.push(task)
  return arr;
}



function solution(progresses, speeds) {
    return go(
    zip(progresses)(speeds), 
    map(([progress, speed]) => Math.ceil((100 - progress) / speed)), // 작업별 배포까지 걸리는 날짜
    numberOfTask,
    )
}

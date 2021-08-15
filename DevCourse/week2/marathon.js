function reduce(f) {
  return function (acc, iter) {
    if (!iter) acc = (iter = acc[Symbol.iterator]()).next().value;
    for (const a of iter) acc = f(acc, a);
    return acc;
  }
}
function filter(f) {
  return function* (iter) {
    for (const a of iter) if (f(a)) yield a;
  }
}

function go(arg, ...fs) {
  return reduce((arg, f) => f(arg))(arg, fs);
}

const head = ([a]) => a;

function* entries(obj) {
  for (const k in obj) yield [k, obj[k]];
}

const find = (f) => (iter) => head(filter(f)(iter));

function inc(parent, k) {
  parent[k] ? parent[k]++ : (parent[k] = 1);
  return parent;
}

const countBy = (f) => (iter) =>
  reduce((counts, a) => inc(counts, f(a)))({}, iter);

function reduceArray(f) { // 합친 값을 배열로 만듦
  return function (acc, iter) {
    if (!iter) acc = (iter = acc[Symbol.iterator]()).next().value;
    for (const a of iter) acc = f(acc, a);
    return acc.split(","); // split을 사용해 배열화
  }
}


function solution(participant, completion) {
  return go(
    reduceArray((origin,add)=>`${origin},${add}`)(participant,completion), // 참가자와 완주자 병합
    countBy((name)=>name), // 인원 수 계산
    entries, // Object 를 Array로 변환
    find(([name, count]) => count === 0 || count%2 === 1), // 인원수가 0이거나 홀수인 수 찾기
    head, // name 리턴
  )
}
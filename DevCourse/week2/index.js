const add = (a,b) => a+b;

const curry = f => 
(a, ..._) => _.length ? f(a, ..._)  : (..._) => f(a, ..._);

const reduce = curry((f, acc, iter) => {
if (!iter) {
  iter = acc[Symbol.iterator]();
  acc = iter.next().value;
}
for(const a of iter) {
  acc = f(acc, a);
}
return acc;
});

const go = (...args) => reduce((a,f) => f(a),args);
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

function test(name, time, f) {
  console.time(name);
  while (time--) f();
  console.timeEnd(name);
}

const  range = l => {
  let i = -1;
  let res = [];
  while(++i < l) {
    res.push(i);
  }
  return res;
};

const L = {}; // 느긋한 계산법: 미루다 마지막에만 평가하여 효율을 높임
L.range = function*(l) {
let i = -1;
while(++i < l) {
  yield i;
}
};

const take = curry((l, iter) => {
  let res = [];
  for (const a of iter)  {
    res.push(a);
    if (res.length == l) return res;
  }
  return res;
});

L.map = curry(function*(f, iter) {
  for (const a of iter) yield f(a);
});

L.filter = curry(function*(f, iter) {
  for(const a of iter) if (f(a)) yield a;
});

L.entries = function*(obj) {
  for (const k in obj) yield [k, obj[k]];
};

const join = curry((sep =',', iter) => // reduce를 이용하기 때문에 배열 외 형식 가능
  reduce((a,b) => `${a}${sep}${b}`, iter)) // yield도 가능. 조합성 높음

const find = curry((f, iter) => go(
  iter,
  L.filter(f), 
  take(1), // 하나만 꺼내도록
  ([a]) => a // 배열을 꺼내줌
));

L.flatten = function* (iter) { // 배열 펼치기
  for (const a of iter) {
    if (isIterable(a)) for (const b of a) yield b;
    else yield a;
  }
}

const takeAll = take(Infinity);

const filter = curry(pipe(L.filter, takeAll))
const map = curry(pipe(L.map,takeAll));

const isIterable = a => a && a[Symbol.iterator];
const flatten = pipe(L.flatten, takeAll);
L.flatMap = curry(pipe(L.map, L.flatten));
const flatMap = curry(pipe(L.map, flatten))
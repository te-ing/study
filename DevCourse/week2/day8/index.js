const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000},
  { name:  "핸드폰케이스", price: 15000},
  { name:  "후드티", price: 30000 },
  { name:  "바지", price: 25000}
];

let names = [];
for (const p of products) {
  names.push(p.name);
}

let prices = [];
for (const p of products) {
  prices.push(p.price);
}

const add = (a,b) => a+b;

const curry = f => 
(a, ..._) => _.length ? f(a, ..._)  : (..._) => f(a, ..._);

const map = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
});

const filter = curry((f, iter) => {
let res = [];
for (const a of iter) {
  if(f(a)) res.push(a);
}
return res;
});

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
const pipe = (...fs) => (a) => go(a, ...fs); // pipe 함수: 함수를 리턴하는 함수

function test(name, time, f) {
  console.time(name);
  while (time--) f();
  console.timeEnd(name);
}
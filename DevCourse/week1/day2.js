export function hello(name) {
  // alert(`Hello, ${name}!`)
}

// 객체 리터럴
const person = {
  name: "김태중",
  age: 26,
  feature: function (like) {
    console.log(`${like}를(을) 좋아합니다.`);
  },
};

// // Object
const person = new Object();
person.name = "김태중";
person.age = 26;
person.feature = function (like) {
  console.log(`${like}를(을) 좋아합니다.`);
};

// 생성자 함수
function person(name, age, feature) {
  this.name = name;
  this.age = age;
  this.feature = function (like) {
    console.log(`${like}를(을) 좋아합니다.`);
  };
}
console.log(new person("김태중",26));
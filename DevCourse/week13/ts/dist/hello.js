const dev = {
    name: "devCorse, Inc",
    age: 3,
};
const person = {
    name: "Lee Sun-Hyoup",
};
console.log(person === null || person === void 0 ? void 0 : person.age);
const value = {
    value: 1,
};
function logText(text) {
    return text;
}
console.log(logText("5")); // 텍스트를 넘겼기 때문에 제네릭 타입은 <string>이 된다(타입추론)
console.log(logText(5)); // number
// 같은 의미의 코드
let str = logText;
let string = logText;
// Partial: 모든 필드 Optional
const parial = {
    createdAt: "2", // 모든 필드가 Optional
};
// Required: 모든 필드 Required
const required = {
    id: 1,
    name: "Lee",
    age: 0,
    address: "Seoul",
    createdAt: "필수",
    updatedAt: "필수",
};
// Pick 특정 필드만 사용
const pick = {
    name: "",
    age: 3,
};
// Omit 특정 필드만 제외하고 사용
const omit = {
    name: "",
    age: 3,
    address: "",
};
const mixed = {
    name: "",
    age: 3,
};
//# sourceMappingURL=hello.js.map
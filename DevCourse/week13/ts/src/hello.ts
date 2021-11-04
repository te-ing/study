interface ComPany {
  name: string;
  age: number;
  address?: string; // Optional
}

const dev: ComPany = {
  name: "devCorse, Inc",
  age: 3,
};

const person: {
  name: string;
  age?: number;
} = {
  name: "Lee Sun-Hyoup",
};

console.log(person?.age);

// Generic
interface Value<T> {
  value: T;
}
const value: Value<number> = {
  value: 1,
};
function logText<T>(text: T): T {
  return text;
}
console.log(logText("5")); // 텍스트를 넘겼기 때문에 제네릭 타입은 <string>이 된다(타입추론)
console.log(logText(5)); // number

// 같은 의미의 코드
let str: <T>(text: T) => T = logText;
let string: { <T>(text: T): T } = logText;

interface User {
  id: number;
  name: string;
  age: number;
  address: string;
  createdAt?: string;
  updatedAt?: string;
}

// Partial: 모든 필드 Optional
const parial: Partial<User> = {
  createdAt: "2", // 모든 필드가 Optional
};

// Required: 모든 필드 Required
const required: Required<User> = {
  id: 1,
  name: "Lee",
  age: 0,
  address: "Seoul",
  createdAt: "필수",
  updatedAt: "필수",
};

// Pick 특정 필드만 사용
const pick: Pick<User, "name" | "age"> = {
  name: "",
  age: 3,
};

// Omit 특정 필드만 제외하고 사용
const omit: Omit<User, "id" | "createdAt"> = {
  name: "",
  age: 3,
  address: "",
};

const mixed: Omit<User, "id" | "age" | "address"> & Pick<Partial<User>, "age"> =
  {
    name: "",
    age: 3,
  };

// extends 인터페이스 상속

interface Time {
  hour: number;
  minute: number;
}

interface DateTime extends Time {
  month: number;
  day: number;
}

interface TimeFormat extends Pick<Time, "hour"> {
  ampm: number;
}

/*
camel case: 변수명을 항상 소문자로 시작해서 스페이스가 필요하면 대문자를 쓰는 방식(ex: daysOfWeek)
*/
//데이터 정렬방법 1: Array [] 텍스트, 불리안, 숫자만 사용가능
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true, 96];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);

//데이터 정렬방법 2: Object
const tjInfo = { 
    name:"태중", 
    age:26,
    gender:"Male",
    isHandsome:true,
    favMovies: ["Once", "건축학개론", "Avengers"],
    favFood: [
        {
            brand:"롯데리아", hamburger:true
        },
        {
         brand:"하우돈곱창", hamburger:false
        }
    ]
}

tjInfo.isHandsome = "iDontKnow"
console.log(tjInfo.gender);
console.log(tjInfo.isHandsome);
console.log(tjInfo.favMovies[2]);
console.log(tjInfo.favFood[0].brand, tjInfo.favFood[0].hamburger)
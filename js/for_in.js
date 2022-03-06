// for in 반복문
let user = {
    name:"John",
    age : 30,
    isAdmin: true
};
for (let a in user) {
    console.log(a);
    console.log(user[a]);
}

// 객체는 특별한 방식으로 정렬된다.
let codes = {
    "49":"독일",
    "41":"스위스",
    "44":"영국",
    "1":"미국"
};
for (let code in codes) {
    console.log(code);
    // 실행결과 키값이 오름차순으로 정렬되어 나옴을 확인
    // 키가 정수여서 오름차순으로 프로퍼티가 자동정렬된다.
}
// 키가 정수가 아닌 경우에는 작성된 순서대로 프로퍼티가 나열됨.
let user2 = {
    name: "John",
    surname: "Smith"
};
user2.age = 25;
for (let prop in user2) {
    console.log(prop);
}
console.log("-------------");
// 따라서 위 나라이름이 작성된 순서대로 나열이 되도록 하려면 키에 +를 붙이거나 소숫점으로 구현해라
let codes2 = {
    "+49":"독일",
    "+41":"스위스",
    "44.0":"영국",
    "+1":"미국"
};
for (let a in codes2) {
    // console.log(a);  이렇게 하면 키값에 있는 +와 소숫점이 그대로 출력됨
    console.log(+a);
}
// 객체 속 프로퍼티 수정 및 삭제하기
let user = {
    name : "John",
    surname : "Smith"
};

user.name = "Pete";
console.log(user);

delete user.name;
console.log(user);

console.log("------------------");


// 객체가 비어있는지 확인하기
let schedule = {};

function isEmpty(obj) {
    for(let key in obj){
        return false;
    }
    return true;
}
// alert(isEmpty(schedule));   // true
schedule["8:30"] = "get up";
// alert(isEmpty(schedule));   // false

// 변하지 않는 개체
const user2 = {
    name : "John"
};
user2.name = "Pete";
console.log(user2);

console.log("-------------------");

// 프로퍼티 합계 구하기
// 샐러리가 비어있으면 0 출력하기
function isEmpty2(obj) {
    for(let key in obj) {
        return false;
    }
    return true;
}

let salaries = {
    // John: 100,
    // Ann: 160,
    // Pete: 130
};

let sum = 0;
if(isEmpty2(salaries)) {
    console.log(0);
} else {
    for(let key in salaries) {
        sum = sum + salaries[key];
    }
    console.log(sum);
}

console.log("-----------------");

// 프로퍼티 값 두 배로 부풀리기
function multiplyNumeric(obj) {
    obj = obj * 2;
    return obj;
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

// console.log(typeof(menu["width"]));      // number

for (let key in menu) {
    if(typeof menu[key] == "number") {
        // console.log(menu[key]);  // 200 300 출력 확인
        let result = multiplyNumeric(menu[key]);
        // console.log(result);     // 400 600 출력 확인
        menu[key] = result;
    }
}

console.log(menu);
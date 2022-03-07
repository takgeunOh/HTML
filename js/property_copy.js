// 프로퍼티 할당

let user = { name: "John" };

let permission1 = { canView: true };
let permission2 = { canEdit: true };

Object.assign(user, permission1, permission2);

console.log(user);

// 동일한 이름의 프로퍼티가 있을 경우 덮어쓰기
let user2 = {name : "John" };
Object.assign(user2, {name:"Pete"});
console.log("---------------------------");
console.log(user2);

// 반복문 없이 객체 복사하기
let user3 = {
    name: "John",
    age: 30
};

let clone = Object.assign({}, user3);
console.log("---------------------------");
console.log(clone);

// 중복 객체 복사
let user4 = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};
let clone2 = Object.assign({}, user4);
console.log(user4.sizes === clone2.sizes);

user4.sizes.width++;
console.log(clone2.sizes.width);
// 다른 객체에서도 변경사항 확인이 되었음. 단순히 객체를 복사해서 데이터를 독립적으로 다루려면 깊은 복사를 진행하여야함.
// user4[key]의 각 값을 검사하면서 그 값이 객체인 경우 객체의 구조도 복사해주는 반복문을 사용하여야함.


// 요약 : 객체는 참조에 의해 할당되고 복사된다.
// 객채의 프로퍼티 존재여부 파악하기

// 첫 번째 방법
let user1 = {};
console.log(user1.noSuchProperty === undefined);
console.log("--------------");
// 두 번째 방법 (in 연산자)
// "key" in object
let user2 = { name:"John", age:30};
console.log("age" in user2);
console.log("blabla" in user2);
console.log("---------------");
// undefined 방식의 한계점 확인
let obj = {
    test: undefined
};
console.log(obj.test);
console.log("test" in obj);
// obj.test는 실제로 존재하는 프로퍼티임에도 불구하고 undefined로 확인하는 방식은
// 해당 프로퍼티가 정말로 존재하지 않은지 명확히 확인이 불가능하다.


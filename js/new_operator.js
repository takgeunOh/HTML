// 생성자 함수
// 유사한 객체를 여러 개 만들어야할 때 객체 리터럴에 비해 쉽게 만들 수 있다.

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("보라");
// 1. 빈 객체를 만들어 this에 할당
// 2. 함수 본문 실행. this에 새로운 프로퍼티를 추가해 this 수정
// 3. this 반환
// 아래 주석에 있는 코드는 new User(...)에서 동작한 알고리즘을 구체화한 것.
// function User(name) {
//     // this = {};  (빈 객체가 암시적으로 만들어짐)
  
//     // 새로운 프로퍼티를 this에 추가함
//     this.name = name;
//     this.isAdmin = false;
  
//     // return this;  (this가 암시적으로 반환됨)
//   }

alert(user.name);
alert(user.isAdmin);





// new.target과 생성자 함수 (함수가 new와 함께 호출되었는지 아닌지 확인 가능. 자주 사용되지 않음)
// 일반적인 방법으로 함수 호출 시 new.target은 undefined 반환
// 생성자 함수로 함수 호출 시 new.target은 함수 자체를 반환
function User() {
    alert(new.target);
}
User();
new User();



// 일반적으로 생성자 함수에는 return문이 없음. (this를 자동으로 반환하기 때문)
// if return문이 있다면,
// 객체 return 시 this 대신 객체 반환
// 원시형 return 시 return 문 무시 (즉, 원래 하던 것처럼 this 반환)

function BigUser() {

    this.name = "원숭이";
    return { name: "고릴라"};
}
alert(new BigUser().name);

function BigUser2() {
    this.name = "원숭이";
    // return { name: "고릴라"};
}
alert(new BigUser2().name);



// 생성자 함수를 이용하면 this에 메서드를 추가할 수 있다.
function User2(name) {
    this.name = name;

    this.sayHi = function() {
        alert("제 이름은 " + this.name + "입니다.");
    };
}
let bora = new User2("이보라");
bora.sayHi();




// 함수 두 개로 동일한 객체 만들기
// new A()==new B() 성립이 가능한 함수 A와 B 만들어질까?
let obj={};
function A() {
    return obj;
}
function B() {
    return obj;
}
let a = new A;
let b = new B;
alert(a==b);
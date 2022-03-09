// 객체 리터럴에서 'this' 사용하기

function makeUser() {
    return {
        name: "John",
        ref: this   // undefined
    }
};

let user = makeUser();

alert(user.ref.name);
// user.ref.name에서 user(makeUser()함수)의 ref를 참조하려니
// makeUser()의 ref:this에서 this는 함수 자체(undefined)를 의미하고 있다.
// 따라서 위처럼 얼럿을 띄우면 alert(undefined.name)을 띄우는 거나 마찬가지이므로
// 제한된 모드일 때에는 에러를 뿜게 된다.




// 개선안

function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    }
};

let user2 = makeUser();
alert(user2.ref().name);
// makeUser() 함수의 ref()함수에서 this를 리턴하고 this는 . 앞의 객체가 되므로 user2.name을 참조한다.
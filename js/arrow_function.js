let sum = (a,b) => a+b;
console.log(sum(1,2));

let double = n => n*2;
console.log(double(3));

let sayHi = () => alert("안녕하세요!");
sayHi();

let age = prompt("나이를 알려주세요.", 18);
let welcome = (age < 18) ? () => alert('안녕') : () => alert("안녕하세요!");
welcome();

let sum = (a,b) => {
    let result = a+b;
    return result;
    // 표현식이 여러 줄일 때에는 이렇게 중괄호와 함께 명시적으로 반환값을 보여야한다.
};
alert(sum(1,2));


/* 과제
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask(
    "동의하십니까?",
    function() { alert("동의하셨습니다.");},
    function() { alert("취소 버튼을 누르셨습니다.");}
);
화살표 함수로 전환하기
*/

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask (
    "동의하십니까?",
    ()=>alert("동의하셨습니다."),
    ()=>alert("취소 버튼을 누르셨습니다.")
);
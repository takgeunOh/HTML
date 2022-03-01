const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login_submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    // 클릭한다는 마우스 이벤트 function을 e라는 파라미터로 받을 것
    e.preventDefault();
    // 데이터를 제출하지 않고 javascript를 이용한 유효성검사만을 위해 preventDefault(); 사용
    const useremail = loginForm.useremail.value;
    const password = loginForm.password.value;

    if (useremail === "breadmaster@naver.com" && password === "1234") {
        alert("로그인 성공! 환영합니다.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
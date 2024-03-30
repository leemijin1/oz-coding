// 제출 이벤트를 받는다 (이벤트 핸들링)

//제출된 입력 값들을 참조한다

//입력값에 문제가 있는 경우 이를 감지한다

//가입 환영 인사를 제공한다

const form = document.getElementById("form")

//익명함수
form.addEventListener("submit",function(event){
    event.preventDefault() // 기존 기능 차단
  
    let userId = event.target.id.value
    let userPw1 = event.target.pw1.value
    let userPw2 = event.target.pw2.value
    let userName = event.target.name.value
    let userPhone = event.target.phone.value
    let userPosition = event.target.position.value
    let userGender= event.target.gender.value
    let userEmail= event.target.email.value
    let userIntro = event.target.intro.value
    
    if(userId.length < 6)
        alert("아이디가 너무 짧습니다. 6자 이상 입력하세요")
        return

        if(userId.length < 6)
        alert("비밀번호가 일치하지 않습니다.")
        return


    //가입 잘되었다! 환영!
    document.body.innerHTML=""
    document.write(`<p>${userId}님 환영합니다.</p>`)
    document.write(`<p>화면 가입 시 입력하신 내역은 다음과 같습니다.</p>`)
    document.write(`<p>아이디 : ${userId}</p>`)
    document.write(`<p>이름 : ${userName}</p>`)
    document.write(`<p>전화번호 : ${userPhone}</p>`)
    document.write(`<p>원하는 직무 : ${userPosition}</p>`)


})
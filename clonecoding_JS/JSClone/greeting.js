const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing"

function saveName(text){
    localStorage.setItem(USER_LS, text); // localStorage로 Key(USER_LS)와 Value(text)를 저장
}

function handleSubmit(event){ 
    event.preventDefault();             // handleSubmit에서 event가 발생할때 값이 사라지는 것을 막는다.(입력칸에 값을 넣고 엔터를 쳐도 값이 사라지지 않음)
    const currentValue = input.value; 
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit" , handleSubmit); //제출(submit)을 하면 handleSubmit으로 추가
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN)
    greeting.classList.add(SHOWING_CN)
    greeting.innerText = `오늘도 좋은 하루가 될거야, ${text}`
}


function loadName(){
    const currentUser = localStorage.getItem(USER_LS)
    if(currentUser === null){
        askForName()
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();
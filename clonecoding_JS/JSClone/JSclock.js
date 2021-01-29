const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date(); //new Date: 현재 시간을 가져오는 함수
    const minutes = date.getMinutes(); // new Data()에서 가져온 시간을 사용
    const hours = date.getHours(); 
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
            seconds < 10 ? `0${seconds}` : seconds}`;
    // 문자열에 변수를 포함하려면 `(백틱, '아님)과 $를 사용해야 한다.
    // ${seconds < 10 ? `0${seconds}` : seconds} 삼항연산자. ?는 작은 if의 의미
    // seconds < 10 ?(이면) `${seconds}`을 내보내고, :(아니면) seconds를 내보낸다.
}

function init() {
    getTime();
    setInterval(getTime, 1000); // setIntervar('실행함수', '간격(1/1000초)')

    
}


init();
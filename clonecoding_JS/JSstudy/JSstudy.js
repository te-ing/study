const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

/*
function handleClick(){
 const hasClass = title.classList.contains(CLICKED_CLASS); //contains(value) value의 유무로 true, flase를 결정
 if(!hasClass){ //!== : 같지 않다는 표현 , ! not의 의미
     title.classList.add(CLICKED_CLASS); // classList : add, remove 함수로 클래스 조정가능
 } else {
     title.classList.remove(CLICKED_CLASS);
 }
}
아래의 토글과 같은 역할을 함
*/
function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){ 
    title.addEventListener("click", handleClick);
}
init();




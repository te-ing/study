const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR= "#7f8c8d"

function handleClick(){
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else{
        title.style.color = BASE_COLOR;
    }
}

function init(){  //어플리케이션 초기화, style.color를 BASE_COLOR로 정하고 클릭을 기다리는 상태로 만듦
    title.style.color = BASE_COLOR;
    // title.addEventListener("click", handleClick);
    title.addEventListener("mouseenter", handleClick);
}
init();




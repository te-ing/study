const title = document.querySelector("#title");

/*
function handleResize(){
    console.log("크기가 변경되었습니다.")
}

function handleResize(event){ //이벤트가 발생할때마다 함수작동
    console.log(event);
}

window.addEventListener("resize", handleResize)  //resize 이벤트를 기다리게 하는 것. 
//handleResize()로 하지 않음 handleResize는 필요한 시점에 함수를 호출하는 것 handleResize()는 즉시 호출한다는 뜻이다.

*/
function handleClick(){ //타이틀을 클릭할 때 색상이 변경되도록 하는 함수
    title.style.color="red";
}

title.addEventListener("click", handleClick);
const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${"background"+(imgNumber+1)}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER); // 0~4 랜덤정수
    return number;
}

function init(){
    const randomNumber = genRandom(); // 랜덤숫자 생성함수
    paintImage(randomNumber)
}

init();
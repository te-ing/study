const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function filterFn(toDo){ // array의 모든 아이템을 통해 함수를 실행한 뒤, true인 아이템만으로 새로운 array를 만듦
    return toDo.id === 1
}

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        console.log(toDo.id, li.id);
        return toDo.id !== parseInt(li.id); // parseInt: string을 숫자로 변환시켜줌
    });
    toDos = cleanToDos
    saveToDos();

}

function saveToDos(){ // toDos를 로컬에 저장하는 기능
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); 
    // Local Storage에는 자바스크립트의 데이터를 string형태로만 저장할 수 있는데,
    // JSON.stringify는 자바스크립트 object를 string으로 바꿔줌 (사용하지 않으면 [object Object]로 저장됨)
    // JSON: Java Script Object Notation의 준말로, 데이터를 자바스크립트가 다룰 수 있도록 object로 변환시켜주는 것
    //       object를 string으로, string을 object로 변환시켜줄 수 있음
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "X";
    delBtn.addEventListener("click", deleteToDo)
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text, //key:value
        id: newId // toDos.length를 1부터 시작하기 위해서
    };
    toDos.push(toDoObj); //toDos []에 toDoObj를 넣는 것
    saveToDos(); // push한 이후 로컬에 저장
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){ //TODOS_LS를 화면에 출력
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        console.log(loadedToDos)
        const parsedToDos = JSON.parse(loadedToDos); 
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();
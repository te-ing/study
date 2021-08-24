import { setItem } from "./storage.js"
import TodoList from "./TodoList.js"

export default function deleteTodo({ $target, initialState }) {
const $delete = document.querySelectorAll('#delete') // 삭제
$delete.forEach((del)=>{
  del.addEventListener('click', ()=>{
    const temp = [];
    for(let x of $list) temp.push(x.innerText.slice(0,-2))
    temp.splice((Array.from(del.parentNode.parentNode.children).indexOf(del.parentNode)), 1);
    localStorage.clear();
    for (let item of temp) setItem('todos', JSON.stringify([{ "text": item}]))

    console.log(temp);
    console.log(del.parentNode.parentNode);
    console.log(Array.from(del.parentNode.parentNode.children).indexOf(del.parentNode))
    this.render()
})
})
}
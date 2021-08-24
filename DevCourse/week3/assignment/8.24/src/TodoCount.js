export default function TodoCount({ $target, isCompleted }) {
  const $count = document.createElement('h2')
  
  $target.appendChild($count)
  this.render = () => {

    const $list = document.querySelectorAll('li');
    $list.forEach((list)=>{
      list.addEventListener('click', ()=>{
      isCompleted = document.querySelectorAll('.isCompleted').length;
      console.log(isCompleted);
    })})

    $count.textContent = `
    완료한 갯수: ${isCompleted}
    `
  }
  // isCompleted = document.querySelectorAll('.isCompleted').length;

  this.render() 
}

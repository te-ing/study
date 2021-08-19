export default function App() {
  this.render = () => {
    alert('Hello')
  }
  this.render();
}

export const printToday = () => {
  console.log(new Date().toLocaleString());
}
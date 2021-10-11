import { useState } from "react"

const Counter = ({ onIncrease }) => {
  const [count, setCount] = useState(0)

  const handleIncresae = () => {
    setCount(count + 1)
    onIncrease()
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleIncresae}>+</button>
    </div>
  )
}

export default Counter;
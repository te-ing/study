import { useState } from "react"
import ProtoTypes from 'prop-types'

function Counter({ onIncrease, onDecrease }) {
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    setCount(count + 1)
    if (onIncrease) onIncrease(count + 1) // 검증
  }

  const handleDecrease = () => {
    setCount(count - 1)
    if (onDecrease) onDecrease(count - 1)
  }

  return(
    <div>
      { count }
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  )
}

Counter.protoTypes = {
  onDecrease: ProtoTypes.func, // 함수
  onIncrease: ProtoTypes.func 
}

export default Counter
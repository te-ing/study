import { useRef, useState } from "react"

const AutoCounter = () => {
  const [count, setCount] = useState(0)
  const intervalId = useRef() // useRef로 intervarId를 넣어주기 때문에 값이 변하더라도 다시 렌더링하지 않음

  const handleStart = () => {
    intervalId.current = setInterval(()=>{
      setCount((count) => count + 1)
    }, 1000);
  }
  
  const handleStop = () => {
    clearInterval(intervalId.current)
  }

  return(
    <>
      <div>{count}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  )
}

export default AutoCounter;

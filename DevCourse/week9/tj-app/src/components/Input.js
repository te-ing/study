import React from "react"

const Input = React.forwardRef((_, inputRef) => {

  return (
    <>
    <input ref={inputRef} />
    </>
  )
});

export default Input;
import useAsyncFn from "../../hooks/useAsyncFn"

export default {
  title: 'Hook/useAsyncFn'
}

const asyncReturnValue = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Sucecess')
    }, 1000)
  })
}

const asyncReturnError = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject('Error')
    }, 1000)
  })
}

export const Success = () => {
  const [state, callback] = useAsyncFn(async () => {
    return await asyncReturnValue()
  }, [])

  return (
    <div>
      <div>useAsynceFn 테스트</div>
      <div>{JSON.stringify(state)}</div>
      <button onClick={callback}>비동기 호출</button>
    </div>
  )
}

export const Error = () => {
  const [state, callback] = useAsyncFn(async () => {
    return await asyncReturnError()
  }, [])

  return (
    <div>
      <div>useAsynceFn 테스트</div>
      <div>{JSON.stringify(state)}</div>
      <button onClick={callback}>비동기 호출</button>
    </div>
  )
}
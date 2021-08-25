const storage = window.localStorage

export const setItem = (key, value) => {
  try{
    storage.setItem(key, JSON.stringify(value))
    console.log(key,value);
  } catch (e) { // 용량초과로 문제가 생겼을 때
    console.log(e); 
  }
}

export const getItem = (key, defaultValue) => { // 불러오는데 실패할 경우를 대비한 defaultValue
  try{
    const storedValue = storage.getItem(key)

    if(!storedValue) {
      return defaultValue
    }

    const parsedValue = JSON.parse(storedValue)
    return parsedValue
  } catch (e) {
    return defaultValue
  }
}

export const removeItem = (key) => {
  storage.removeItem(key)
}
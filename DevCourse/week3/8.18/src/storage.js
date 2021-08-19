const storage = (function(storage){
  const setItem = (key, value) => {
    try {
      storage.setItem(key, value)
    } catch(e) {
      console.log(e);
    }
  }
  const getItem = (key, defaultValue) => {
    try {
      const storedValue = storage.getItem(key)

      if(storedValue) {
        return JSON.parse(storedValue)
      }
      return defaultValue
    } catch(e) {
      console.log(e);
      return defaultValue
    }
  }
  return {
    setItem,
    getItem
  }
}) (window.localStorage) // 전역 오염을 최소화하기위해 IIFE(즉시실행함수)를 이용해 감싼다.
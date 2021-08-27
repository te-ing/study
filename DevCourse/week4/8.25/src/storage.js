const storage = window.localStorage // storage 타입변환을 쉽게 할 수 있음

export const getItem = (key, defaultValue) => {
  try {
    const storedValue = storage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : defaultValue
  } catch (e) {
    return defaultValue
  } 
}

export const setItem = (key, value) => {
  storage.setItem(key, JSON.stringify(value))
}
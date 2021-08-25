export const API_END_POINT = 'https://kdt-api.roto.codes'

export const request = async (url, options = {}) => { // 옵션이 없으면 빈 객체 사용
  try{
    const res = await fetch(`${API_END_POINT}${url}`, {
      ...options,// header를 text가 아닌 json 형식으로 전달하는 옵션
      headers: { 
        'Content-Type': 'application/json'
      }
    })
    if (res.ok) {
      const json = await res.json()
      return json
    }
    throw new Error('API 호출 오류')
  } catch(e) {
    alert(e.message)
  }
}
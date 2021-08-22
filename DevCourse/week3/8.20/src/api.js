const API_END_POINT = 'https://kdt.roto.codes' // 도메인을 상수로 설정

export const request = (url) => {
  return fetch(`${API_END_POINT}${url.indexOf('/'===0) ? url : `/${url}`}`)
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw new Error(`${res.status} Error`)
    })
    .catch(e => alert(e.message))
} 
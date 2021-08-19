export function request (url, successCallbaack, failCallback) {
  const xhr = new XMLHttpRequest()
  xhr.addEventListener("load", (e) => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        successCallbaack(JSON.parse(xhr.responseText))
      } else {
        failCallback(xhr.statusText)
      }
    }
  })
  xhr.addEventListener('error', (e) => failCallback(xhr.status))

  xhr.open('GET', url)
  xhr.send()
}
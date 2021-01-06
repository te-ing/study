import requests
url = "http://nadocoding.tistory.com"
headers = {"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Whale/2.8.108.15 Safari/537.36"}
res = requests.get(url, headers=headers)
res.raise_for_status() 


with open("nadocoding.html", "w", encoding="utf8") as f:
    f.write(res.text) # 파일로 만드는 것
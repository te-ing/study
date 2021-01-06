# 동적페이지에 대한 웹스크래핑 : 사용자가 특정 행위를 하였을때 동작하는 프로그램
import requests
from bs4 import BeautifulSoup

url = "https://play.google.com/store/movies/top"
headers = {"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Whale/2.8.108.15 Safari/537.36"\
    ,"Accept-Language":"ko-KR,ko"}
# 구글무비의 경우 사용자의 국적에 따라 다른 홈페이지를 출력
# "Accept-Language":"ko-KR,ko" 한글 전용 페이지가 있으면 한글 페이지를 출력해라


res = requests.get(url, headers=headers)
res.raise_for_status()
soup = BeautifulSoup(res.text, "lxml")

movies = soup.find_all("div", attrs={"class":"ImZGtf mpg5gc"})
print(len(movies))

# with open("movie.html", "w", encoding="utf-8-sig") as f:
#     # f.write(res.text)
#     f.write(soup.prettify()) # html 문서를 보기좋게 출력

for movie in movies:
    title = movie.find("div", attrs={"class":"WsMG1c nnK0zc"}).get_text()
    print(title)

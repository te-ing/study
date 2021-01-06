# 이미지 크롤링
import requests 
import re
from bs4 import BeautifulSoup

res = requests.get("https://search.daum.net/search?w=tot&q=2019%EB%85%84%EC%98%81%ED%99%94%EC%88%9C%EC%9C%84&DA=MOR&rtmaxcoll=MOR")
res.raise_for_status()

soup = BeautifulSoup(res.text, "lxml")

images = soup.find_all("img", attrs={"class":"thumb_img"})
names = soup.find_all("div", attrs={"class":"info_tit"})



movie_chart = []
movie_url = []

for name in names:
    nam = name.find("a", attrs={"class":"tit_main"}).get_text() # 영화이름

    movie_chart.append(nam)
       

a= 0
for image in images:
    # print(image["src"])
    image_url = image["src"]
    if image_url.startswith("//"):  # // 로 시작하는 url만 가져오기
        image_url = "http:" + image_url
        # print(image_url)
        movie_url.append(image_url)

while True:
        # print("{0} + {1 + 2}".format(a))
    print("{0}위: ".format(a+1) +movie_chart[a])
    print("이미지 바로가기: " + image_url[a])
    a += 1
    if a == 30:
        break


# print(movie_url)




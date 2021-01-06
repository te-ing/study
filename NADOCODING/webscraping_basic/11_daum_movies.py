# 이미지 크롤링
import requests 
import re
from bs4 import BeautifulSoup



for year in range (2015, 2020):
    url = "https://search.daum.net/search?w=tot&q={}%EB%85%84%EC%98%81%ED%99%94%EC%88%9C%EC%9C%84&DA=MOR&rtmaxcoll=MOR".format(year)
    res = requests.get(url)
    res.raise_for_status()
    soup = BeautifulSoup(res.text, "lxml")
    images = soup.find_all("img", attrs={"class":"thumb_img"})


    for idx, image in enumerate(images): #idx 숫자만큼 enumerate 숫자가 돌아감
        # print(image["src"])
        image_url = image["src"]
        if image_url.startswith("//"):  # // 로 시작하는 url만 가져오기
            image_url = "http:" + image_url

        print(image_url) 
        
        # 페이지에 있는 파일을 저장하기 위한 재접속
        image_res = requests.get(image_url)
        image_res.raise_for_status()

        with open("movie_{}_{}.jpg".format(year, idx+1), "wb") as f:
            f.write(image_res.content)
        
        if idx >=4:
            break





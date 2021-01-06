# 동적페이지에 대한 웹스크래핑 : 사용자가 특정 행위를 하였을때 동작하는 프로그램

from selenium import webdriver
import requests
from bs4 import BeautifulSoup

browser=webdriver.Chrome("C:\Program Files\PythonWorkspace\chromedriver.exe")
browser.maximize_window()

url = "https://play.google.com/store/movies/top"
browser.get(url)

# 자바스크립트 사용: 스크롤 내리기
# browser.execute_script("window.scrollTo(0,1080)") # 0 x 1080 위치로 스크롤 내리기
# browser.execute_script("window.scrollTo(0, document.body.scrollHeight)")
#문서 높이만큼 스크롤 내리기

import time
interval = 2 # 2초에 한 번 스크롤 내리기

prev_height = browser.execute_script("return document.body.scrollHeight")
# document.body.scrollHeight 정보를 가져와서(리턴) prev_height로 저장

while True:
    browser.execute_script("window.scrollTo(0, document.body.scrollHeight)")
    time.sleep(interval)

    curr_height = browser.execute_script("return document.body.scrollHeight")
    if curr_height == prev_height:
        break
    
    prev_height = curr_height

print("스크롤 완료")



soup = BeautifulSoup(browser.page_source, "lxml")

# movies = soup.find_all("div", attrs={"class":["ImZGtf mpg5gc", "Vpfmgd"]})
  # 클래스가 다른 경우, 리스트 형식으로 감싸면 여러 개의 클래스 값을 가져올 수 있다.
movies = soup.find_all("div", attrs={"class":["ImZGtf mpg5gc", "Vpfmgd"]})
# print(len(movies))

for movie in movies:
    title = movie.find("div", attrs={"class":"WsMG1c nnK0zc"}).get_text()
    # print(title)

    original_price = movie.find("span", attrs={"class":"SUZt4c djCuy"})
    if original_price:
        original_price = original_price.get_text()
    else:
        # print(title, " <할인되지 않은 영화 제외> ")
        continue

    price = movie.find("span", attrs={"class":"VfPpfd ZdBevf i5DZme"}).get_text()

    link = movie.find("a", attrs={"class":"JC71ub"})["href"]

    print(f"제목 : {title}")
    print(f"할인 전 금액 : {original_price}")
    print(f"할인 후 금액 : {price}")
    print("링크 : ", "https://play.google.com" + link)
    print("-" * 50)

browser.quit()



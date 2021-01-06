import requests
from bs4 import BeautifulSoup

url="https://comic.naver.com/webtoon/list.nhn?titleId=675554"
res = requests.get(url)
res.raise_for_status()

soup = BeautifulSoup(res.text, "lxml") 
# cartoons = soup.find_all("td", attrs={"class":"title"})

# title = cartoons[0].a.get_text()
# link = cartoons[0].a["href"] # href 라는 속성
# print("https://comic.naver.com" + link)

# for cartoon in cartoons:
#     title = cartoon.a.get_text()
#     link = "https://comic.naver.com" + cartoon.a["href"]
#     print(title, link)

#평점 구하기
total_rates  = 0
cartoons = soup.find_all("div", attrs={"class":"rating_type"})
for cartoon in cartoons:
    rate = cartoon.find("strong").get_text()
    print(rate)
    total_rates += float(rate) #문자열인 rate를 실수형인 float으로 변환
print("전체 점수 : ", total_rates)
print("평균 점수 : ", total_rates / len(cartoons))

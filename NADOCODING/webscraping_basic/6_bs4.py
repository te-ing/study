import requests
from bs4 import BeautifulSoup
url="https://comic.naver.com/webtoon/weekday.nhn"
res = requests.get(url)
res.raise_for_status()

soup = BeautifulSoup(res.text, "lxml") #res.text 문서를 lxml을 통해서 객체로 만든 것
# print(soup.title)
# print(soup.title.get_text())
# print(soup.a) # soup 객체에서 처음 발견되는 a의 정보 출력
# print(soup.a.attrs) # attrs: a element의 속성정보 출력
# print(soup.a["href"]) # a element의 href 속성 '값' 정보를 출력
"""
print(soup.)
<li class="-V_eO"><span>111</span><span class="_1P1TY coreSpriteHeartSmall"></span></li>

likes = soup.find_all("li", attrs={"class":"-V_eO"})


cartoons = soup.find_all("a", attrs={"class":"title"}) #find_all 조건에 해당하는 모든 값을 찾음
# class 속성이 title인 모든 "a" element를 반환
for cartoon in cartoons:
    print(cartoon.get_text())
    
soup = BeautifulSoup(res.text, "lxml") #res.text 문서를 lxml을 통해서 객체로 만든 것
# print(soup.title)
# print(soup.title.get_text())
# print(soup.a) # soup 객체에서 처음 발견되는 a의 정보 출력
# print(soup.a.attrs) # attrs: a element의 속성정보 출력
# print(soup.a["href"]) # a element의 href 속성 '값' 정보를 출력

print(soup.)
<li class="-V_eO"><span>111</span><span class="_1P1TY coreSpriteHeartSmall"></span></li>

cartoons = soup.find_all("a", attrs={"class":"title"}) #find_all 조건에 해당하는 모든 값을 찾음
# class 속성이 title인 모든 "a" element를 반환
for cartoon in cartoons:
    print(cartoon.get_text())

# print(soup.find(attrs={"class" : "Nbtn_upload"})) class="Nbtn_upload"인 element 찾기
# print(soup.find("a", attrs={"class" : "Nbtn_upload"})) # soup 객체 내의 있는 class 속성이 Nbtn_upload인 a 찾기
    
"""

# print(soup.find(attrs={"class" : "Nbtn_upload"})) class="Nbtn_upload"인 element 찾기
# print(soup.find("a", attrs={"class" : "Nbtn_upload"})) # soup 객체 내의 있는 class 속성이 Nbtn_upload인 a 찾기

# print(soup.find("li", attrs={"class":"rank01"}))
rank1 = soup.find("li", attrs={"class":"rank01"})
# print(rank1.a) #rank1에서 발견되는 첫 번째 a의 정보를 출력
# print(rank1.a.get_text())
# print(rank1.next_sibling) # 다음 시블링 (다음 칸)
# print(rank1.a(next_sibling.next_sibling) # 다음 시블링의 또 다음 시블링
rank2 = rank1.next_sibling.next_sibling
# print(rank2.a.get_text())
# print(rank2.previous_sibling.previous_sibling) #previous 앞 시블링
# print(rank1.parent) #부모로 가는 태그 이동
# rank1.find_next_sibling("li") # 조건("li")에 해당하는 시블링만 찾아서 이동
# print(rank1.a.get_text())

# bro = rank1.find_next_siblings("li") # slbling's' 모든 형제들 가져옴
# print(bro)

webtoon = soup.find("a", text="참교육-9화")
print(webtoon)

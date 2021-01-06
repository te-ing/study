from bs4 import BeautifulSoup
import requests

url = 'https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=%EC%86%A1%ED%8C%8C+%ED%97%AC%EB%A6%AC%EC%98%A4%EC%8B%9C%ED%8B%B0'
res = requests.get(url)
res.raise_for_status()
soup = BeautifulSoup(res.text, "lxml")


apts = soup.find("table", attrs={"class":"tbl"}).find("tbody").find_all("tr")
a=0
for index, apt in enumerate(apts):    
    item = apt.find_all("td")
    # a += 1
    print("======= 매물 {}========".format(index+1))
    print("거래 :", item[0].get_text())
    print("면적 :", item[1].get_text(), "(공급/전용)")
    print("가격 :", item[2].get_text(), "(만원)")
    print("동 :", item[3].get_text())
    print("층 :", item[4].get_text())

# .find("div", attrs={"class":txt_ac})

# for apt in apts:
# print(apts)
# print(apt)



"""
    items = soup.find_all("div", attrs={"class":"txt_ac"})
    # print(items[0].find("div", attrs={"class":"name"}).get_text())
    for item in items:

        # 광고 제품은 제외
        ad_badge = item.find("span", attrs={"class":"ad-badge-text"})
        if ad_badge:
            # print(" <광고 상품은 제외합니다.>")
            continue

"""
# for apt in apts:
#     title = movie.find("div", attrs={"class":"WsMG1c nnK0zc"}).get_text()


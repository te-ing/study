# HTTP METHOD : 크게 GET, POST 방식이 있는데, GET은 URL을 누구나 볼 수 있도록 공개
# GET의 경우 많은 정보를 담지 못함
# POST는 URL이 아닌 HTTP 메시지 BODY에 숨겨서 보내는 방식, 크기제한없음

import requests
import re
from bs4 import BeautifulSoup
for i in range(1, 6):
    print("현재 페이지 :", i)
    url = "https://www.coupang.com/np/search?q=%EB%85%B8%ED%8A%B8%EB%B6%81&channel=user&component=&eventCategory=SRP&trcid=&traid=&sorter=scoreDesc&minPrice=&maxPrice=&priceRange=&filterType=&listSize=36&filter=&isPriceRange=false&brand=&offerCondition=&rating=0&page={}&rocketAll=false&searchIndexingToken=&backgroundColor=".format(i)
    headers = {"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Whale/2.8.108.15 Safari/537.36"}
    res = requests.get(url, headers=headers)
    res.raise_for_status()
    soup = BeautifulSoup(res.text, "lxml")


    items = soup.find_all("li", attrs={"class": re.compile("^search-product")})
    # print(items[0].find("div", attrs={"class":"name"}).get_text())
    for item in items:

        # 광고 제품은 제외
        ad_badge = item.find("span", attrs={"class":"ad-badge-text"})
        if ad_badge:
            # print(" <광고 상품은 제외합니다.>")
            continue

        name = item.find("div", attrs={"class":"name"}).get_text() # 제품명
        # 애플 상품 제외
        if "Apple" in name:
            # print(" < 애플 상품은 제외합니다.>")
            continue

        price = item.find("strong", attrs={"class":"price-value"}).get_text() # 가격
        point = item.find("em", attrs={"class":"rating"})# 평점
        if point:
            point = point.get_text()
        else:
            point = "평점 없음" # 평점이 없을 경우 출력
            # print(" < 평점 없는 상품은 제외합니다.>")
            continue
        
        # 리뷰 100개 이상, 평점 4.5 이상 되는 것만 조회    
        review = item.find("span", attrs={"class":"rating-total-count"}) #리뷰 수
        if review:
            review = review.get_text()
            review=review[1:-1]
        else:
            review = "리뷰 없음" # 평점이 없을 경우 출력
            # print(" < 리뷰 없는 상품은 제외합니다.>")
            continue

        if float(point) >= 4.5 and int(review) >= 20:
            print(name, price, point, review)




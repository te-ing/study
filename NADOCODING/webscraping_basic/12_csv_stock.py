import csv
import requests
from bs4 import BeautifulSoup

url = "https://finance.naver.com/sise/sise_market_sum.nhn?&page="

filename = "시가총액 1-200.csv"
f = open(filename, "w", encoding="utf-8-sig", newline="") 
#newline은 불필요한 줄바꿈 삭제(공백화) #엑셀파일에서 한글이 깨질 때 utf-8-sig 사용
writer = csv.writer(f)

title = "N	종목명	현재가	전일비	등락률	액면가	시가총액	상장주식수	외국인비율	거래량	PER	ROE".split("\t")
# .split("\t") : 탭으로 구분한 데이터가 리스트로 들어감 ["N", "종목명" ...]
writer.writerow(title)

for page in range(1, 2):
    res = requests.get(url + str(page))
    res.raise_for_status()
    soup = BeautifulSoup(res.text, "lxml")

    data_rows = soup.find("table", attrs={"class":"type_2"}).find("tbody").find_all("tr")
    for row in data_rows:
        columns = row.find_all("td")
        if len(columns) <= 1: #의미없는 데이터 skip
            continue
        data = [column.get_text().strip() for column in columns] #.strip() 불필요한 함수 제거
        # print(data)
        writer.writerow(data) # 파일 쓰는 함수

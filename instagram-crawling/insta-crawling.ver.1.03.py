from selenium import webdriver
from bs4 import BeautifulSoup
import requests
from selenium.webdriver.common.by import By
import time
import csv

insta_name = 'parkjitjang' #크롤링할 계정 이름
post = 5 # 크롤링할 포스팅 수
YOUR_ID = 'ttaejung' # 로그인 계정 아이디
YOUR_PW = '' # 로그인 계정 비밀번호
user_agent = '' # user agent값 https://www.whatismybrowser.com/detect/what-is-my-user-agent

options = webdriver.ChromeOptions()
options.add_argument('window-size=1080,800')
browser=webdriver.Chrome("C:\Program Files\Workspace\study\chromedriver.exe", options=options)
headers = {'User-Agent':user_agent}
url = 'https://www.instagram.com/' + insta_name
res = requests.get(url, headers=headers)
res.raise_for_status()
soup = BeautifulSoup(res.text, "lxml")
browser.get(url)

# 엑셀 파일
filename = "{0}.csv".format(insta_name)
f = open(filename, "w", encoding="utf-8-sig", newline="") 
writer = csv.writer(f)
title = "날짜	좋아요(조회수)	본문	비고".split("\t")
writer.writerow(title)

# 로그인
browser.implicitly_wait(3)
try:
    browser.find_element_by_xpath('//*[@id="react-root"]/section/nav/div[2]/div/div/div[3]/div/span/a[1]/button').click()
except:
    browser.implicitly_wait(3)    
browser.implicitly_wait(3)
browser.find_element_by_xpath('//*[@id="loginForm"]/div/div[1]/div/label/input').send_keys(YOUR_ID)
browser.find_element_by_xpath('//*[@id="loginForm"]/div/div[2]/div/label/input').send_keys(YOUR_PW)
browser.find_element_by_xpath('//*[@id="loginForm"]/div/div[3]/button/div').click()
browser.implicitly_wait(3)
browser.find_element_by_xpath('//*[@id="react-root"]/section/main/div/div/div/div/button').click()
browser.implicitly_wait(3)
browser.get(url)
browser.implicitly_wait(3)
browser.find_element_by_css_selector('div._9AhH0').click()
browser.implicitly_wait(3)

#크롤링
crawling_late = 0
for i in range(post):    
    insta_crawling = []
    crawling_late += 1
    print("{0}번째 포스팅을 가져오고 있습니다...".format(crawling_late))    
    time.sleep(1.5) #컴퓨터 사양에 따라 변동필요
    html = browser.page_source
    browser.implicitly_wait(3)
    soup = BeautifulSoup(html, "lxml")
    browser.implicitly_wait(3)
    post_date = soup.select('time._1o9PC.Nzb55')[0]['datetime'][:10]
    try:
        post_like = soup.select('a.zV_Nj > span')[0].text
    except:
        post_like = "영상 조회수" + soup.select('span.vcOH2 > span')[0].text
    post_text = soup.select('div.C4VMK > span')[0].text

    insta_crawling.append(post_date)
    insta_crawling.append(post_like)
    insta_crawling.append(post_text)
    writer.writerow(insta_crawling) 
    
    try:
        right = browser.find_element_by_css_selector('a._65Bje.coreSpriteRightPaginationArrow')     
    except:
        break
    right.click()

print("{0}개의 포스팅 정보를 가져왔습니다.".format(crawling_late))
browser.quit()

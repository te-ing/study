from selenium import webdriver
import requests
import time

browser=webdriver.Chrome("C:\Program Files\PythonWorkspace\chromedriver.exe")
headers = {"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Whale/2.8.108.15 Safari/537.36"}
url = "https://www.wavve.com/member/login?referer=%2F"
res = requests.get(url, headers=headers)
res.raise_for_status()

browser.get(url)

time.sleep(1)

# 자동저장 텍스트 삭제
browser.find_element_by_xpath("//*[@id='app']/div[1]/div[3]/div/div[1]/form/ul[1]/li[1]/input").clear() # 지우기
browser.find_element_by_xpath("//*[@id='app']/div[1]/div[3]/div/div[1]/form/ul[1]/li[2]/input").clear() # 지우기

# 로그인 정보 입력
browser.find_element_by_xpath("//*[@id='app']/div[1]/div[3]/div/div[1]/form/ul[1]/li[1]/input").send_keys("ekrkxdl444")
browser.find_element_by_xpath("//*[@id='app']/div[1]/div[3]/div/div[1]/form/ul[1]/li[2]/input").send_keys("fpdlsqhdn444!")

browser.find_element_by_xpath("//*[@id='app']/div[1]/div[3]/div/div[1]/form/div/a").click()

time.sleep(1)

# 계정 클릭
browser.find_element_by_xpath("//*[@id='app']/div[1]/div/div[2]/div/div[3]/a[1]/div").click()

time.sleep(1)
# Live 클릭
browser.find_element_by_xpath("//*[@id='app']/div[1]/div[2]/div/div[2]/div/ul[1]/li[3]/a").click()

input()


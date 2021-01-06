#로딩을 포함한 웹 스크래핑

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC




browser=webdriver.Chrome("C:\Program Files\PythonWorkspace\chromedriver.exe")
browser.maximize_window() # 창 최대화

url = "https://flight.naver.com/flights/"
browser.get(url)

browser.find_element_by_link_text("가는날 선택").click() #가는날 선택 텍스트로 찾기

browser.find_elements_by_link_text("24")[1].click() # []는 몇 번째 있는 element 선택
browser.find_elements_by_link_text("28")[1].click()

browser.find_element_by_xpath("//*[@id='recommendationList']/ul/li[1]").click()

browser.find_element_by_link_text("항공권 검색").click()

try: # 성공했을 때 동작 수행
    elem = WebDriverWait(browser, 10).until(EC.presence_of_element_located\
        ((By.XPATH, "//*[@id='content']/div[2]/div/div[4]/ul/li[1]")))
    print(elem.text) # 결과 출력
        # 최대 10초까지 XPATH 조건으로 "" 엘리먼트가 위치할때까지 기다려라.
        # XPATH외에도 ID, CLASS_NAME, LINK_TEXT 등 사용가능

finally: # 실패하거나 끝나면서 브라우저 닫기
    browser.quit()

# elem = browser.find_element_by_xpath("//*[@id='content']/div[2]/div/div[4]/ul/li[1]")
# print(elem.text)

# input()
from selenium import webdriver
import time

browser=webdriver.Chrome("C:\Program Files\PythonWorkspace\chromedriver.exe")
browser.get("https://naver.com")

elem = browser.find_element_by_class_name("link_login")
elem.click()

browser.find_element_by_id("id").send_keys("id2177")
browser.find_element_by_id("pw").send_keys("password")

browser.find_element_by_id("log.login").click()

time.sleep(3)
browser.find_element_by_id("id").clear() # 지우기
browser.find_element_by_id("id").send_keys("id2177")
browser.find_element_by_id("pw").send_keys("password")

print(browser.page_source) # 현재 페이지의 모든 html 정보 출력
# 이 html 정보를 통해 편하게 웹스크래핑 가능

browser.quit()


input()
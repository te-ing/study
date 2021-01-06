from selenium import webdriver

browser=webdriver.Chrome("C:\Program Files\PythonWorkspace\chromedriver.exe")
#("실행파일 위치") 같은 폴더면 안넣어도 됨
browser.get("https://naver.com")
elem = browser.find_element_by_class_name("link_login")
elem.click() # elem 변수를 클릭
browser.refresh() # 새로고침
browser.back() # 뒤로가기 
elem = browser.find_element_by_id("query") # 검색어창
from selenium.webdriver.common.keys import Keys # 키보드 사용
elem.send_keys("나도코딩")
elem.send_keys(Keys.ENTER) #엔터키로 검색
# elem = browser.find_element_by_tag_name("a") # a로 시작하는 엘리먼트 객체 가져오기
elem = browser.find_elements_by_tag_name("a") # a로 시작하는 엘리먼트 객체 모두 가져오기
for e in elem:
    e.get_attribute("href") 
    # element가 가진 attribute 값을 가져옴 beautiful soup4와 다름
    continue

# 다음 검색
browser.get("https://daum.net")
elem = browser.find_element_by_name("q")
elem.send_keys("나도코딩")
elem.send_keys(Keys.ENTER)
browser.back()
elem = browser.find_element_by_name("q") # 페이지 전환이 되었기 때문에 다시 element 세팅
elem.send_keys("나도코딩")
elem = browser.find_element_by_xpath("//*[@id='daumSearch']/fieldset/div/div/button[2]")
# 크롬 개발자모드에서 우클릭 - copy - copy xpath 로 xpath값 가져오기
# xpath값 안에 ""가 들어있을 경우 기존""와 겹치므로 ''로 바꿔주기
elem.click()

# browser.close() 브라우저 창 하나 닫음
# browser.quit() 브라우저 종료
# exit() 터미널에서 파이썬 종료

input()
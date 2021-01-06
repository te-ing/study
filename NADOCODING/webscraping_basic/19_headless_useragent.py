# 헤드리스 크롬을 사용할 경우 User Agent가 헤드리스크롬으로 되기 때문에
# 헤드리스 크롬을 차단하는 웹페이지를 이용하기 위해서는 
# options.add_argument("user-agent=유저 에이전트값") 유저 에이전트 값을 넣어줘야함

from selenium import webdriver

options = webdriver.ChromeOptions() # 헤드리스 크롬
options.headless = True # options.add_argument("headless")
options.add_argument("window-size=1080x1920")

options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Whale/2.8.108.15 Safari/537.36")
# options.add_argument("user-agent=유저 에이전트값") 유저 에이전트 값을 넣어줘야함



browser=webdriver.Chrome("C:\Program Files\PythonWorkspace\chromedriver.exe", chrome_options=options)
# browser.maximize_window()

url = "https://www.whatismybrowser.com/detect/what-is-my-user-agent"
browser.get(url)

detected_value = browser.find_element_by_id("detected_value")
print(detected_value.text)
browser.quit()
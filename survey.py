from selenium import webdriver
from bs4 import BeautifulSoup
import requests
from selenium.webdriver.common.by import By
import time
import csv
import random

user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Whale/2.9.116.15 Safari/537.36'

options = webdriver.ChromeOptions()
options.add_argument('window-size=1250,1000')
options.add_argument('window-position=800,0')
browser=webdriver.Chrome("chromedriver.exe", options=options)
headers = {'User-Agent':user_agent}
url = 'https://qfreeaccountssjc1.az1.qualtrics.com/jfe/form/SV_7UJD9G4xiXfu01E'
res = requests.get(url, headers=headers)
res.raise_for_status()
soup = BeautifulSoup(res.text, "lxml")
browser.get(url)
input()

# 시작 페이지
browser.implicitly_wait(5)
browser.find_element_by_xpath('//*[@id="NextButton"]').click()


# 1번 자아질문 문항
# 1. 나의 정체성은 나에게 중요하다. 강력동의안함 ~ 강력동의
randNum = random.randint(1, 100)
if 0<randNum<=20:
  select = '1'
elif 20<randNum<=40:
  select = '2'
elif 20<randNum<=60:
  select = '3'
elif 20<randNum<=80:
  select = '4'
elif 20<randNum<=85:
  select = '5'
elif 20<randNum<=90:
  select = '6'
elif 20<randNum<=100:
  select = '7'
  
time.sleep(0.2)

browser.find_element_by_xpath('//*[@id="QID4"]/div[3]/div/fieldset/div/table/tbody/tr[1]/td['+select+']').click()

# 2. 나는 남보다 나에게 의지 강력동의안함 ~ 강력동의
randNum = random.randint(1, 100)
if 0<randNum<=20:
  select = '1'
elif 20<randNum<=40:
  select = '2'
elif 20<randNum<=60:
  select = '3'
elif 20<randNum<=80:
  select = '4'
elif 20<randNum<=85:
  select = '5'
elif 20<randNum<=90:
  select = '6'
elif 20<randNum<=100:
  select = '7'
  
time.sleep(0.2)

browser.find_element_by_xpath('//*[@id="QID4"]/div[3]/div/fieldset/div/table/tbody/tr[2]/td['+select+']').click()

# 2. 나는 그룹을 위해 나의 희생가능 강력동의안함 ~ 강력동의
randNum = random.randint(1, 100)
if 0<randNum<=20:
  select = '1'
elif 20<randNum<=40:
  select = '2'
elif 20<randNum<=60:
  select = '3'
elif 20<randNum<=80:
  select = '4'
elif 20<randNum<=85:
  select = '5'
elif 20<randNum<=90:
  select = '6'
elif 20<randNum<=100:
  select = '7'
  
time.sleep(0.2)

browser.find_element_by_xpath('//*[@id="QID4"]/div[3]/div/fieldset/div/table/tbody/tr[3]/td['+select+']').click()

input()

# 다음 문항
browser.implicitly_wait(5)
browser.find_element_by_xpath('//*[@id="NextButton"]').click()
time.sleep(1)

# 2번 문항 
# 한맥은 내게 상당히 익숙하지 않은 ~ 상당히 익숙한
randNum = random.randint(1, 100)
if 0<randNum<=20:
  select = '1'
elif 20<randNum<=40:
  select = '2'
elif 20<randNum<=60:
  select = '3'
elif 20<randNum<=80:
  select = '4'
elif 20<randNum<=85:
  select = '5'
elif 20<randNum<=90:
  select = '6'
elif 20<randNum<=100:
  select = '7'
  
time.sleep(0.2)

browser.find_element_by_xpath('//*[@id="QID5"]/div[3]/div/fieldset/div/table/tbody/tr/td['+select+']').click()
input()

# 다음 문항
browser.implicitly_wait(5)
browser.find_element_by_xpath('//*[@id="NextButton"]').click()
time.sleep(1)

# 3번 문항 
# 나는 한맥에 대해서 잘 알지 못한다 ~ 잘 안다
randNum = random.randint(1, 100)
if 0<randNum<=20:
  select = '1'
elif 20<randNum<=40:
  select = '2'
elif 20<randNum<=60:
  select = '3'
elif 20<randNum<=80:
  select = '4'
elif 20<randNum<=85:
  select = '5'
elif 20<randNum<=90:
  select = '6'
elif 20<randNum<=100:
  select = '7'
  
time.sleep(0.2)

browser.find_element_by_xpath('//*[@id="QID6"]/div[3]/div/fieldset/div/table/tbody/tr[1]/td['+select+']').click()

# 3번 문항 
# 나는 한맥에 대해서 경험이 많다 ~ 없다
randNum = random.randint(1, 100)
if 0<randNum<=20:
  select = '1'
elif 20<randNum<=40:
  select = '2'
elif 20<randNum<=60:
  select = '3'
elif 20<randNum<=80:
  select = '4'
elif 20<randNum<=85:
  select = '5'
elif 20<randNum<=90:
  select = '6'
elif 20<randNum<=100:
  select = '7'
  
time.sleep(0.2)

browser.find_element_by_xpath('//*[@id="QID6"]/div[3]/div/fieldset/div/table/tbody/tr[2]/td['+select+']').click()

# 3번 문항 
# 나는 한맥에 대해서 정보가 많다 ~ 정보가 없다
randNum = random.randint(1, 100)
if 0<randNum<=20:
  select = '1'
elif 20<randNum<=40:
  select = '2'
elif 20<randNum<=60:
  select = '3'
elif 20<randNum<=80:
  select = '4'
elif 20<randNum<=85:
  select = '5'
elif 20<randNum<=90:
  select = '6'
elif 20<randNum<=100:
  select = '7'
  
time.sleep(0.2)

browser.find_element_by_xpath('//*[@id="QID6"]/div[3]/div/fieldset/div/table/tbody/tr[3]/td['+select+']').click()


# 3번 문항 
# 나는 한맥에 대해서 초보 구매자다 ~ 전문적인 구매자다
randNum = random.randint(1, 100)
if 0<randNum<=20:
  select = '1'
elif 20<randNum<=40:
  select = '2'
elif 20<randNum<=60:
  select = '3'
elif 20<randNum<=80:
  select = '4'
elif 20<randNum<=85:
  select = '5'
elif 20<randNum<=90:
  select = '6'
elif 20<randNum<=100:
  select = '7'
  
time.sleep(0.2)

browser.find_element_by_xpath('//*[@id="QID6"]/div[3]/div/fieldset/div/table/tbody/tr[4]/td['+select+']').click()
input()

# 다음 문항
browser.implicitly_wait(5)
browser.find_element_by_xpath('//*[@id="NextButton"]').click()
time.sleep(1)


# 4번 문항 
# 나에게 있어 맥주는 중요하다 ~ 중요하지 않다
randNum = random.randint(1, 100)
if 0<randNum<=20:
  select = '1'
elif 20<randNum<=40:
  select = '2'
elif 20<randNum<=60:
  select = '3'
elif 20<randNum<=80:
  select = '4'
elif 20<randNum<=85:
  select = '5'
elif 20<randNum<=90:
  select = '6'
elif 20<randNum<=100:
  select = '7'
  
time.sleep(0.2)

browser.find_element_by_xpath('//*[@id="QID7"]/div[3]/div/fieldset/div/table/tbody/tr[1]/td['+select+']').click()
# 4번 문항 
# 나에게 있어 맥주는 나와는 관계가 없다 ~ 있다
randNum = random.randint(1, 100)
if 0<randNum<=20:
  select = '1'
elif 20<randNum<=40:
  select = '2'
elif 20<randNum<=60:
  select = '3'
elif 20<randNum<=80:
  select = '4'
elif 20<randNum<=85:
  select = '5'
elif 20<randNum<=90:
  select = '6'
elif 20<randNum<=100:
  select = '7'
  
time.sleep(0.2)

browser.find_element_by_xpath('//*[@id="QID7"]/div[3]/div/fieldset/div/table/tbody/tr[2]/td['+select+']').click()

# 4번 문항 
# 나에게 있어 맥주는 의마가 없다 ~ 의미가 있다
randNum = random.randint(1, 100)
if 0<randNum<=20:
  select = '1'
elif 20<randNum<=40:
  select = '2'
elif 20<randNum<=60:
  select = '3'
elif 20<randNum<=80:
  select = '4'
elif 20<randNum<=85:
  select = '5'
elif 20<randNum<=90:
  select = '6'
elif 20<randNum<=100:
  select = '7'
  
time.sleep(0.2)

browser.find_element_by_xpath('//*[@id="QID7"]/div[3]/div/fieldset/div/table/tbody/tr[3]/td['+select+']').click()

# 4번 문항 
# 나에게 있어 맥주는 필요하다 ~ 필요하지 않다
randNum = random.randint(1, 100)
if 0<randNum<=20:
  select = '1'
elif 20<randNum<=40:
  select = '2'
elif 20<randNum<=60:
  select = '3'
elif 20<randNum<=80:
  select = '4'
elif 20<randNum<=85:
  select = '5'
elif 20<randNum<=90:
  select = '6'
elif 20<randNum<=100:
  select = '7'
  
time.sleep(0.2)

browser.find_element_by_xpath('//*[@id="QID7"]/div[3]/div/fieldset/div/table/tbody/tr[4]/td['+select+']').click()

input()

# 다음 문항
browser.implicitly_wait(5)
browser.find_element_by_xpath('//*[@id="NextButton"]').click()
time.sleep(1)
input()

# 다음 문항
browser.implicitly_wait(5)
browser.find_element_by_xpath('//*[@id="NextButton"]').click()
time.sleep(1)



# 5번 문항 
# 나는 내가 본 인쇄광고를 매우 안좋다 ~ 매우 좋다
randNum = random.randint(1, 100)
if 0<randNum<=20:
  select = '1'
elif 20<randNum<=40:
  select = '2'
elif 20<randNum<=60:
  select = '3'
elif 20<randNum<=80:
  select = '4'
elif 20<randNum<=85:
  select = '5'
elif 20<randNum<=90:
  select = '6'
elif 20<randNum<=100:
  select = '7'
  
time.sleep(0.2)
browser.find_element_by_xpath('//*[@id="QID9"]/div[3]/div/fieldset/div/table/tbody/tr[1]/td['+select+']').click()

# 5번 문항 
# 나는 내가 본 인쇄광고를 매우 비호감 ~ 호감
randNum = random.randint(1, 100)
if 0<randNum<=20:
  select = '1'
elif 20<randNum<=40:
  select = '2'
elif 20<randNum<=60:
  select = '3'
elif 20<randNum<=80:
  select = '4'
elif 20<randNum<=85:
  select = '5'
elif 20<randNum<=90:
  select = '6'
elif 20<randNum<=100:
  select = '7'
  
time.sleep(0.2)
browser.find_element_by_xpath('//*[@id="QID9"]/div[3]/div/fieldset/div/table/tbody/tr[2]/td['+select+']').click()

# 5번 문항 
# 나는 내가 본 인쇄광고를 매우 좋아한다 ~ 매우 좋아하지 않는다
randNum = random.randint(1, 100)
if 0<randNum<=20:
  select = '1'
elif 20<randNum<=40:
  select = '2'
elif 20<randNum<=60:
  select = '3'
elif 20<randNum<=80:
  select = '4'
elif 20<randNum<=85:
  select = '5'
elif 20<randNum<=90:
  select = '6'
elif 20<randNum<=100:
  select = '7'
  
time.sleep(0.2)
browser.find_element_by_xpath('//*[@id="QID9"]/div[3]/div/fieldset/div/table/tbody/tr[3]/td['+select+']').click()

input()

# 다음 문항
browser.implicitly_wait(5)
browser.find_element_by_xpath('//*[@id="NextButton"]').click()
time.sleep(1)

# 6번 문항 
# 나는 한맥을 매력적이라고 ~ 매력적이지 않다고 생각한다.
randNum = random.randint(1, 100)
if 0<randNum<=20:
  select = '1'
elif 20<randNum<=40:
  select = '2'
elif 20<randNum<=60:
  select = '3'
elif 20<randNum<=80:
  select = '4'
elif 20<randNum<=85:
  select = '5'
elif 20<randNum<=90:
  select = '6'
elif 20<randNum<=100:
  select = '7'
  
time.sleep(0.2)
browser.find_element_by_xpath('//*[@id="QID10"]/div[3]/div/fieldset/div/table/tbody/tr[1]/td['+select+']').click()

# 6번 문항 
# 나는 한맥을 나쁘다고 ~ 좋다고
randNum = random.randint(1, 100)
if 0<randNum<=20:
  select = '1'
elif 20<randNum<=40:
  select = '2'
elif 20<randNum<=60:
  select = '3'
elif 20<randNum<=80:
  select = '4'
elif 20<randNum<=85:
  select = '5'
elif 20<randNum<=90:
  select = '6'
elif 20<randNum<=100:
  select = '7'
  
time.sleep(0.2)
browser.find_element_by_xpath('//*[@id="QID10"]/div[3]/div/fieldset/div/table/tbody/tr[2]/td['+select+']').click()

# 6번 문항 
# 나는 한맥을 유쾌하지 않다고 ~ 유쾌하다고
randNum = random.randint(1, 100)
if 0<randNum<=20:
  select = '1'
elif 20<randNum<=40:
  select = '2'
elif 20<randNum<=60:
  select = '3'
elif 20<randNum<=80:
  select = '4'
elif 20<randNum<=85:
  select = '5'
elif 20<randNum<=90:
  select = '6'
elif 20<randNum<=100:
  select = '7'
  
time.sleep(0.2)
browser.find_element_by_xpath('//*[@id="QID10"]/div[3]/div/fieldset/div/table/tbody/tr[3]/td['+select+']').click()

# 6번 문항 
# 나는 한맥을 호감적이라고 ~ 비호감적이라고
randNum = random.randint(1, 100)
if 0<randNum<=20:
  select = '1'
elif 20<randNum<=40:
  select = '2'
elif 20<randNum<=60:
  select = '3'
elif 20<randNum<=80:
  select = '4'
elif 20<randNum<=85:
  select = '5'
elif 20<randNum<=90:
  select = '6'
elif 20<randNum<=100:
  select = '7'
  
time.sleep(0.2)
browser.find_element_by_xpath('//*[@id="QID10"]/div[3]/div/fieldset/div/table/tbody/tr[4]/td['+select+']').click()

# 6번 문항 
# 나는 마음에 들지 않는다고 ~ 마음에 든다고
randNum = random.randint(1, 100)
if 0<randNum<=20:
  select = '1'
elif 20<randNum<=40:
  select = '2'
elif 20<randNum<=60:
  select = '3'
elif 20<randNum<=80:
  select = '4'
elif 20<randNum<=85:
  select = '5'
elif 20<randNum<=90:
  select = '6'
elif 20<randNum<=100:
  select = '7'
  
time.sleep(0.2)
browser.find_element_by_xpath('//*[@id="QID10"]/div[3]/div/fieldset/div/table/tbody/tr[5]/td['+select+']').click()

input()

# 다음 문항
browser.implicitly_wait(5)
browser.find_element_by_xpath('//*[@id="NextButton"]').click()
time.sleep(1)


# 7번 문항 
# 맥주를 사러 간다면 한맥을 결코 사지 않을것이다 ~ 살 것이다
randNum = random.randint(1, 100)
if 0<randNum<=20:
  select = '1'
elif 20<randNum<=40:
  select = '2'
elif 20<randNum<=60:
  select = '3'
elif 20<randNum<=80:
  select = '4'
elif 20<randNum<=85:
  select = '5'
elif 20<randNum<=90:
  select = '6'
elif 20<randNum<=100:
  select = '7'
  
time.sleep(0.2)
browser.find_element_by_xpath('//*[@id="QID11"]/div[3]/div/fieldset/div/table/tbody/tr[1]/td['+select+']').click()

# 7번 문항 
# 맥주를 사러 간다면 한맥을 살 것이다 ~ 결코 사지 않을것이다
randNum = random.randint(1, 100)
if 0<randNum<=20:
  select = '1'
elif 20<randNum<=40:
  select = '2'
elif 20<randNum<=60:
  select = '3'
elif 20<randNum<=80:
  select = '4'
elif 20<randNum<=85:
  select = '5'
elif 20<randNum<=90:
  select = '6'
elif 20<randNum<=100:
  select = '7'
  
time.sleep(0.2)
browser.find_element_by_xpath('//*[@id="QID11"]/div[3]/div/fieldset/div/table/tbody/tr[2]/td['+select+']').click()

# 7번 문항 
# 맥주를 사러 간다면 한맥에 대한 낮은 구매의도를 가지고 있다 ~ 높은 구매의도를 가지고 있다
randNum = random.randint(1, 100)
if 0<randNum<=20:
  select = '1'
elif 20<randNum<=40:
  select = '2'
elif 20<randNum<=60:
  select = '3'
elif 20<randNum<=80:
  select = '4'
elif 20<randNum<=85:
  select = '5'
elif 20<randNum<=90:
  select = '6'
elif 20<randNum<=100:
  select = '7'
  
time.sleep(0.2)
browser.find_element_by_xpath('//*[@id="QID11"]/div[3]/div/fieldset/div/table/tbody/tr[3]/td['+select+']').click()

# 7번 문항 
# 맥주를 사러 간다면 한맥을 분명히 살 의도가 있다 ~ 없다
randNum = random.randint(1, 100)
if 0<randNum<=20:
  select = '1'
elif 20<randNum<=40:
  select = '2'
elif 20<randNum<=60:
  select = '3'
elif 20<randNum<=80:
  select = '4'
elif 20<randNum<=85:
  select = '5'
elif 20<randNum<=90:
  select = '6'
elif 20<randNum<=100:
  select = '7'
  
time.sleep(0.2)
browser.find_element_by_xpath('//*[@id="QID11"]/div[3]/div/fieldset/div/table/tbody/tr[4]/td['+select+']').click()

# 7번 문항 
# 맥주를 사러 간다면 한맥을 구매하지 않을 것이다 ~ 아마도 구매할 것이다
randNum = random.randint(1, 100)
if 0<randNum<=20:
  select = '1'
elif 20<randNum<=40:
  select = '2'
elif 20<randNum<=60:
  select = '3'
elif 20<randNum<=80:
  select = '4'
elif 20<randNum<=85:
  select = '5'
elif 20<randNum<=90:
  select = '6'
elif 20<randNum<=100:
  select = '7'
  
time.sleep(0.2)
browser.find_element_by_xpath('//*[@id="QID11"]/div[3]/div/fieldset/div/table/tbody/tr[5]/td['+select+']').click()

input()

# 다음 문항
browser.implicitly_wait(5)
browser.find_element_by_xpath('//*[@id="NextButton"]').click()
time.sleep(1)

# browser.quit()
input()

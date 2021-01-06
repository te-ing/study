import requests
res = requests.get("http://google.com")
res.raise_for_status() # 실행되는지 확인, 문제가 생기면 오류를 내보내고 프로그램을 끝냄
# print("응답코드 : ", res.status_code) # 코드를 가져올 수 있는지, 200이면 정상

# if res.status_code == requests.codes.ok: # 코드를 가져오는지
#     print("정상입니다.")
# else:
#     print("문제가 생겼습니다. [에러코드 ",res.status_code,"]")


print(len(res.text))
print(res.text)

with open("mygoogle.html", "w", encoding="utf8") as f:
    f.write(res.text) # 파일로 만드는 것
#텍스트 엔트리
from tkinter import *

root = Tk()
root.title("Nado GUI") 
root.geometry("640x480+300+1000") # + x좌표 + y좌표

txt = Text(root, width=30, height=5)
txt.pack()

txt.insert(END, "글자를 입력하세요")


e = Entry(root, width=30)
e.pack()
e.insert(0, "한 줄만 입력하세요") #0은 텍스트의 위치

def btncmd():
    #내용출력
    print(txt.get("1.0", END)) # 라인 1, 0번째 column 위치부터 끝까지)
    print(e.get()) #Entry(아랫 칸)까지 출력

    #내용삭제
    txt.delete("1.0", END)
    e.delete(0, END) # insert 할 때 0만 집어넣었으므로 0만, Line16 참조

btn = Button(root, text="클릭", command=btncmd)
btn.pack()


root.mainloop() 
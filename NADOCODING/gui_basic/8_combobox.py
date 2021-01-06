#콤보박스
import tkinter.ttk as ttk
from tkinter import *

root = Tk()
root.title("Nado GUI") 
root.geometry("640x480+300+1000") # + x좌표 + y좌표

values = [str(i) + "일" for i in range (1, 32)]
combobox = ttk.Combobox(root, height=5, values=values)
combobox.pack()
combobox.set("카드 결제일") # 최초 목록 제목 설정과 버튼 클릭을 통한 값 설정 가능


box = ttk.Combobox(root, height=10, values=values, state="readonly") # 읽기전용
box.current(0) # 0번째 인덱스 값 선택
box.pack()


def btncmd():
    print(combobox.get()) # 선택된 값 표시
    print(box.get()) # 선택된 값 표시


btn = Button(root, text="선택", command=btncmd)
btn.pack()


root.mainloop() 
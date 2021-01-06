#리스트박스
from tkinter import *

root = Tk()
root.title("Nado GUI") 
root.geometry("640x480+300+1000") # + x좌표 + y좌표

listbox = Listbox(root, selectmode="extended", height = 0) 
#extended : 여러개 클릭가능 (single은 한개만 가능) height는 보여지는 리스트의 크기
listbox.insert(0, "사과")
listbox.insert(1, "딸기")
listbox.insert(2, "바나나")
listbox.insert(END, "수박") #END는 순서를 담지 않아도 순서대로 가장 맨 뒤로 들어감
listbox.insert(END, "포도")
listbox.pack()

btn = Button(root, text="클릭", command=btncmd)
btn.pack()


root.mainloop() 
#레이블
from tkinter import *

root = Tk() # root 는 윈도우를 의미
root.title("Nado GUI") 
root.geometry("640x480+200+1000")

label1 = Label(root, text="안녕하세요")
label1.pack()

photo = PhotoImage(file="gui_basic/img.png")
label2 = Label(root, image=photo)
label2.pack()

def change():
    label1.config(text="또 만나요") # 클릭 시 나타나는 이미지의 값을 바꾸는 것

    global photo2 # photo2를 전역변수(global)로 만들어서 Garbage Collection이 값을 지우지 않도록
    photo2 = PhotoImage(file="gui_basic/img2.png")
    label2.config(image=photo2)

btn = Button(root, text = "클릭", command = change)
btn.pack()

root.mainloop()
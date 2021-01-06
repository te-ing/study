#리스트박스
from tkinter import *

root = Tk()
root.title("Nado GUI") 
root.geometry("640x480+300+1000") # + x좌표 + y좌표

label1 = Label(root, text = "메뉴를 선택하세요").pack() #.pack 바로 가능

burger_var = IntVar()

btn_burger1 = Radiobutton(root, text = "햄버거", value =1, variable =burger_var)
btn_burger1.select() # 선택
btn_burger2 = Radiobutton(root, text = "치즈버거", value =2, variable =burger_var)
btn_burger3 = Radiobutton(root, text = "치킨버거", value =3, variable =burger_var)

btn_burger1.pack()
btn_burger2.pack()
btn_burger3.pack()

Label(root, text = "음료를 선택하세요").pack()

drink_var = StringVar() # 문자열 Str
btn_drink1 = Radiobutton(root, text="콜라", value="콜라", variable=drink_var)
btn_drink1.select() #기본값 선택
btn_drink2 = Radiobutton(root, text="사이다", value="사이다", variable=drink_var)

btn_drink1.pack()
btn_drink2.pack()

def btncmd():
    print(burger_var.get()) # 선택된 항목의 값을 보여줌
    print(drink_var.get())

btn = Button(root, text="주문", command=btncmd)
btn.pack()


root.mainloop() 
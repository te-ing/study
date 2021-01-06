from tkinter import *

root = Tk() # root 는 윈도우를 의미
root.title("Nado GUI") #프로그램 제목

btn1 = Button(root, text="버튼1")
btn1.pack() # .pack()이 있어야 버튼을 보임. 실제로 윈도우(root)에 넣어주는 함수

btn2 = Button(root, padx = 5, pady = 10, text = "버튼2") #버튼의 크기 (크기 확보, 여백)
btn2.pack()
btn3 = Button(root, padx=10, pady=5, text = "버튼3")
btn3.pack()

btn4 = Button(root, width=10, height=3, text="버튼4") #버튼의 크기 (고정적인 크기)
btn4.pack()

btn5 = Button(root, fg="red", bg="yellow", text="버튼5") #버튼과 텍스트 색상
btn5.pack()

photo = PhotoImage(file="gui_basic/img.png") #버튼 이미지 넣기
btn6 = Button(root, image=photo)
btn6.pack()


def btncmd(): # 동작의 함수
    print("버튼 클릭")

btn7 = Button(root, text="동작버튼", command=btncmd) #동작 버튼 만들기
btn7.pack()


root.mainloop() #창이 닫히지 않도록
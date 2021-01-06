#프로그레스 바
import tkinter.ttk as ttk
import time
from tkinter import *


root = Tk()
root.title("Nado GUI") 
root.geometry("640x480+300+1000") # + x좌표 + y좌표

#progressbar = ttk.Progressbar(root, maximum = 100, mode="indeterminate") #mode 결정되지 않음
# progressbar = ttk.Progressbar(root, maximum = 100, mode="determinate") 
# progressbar.start(10) #10ms 마다 움직임
# progressbar.pack()

# def btncmd():
#     progressbar.stop() # 작동 중지

# btn = Button(root, text="중지", command=btncmd)
# btn.pack()

p_var2 = DoubleVar() # 소수점 있는 실수도 반영가능
progressbar2 = ttk.Progressbar(root, maximum=100, length=150, variable=p_var2)
progressbar2.pack()

def btncmd2():
    for i in range(1, 101):
        time.sleep(0.01) # 0.01초 대기
        p_var2.set(i)
        progressbar2.update() # for문 동작마다 ui업데이트
        print(p_var2.get())


btn = Button(root, text="시작", command=btncmd2)
btn.pack()




root.mainloop() 
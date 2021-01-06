from tkinter import *

root = Tk()
root.title("Nado GUI") #프로그램 제목
#root.geometry("640x480") # 가로*세로 이때는 *가 아닌 x로 써야함
root.geometry("640x480+100+500") # + x좌표 + y좌표
root.resizable(False, False) # 가로, 세로 창 크기 변경불가



root.mainloop() #창이 닫히지 않도록
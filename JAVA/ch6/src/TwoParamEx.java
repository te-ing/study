class Data { int x;}

public class TwoParamEx {
    public static void main(String[] args) {
        Data d = new Data();
        d.x = 10;
        System.out.println("main() : x = " + d.x);

        change2(d); // 참조형 매개변수
//        change (d.x); //기본형 매개변수
        System.out.println("After change(d.x)");
        System.out.println("main() : x = " + d.x);

    }

    static void change(int x) {
        x = 1000;
        System.out.println("change() : x = " + x);
    }

    static void change2(Data d) { // 참조형 매개변수
        d.x = 1000;
        System.out.println("change() : x = " + d.x);
    }
}




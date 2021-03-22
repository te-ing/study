public class MyMathTest {
    public static void main(String[] args) {
        MyMath mm = new MyMath();
        long result1 = mm.add(5L,3L);
        long result2 = mm.subtract(5L, 3L);
        long result3 = mm.multiply(5L, 3L);
        double result4 = mm.divide(5L, 3L); // double로 자동 형변환됨
        double result5 = mm.divide(5L, 0);

        System.out.println(result1);
        System.out.println(result2);
        System.out.println(result3);
        System.out.println(result4);
        System.out.println(result5);
    }
}

class MyMath {
    long add(long a, long b) {
        return  a + b;
    }
    long subtract(long a, long b) {
        return a - b;
    }
    long multiply(long a, long b) {
        return a * b;
    }
    double divide(double a, double b) {
        if(b==0) { // 매개변수의 유효성 검사 : 호출하는 쪽을 위해 모든 경우의 수를 고민하고 대비하여 코드를 작성해야 한다.
            System.out.println("0으로 나눌 수 없습니다.");
            return 0;
        }
        return a / b;
    }
}

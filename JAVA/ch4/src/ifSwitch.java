import java.util.Scanner;

public class ifSwitch {
    public static void main(String[] args) {
        System.out.print("이번 달은 무슨 달인가요?:");

        Scanner scanner = new Scanner(System.in);
        int month = scanner.nextInt();

        switch (month){
            case 2 : case 1 : case 12 :
                System.out.println("현재 계절은 겨울입니다.");
                break;
            case 5 : case 3 : case 4 :
                System.out.println("현재 계절은 봄입니다.");
                break;
            case 6 : case 7 : case 8 :
                System.out.println("현재 계절은 여름입니다.");
                break;
            case 9 : case 10 : case 11 :
                System.out.println("현재 계절은 가을입니다.");
                break;
        }
    }
}

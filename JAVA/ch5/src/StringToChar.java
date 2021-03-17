public class StringToChar {
    public static void main(String[] args) {
        String src = "ABCDE";  // "ABCDE"라는 문자열 생성

        for (int i=0; i<src.length(); i++) {
            char ch = src.charAt(i); //src의 i번째 문자를 ch에 저장
            System.out.println("src.charAt("+i+"):"+ch);
        }

        char[] chArr = src.toCharArray(); // String을 char[]으로 변환

        System.out.println(chArr);

        String stArr = new String(chArr); // chArr을 String으로 변환

        System.out.println(stArr);

        //String은 char에 메서드를 추가한 것. String은 읽을 수 있을 뿐이며 내용을 변경할 수는 없다.
    }
}

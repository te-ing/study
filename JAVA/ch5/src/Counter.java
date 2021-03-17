public class Counter {
    public static void main(String[] args) {
        int[] numArr = new int[10];
        int[] counter = new int[10];

        for (int i=0; i<numArr.length; i++) {
            numArr[i] = (int)(Math.random()*10);
            System.out.print(numArr[i]);
        }
        System.out.println();

        for (int i=0; i<numArr.length; i++) {
            counter[numArr[i]]++; // counter중 i의 갯수를 늘린다.
        }

        for (int i=0; i<numArr.length; i++){
            System.out.println( i + "의 개수 : "+ counter[i]);
        }
    } // main 끝

}

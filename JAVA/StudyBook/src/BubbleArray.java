public class BubbleArray { //201페이지 버블정렬 예제 5-10
    public static void main(String[] args) {
        int[] numArr = new int[10];  // 길이 10의 int형 numArr배열을 생성

        for (int i=0; i < numArr.length; i++){
            System.out.print(numArr[i] = (int)(Math.random()*10));  // 0~9 사이의 랜덤수
        }
        System.out.println(); // sout 단축키 사용

        for (int i=0; i<numArr.length-1; i++){ // 9번 실행
            boolean changed = false; //자리바꿈이 발생했는지 확인

            for (int j=0; j<numArr.length-1-i ; j++){
                if(numArr[j] > numArr[j+1]) { // 옆의 값을 비교하여 크기가 작다면 위치를 바꾼다.
                    int temp = numArr[j];
                    numArr[j] = numArr[j+1];
                    numArr[j+1] = temp;
                    changed = true; // changed 값 변경 *자리바꿈 발생
                }
            } // end for j
            if (!changed) break; // 자리바꿈을 하지 않는다면 반복문 탈출 changed = false

            for (int k=0; k<numArr.length; k++)
                System.out.print(numArr[k]); //정렬결과 출력
            System.out.println();
        } // end for i
    } // main 끝
}
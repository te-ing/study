#include <stdio.h>
int main(void)
{
    // printf("Hello World\n");

    // 실수형 변수에 대한 예제
    /*float f = 46.5f;
    printf("%f\n", f);

    const int YEAR = 2000; //상수*/

    /*//연산

    int add = 3 + 7;
    printf("3+7= %d\n", add);
    printf("%d+%d= %d\n", 30, 79, 30 + 79);*/

    // scanf

    int input;
    printf("값을 입력하세요 : ");
    scanf_s("%d", &input);
    printf("입력값 : %d\n", input);
    return 0;
}

#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int UNCROSSED[] = {}; //다리를 건너지 않은 사람들
    int SIZE = get_int("몇 명이 건너야 하나요?\n");
    int time = 0; //소요시간 time 선언

    // 입력은 100명을 넘기지 않습니다.
    if (SIZE > 100){
        printf("100 이상의 수는 입력할 수 없습니다.\n");
        return 1;
    }

    // 건너는 사람들의 소요시간 입력
    for (int i = 0; i < SIZE; i++)
    {
        UNCROSSED[i] = get_int("다리를 건너야 하는 사람들의 정보를 입력해 주세요\n");
    }

    // 건너는 사람이 한명일 때 계산
    if (SIZE == 1){
        printf("%d\n", UNCROSSED[0]);
        printf("총 소요시간: %d\n", UNCROSSED[0]);
        return 1;
    }

    // 샘플미션예제를 인용한 버블정렬
    int temp;

    for (int i=0; i < SIZE; i++)
    {
        for (int j=0; j < SIZE - i - 1; j++ )
        {
          if (UNCROSSED[j] > UNCROSSED[j+1])
          {
            temp = UNCROSSED[j];
            UNCROSSED[j] = UNCROSSED[j+1];
            UNCROSSED[j+1] = temp;
          }
        }
    }

    // 건너는 사람이 두명일 때 계산
    if (SIZE == 2){
        printf("%d ", UNCROSSED[0]);
        printf("%d\n", UNCROSSED[1]);
        printf("총 소요시간: %d\n", UNCROSSED[1]);
        return 1;
    }

    // 건너는 사람과 오는사람을 순서대로 출력
    for (int i=1; i < SIZE-1; i++)
        {
        printf("%d ", UNCROSSED[0]);//건너는 사람들 2명,
        printf("%d\n", UNCROSSED[i]);
        printf("%d\n", UNCROSSED[0]);//손전등을 가지고 돌아오는 사람 1명
        }
        printf("%d ", UNCROSSED[0]);
        printf("%d\n", UNCROSSED[SIZE-1]);//마지막 건너는 사람들 2명

    // 다리를 건너는데 소요되는 시간 계산
    for (int i=1; i < SIZE; i++)
    {

    time += UNCROSSED[i];
    time += UNCROSSED[0];
    }
    time -= UNCROSSED[0]; // 마지막에는 돌아오지 않음

    printf("총 소요시간: %d\n", time);
}
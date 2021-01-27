#include <stdio.h>
#define SIZE 500000
int main(int arge, char *argv[])
{
    int n;
    scanf("%d", &n);
    int partArr[n];
    int lengthOfPartArr = n - 1;
    for (int i = 0; i < lengthOfPartArr; i++)
    {
        scanf("%d", &partArr[i]);
    }

    // 1부터 n까지 모든 값을 더한 값 - txt의 값 = 빠뜨린 수(K)
    int answer = n * (n + 1) / 2; // 수열의 합 공식 (1부터 n까지의 합)

    // 1부터 n까지의 값 - txt의 값
    for (int i = 0; i < n; i++)
    {
        answer -= partArr[i];
    }

    printf("K : %d\n", answer);
    return 0;
}

/*

1. 내 코드에서 소개하고 싶은 점
    배열과 코드에 대해 이해하지 못한 채, 이것저것 시도해보다 얻어걸린 느낌이라 아쉬웠다.


2. 내 코드에서 아쉬웠던 부분
    이 코드를 처음 보는 사람이라면 명확히 이해하기 힘들 것 같다.
    이해하기 쉬운 주석을 달았다면 하는 아쉬움과 answer이라는 애매한 변수명이 아쉬웠다.

*/
	/*
#include <time.h>
#include <stdlib.h>
#include <stdio.h>

int main(void)
{
	srand(time(NULL)); // 난수 초기화 하지않는다면 돌릴 때 마다 같은 수가 나옴
	// time(NULL)은 현재시각 반환, 매 시간마다 다른 시드값이 설정되는 것.

	for (int i = 0; i < 5; i++)
	{
	int num = rand() % 10; // rand() % 뽑고싶은 경우의 수
		printf("%d ", num);
	}
	
	// switch
	srand(time(NULL));
	int i = rand() % 3;
	switch (i)
	{
	case 0: printf("가위\n"); break; //switch문에서는 break를 하지 않으면 밑에 조건은 확인없이 전부 수행됨
	case 1: printf("바위\n"); break;
	case 2: printf("보\n"); break;
	default : printf("에러발생\n");
	}

	return 0;
}
	*/
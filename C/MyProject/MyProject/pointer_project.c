/*
#include <stdio.h>
#include <time.h>
// 물이 증발하기 전에 어항에 물을 주세요!

int level;
int arrayFish[6];
int* cursor;
void initData();
void printfFishes();
void decreaseWater(long elapsedTime);
int checkFishAlive();

int main(void)
{
	long startTime = 0; // 게임 시작시간
	long totalElapsedTime = 0; // 총 경과 시간
	long prevElapsedTime = 0; // 직전 경과 시간 (최근에 물을 준 시간 간격)

	int num; // 몇번 어항에 물을 줄 것인지, 사용자 입력
	initData();

	cursor = arrayFish; // cursor[0], cursor[1]... 으로 배열을 사용가능

	startTime = clock(); // 현재 시간을 1/1000초로 반환
	while (1)
	{
		printfFishes();
		//getchar(); // 임시로 사용자 엔터 대기
		printf("몇 번 어항에 물을 주시곘어요?");
		scanf_s("%d", &num);

		// 입력값 체크
		if (num < 1 || num >6)
		{
			printf("\n입력값이 잘못되었습니다.\n");
			continue;
		}

		totalElapsedTime = (clock() - startTime) / CLOCKS_PER_SEC; // 6000mm초를 6초로 변환
		printf("총 경과시간 : %ld 초 \n", totalElapsedTime); //long이므로 ld

		// 직전  물 준 시간(마지막으로 물 준 시간) 이후로 흐른 시간
		prevElapsedTime = totalElapsedTime - prevElapsedTime;
		printf("최근 경과 시간 : %ld 초\n", prevElapsedTime);

		// 어항의 물을 감소 (증발)
		decreaseWater(prevElapsedTime);

		// 사용자가 입력한 어항에 물을 준다
		// 1. 어항의 물이 0 이면 물을 주지 않는다.
		if (cursor[num - 1] <= 0)
		{
			printf("%d 번 물고기는 이미 죽었습니다.. 물을 주지 않습니다.\n", num);
		}
		// 2. 어항의 물이 0이 아닌 경우? 물을 준다! 100을 넘지 않는지 체크
		else if (cursor[num - 1] + 1 <= 100)
		{
			//물을 준다
			printf("%d 번 어항에 물을 줍니다.\n\n", num);
			cursor[num - 1] += 1;
		}

		// 레벨업을 할 건지 확인 (레벨업은 20초마다 한 번씩 수행)
		if (totalElapsedTime / 20 > level - 1)
		{
			level ++;
			printf("*** 축 레벨업! 기존 %d 레벨에서 %d 레벨로 업그레이드 ***\n\n", level - 1, level);
			
			if (level == 5)
			{
				printf("\n\n축하합니다, 최고 레벨을 달성하였습니다. 게임을 종료합니다!");
				exit(0); // 프로그램 종료
			}
		}

		// 모든 물고기가 죽었는지 확인
		if (checkFishAlive() == 0)
		{
			printf("모든 물고기가 죽었습니다...\n");
			exit(0);
		}
		else {
			printf("물고기가 아직 살아 있어요!\n");
		}
		prevElapsedTime = totalElapsedTime;
		// 10초-> 15초 (5초 : prevElapsedTime -> 15초) -> 25초(10초..?)
	}


	return 0;
}

void initData()
{
	level = 1; //게임레벨
	for (int i = 0; i < 6; i++)
	{
		arrayFish[i] = 100; // 어항의 물 높이
	}
}

void printfFishes() // 물고기 상태표시
{
	printf("%3d번 %3d번 %3d번 %3d번 %3d번 %3d번\n", 1, 2, 3, 4, 5, 6);
	for (int i = 0; i < 6; i++)
	{
		printf(" %4d ", arrayFish[i]);
	}
	printf("\n\n");
}

void decreaseWater(long elapsedTime)
{
	for (int i = 0; i < 6; i++)
	{
		arrayFish[i] -= (level * 1 * (int)elapsedTime); // 1 난이도 조절
		if (arrayFish[i] < 0)
		{
			arrayFish[i] = 0;
		}
	}
}

int checkFishAlive()
{
	for (int i = 0; i < 6; i++)
	{
		if (arrayFish[i] > 0)
			return 1; // 참 True
	}
	return 0;
}
*/
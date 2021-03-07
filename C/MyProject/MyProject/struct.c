/*
#include <stdio.h>
//구조체
struct GameInfo {
	char* name;
	int year;
	int price;
	char* company;

	struct GameInfo * friendGame; // 연관 업체 게임
}; 

typedef struct{
	char* name;
	int year;
	int price;
	char* company;
	struct GameInfo* friendGame;
} GAME_INFO; // struct 전체를 GAME_INFO로 지정

int main(void)
{ 
	
	// [게임 출시]
	// 이름: 삼국지
	// 발매년도 : 2018년
	// 가격: 50원
	// 제작사 : 동아

	struct GameInfo gameInfo1; // struct GameInfo 까지가 자료형, gameInfo1 변수형
	
	gameInfo1.name = "삼국지";
	gameInfo1.year = 2018;
	gameInfo1.price = 50;
	gameInfo1.company = "동아";

	// 구조체 출력
	printf("\n -- 게임 출시 정보 --\n");
	printf("    게임명 : %s\n", gameInfo1.name);
	printf("    발매년도 : %d\n", gameInfo1.year);
	printf("    가격 : %d\n", gameInfo1.price);
	printf("    제작사 : %s\n", gameInfo1.company);

	// 구조체를 배열처럼 초기화
	struct GameInfo gameInfo2 = { "삼국지천명", 1998, 100, "동아게임즈" };
	printf("\n -- 게임 출시 정보 --\n");
	printf("    게임명 : %s\n", gameInfo2.name);
	printf("    발매년도 : %d\n", gameInfo2.year);
	printf("    가격 : %d\n", gameInfo2.price);
	printf("    제작사 : %s\n", gameInfo2.company);

	// 구조체 배열
	struct GameInfo gameArray[2] = {
		{ "삼국지", 2018, 50, "동아" },
		{ "삼국지천명", 1998, 100, "동아게임즈" } 
	};

	// 구조체 포인터
	struct GameInfo* gamePtr; // 미션맨
	gamePtr = &gameInfo1;
	printf("\n -- 미션맨의 게임 출시 정보 --\n");
	//printf("    게임명 : %s\n", (*gamePtr).name); // *gamePtr 으로만 하면 gamePtr.name의 값이 되어버림
	//printf("    발매년도 : %d\n", (*gamePtr).year);
	//printf("    가격 : %d\n", (*gamePtr).price);
	//printf("    제작사 : %s\n", (*gamePtr).company);

	printf("    게임명 : %s\n", gamePtr->name); // -> 과 (*gamePtr)은 같은 의미
	printf("    발매년도 : %d\n", gamePtr->year);
	printf("    가격 : %d\n", gamePtr->price);
	printf("    제작사 : %s\n", gamePtr->company);
	
	// 연관 업체 게임 소개
	gameInfo1.friendGame = &gameInfo2;
	printf("\n -- 연관 업체 게임 출시 정보 --\n");
	printf("    게임명 : %s\n", gameInfo1.friendGame->name);
	printf("    발매년도 : %d\n", gameInfo1.friendGame->year);
	printf("    가격 : %d\n", gameInfo1.friendGame->price);
	printf("    제작사 : %s\n", gameInfo1.friendGame->company);

	// typedef
	// 자료형에 별명 지정
	int i = 1;
	typedef int 정수; // int를 정수로 지정
	정수 정수변수 = 3; // int i= 3; 과 같은 의미
	printf("정수변수 : %d", 정수변수);

	typedef struct GameInfo 게임정보; // GameInfo를 게임정보로 지정
	게임정보 game1;
	game1.name = "한글 게임";

	GAME_INFO game2;
	game2.name = "한글게임2";
	game2.year = 2014;

	return 0;
}
*/
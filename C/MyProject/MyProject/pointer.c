	/*
#include <stdio.h>
void swap(int* a, int* b);
void changeArray(int* ptr);
int main(void)
{
	//포인터

	int 철수 = 1; //암호
	int 영희 = 2;
	int 민수 = 3;

	printf("철수네 주소 : %d, 암호 : %d\n", &철수, 철수); //&철수: 메모리 공간의 주소
	printf("영희네 주소 : %d, 암호 : %d\n", &영희, 영희);
	printf("민수네 주소 : %d, 암호 : %d\n", &민수, 민수);
	
	//미션맨!
	
	//첫 번째 미션 : 아파트의 각 집에 방문하여 문에 적힌 암호 확인
	int *미션맨; // 포인터 변수
	미션맨 = &철수;
	printf("미션맨이 방문하는 곳 주소 : %d, 암호 : %d\n", 미션맨, *미션맨);

	//두 번째 미션 : 각 암호에 3을 곱해라
	미션맨 = &철수;
	*미션맨 = *미션맨 * 3;
	printf("미션맨이 암호를 바꾼 곳 주소 : %d, 암호 : %d\n", 미션맨, *미션맨);

	미션맨 = &민수;
	*미션맨 = *미션맨 * 3;
	printf("미션맨이 암호를 바꾼 곳 주소 : %d, 암호 : %d\n", 미션맨, *미션맨);

	//스파이
	// 미션맨이 바꾼 암호에서 2를 뺴라!
	int* 스파이 = 미션맨;
	printf("\n ... 스파이가 미션 수행하는 중 ...\n\n");
	스파이 = &철수;
	*스파이 = *스파이 - 2;
	printf("스파이가 방문하는 곳 주소 : %d, 암호 : %d\n", 스파이, *스파이);


	// 배열
	int arr[3] = { 5, 10, 15 };
	int* ptr = arr;
	for (int i = 0; i < 3; i++)
	{
		printf("배열 arr[%d] 의 값 : %d\n", i, arr[i]);
	}

	int a = 10;
	int b = 20;
	
	printf("a : %d, b : %d\n", a, b);

	swap(&a, &b); // 포인트(*)으로 설정했으므로 &를 붙여줘야 한다.

	printf("주소값 변경 후 a : %d, b : %d\n", a, b);

	int arr2[3] = { 10, 20, 30 };
	changeArray(arr2);
	for (int i = 0; i < 3; i++) {
		printf("%d\n", arr2[i]);
	}

	changeArray(&arr2[0]);
	for (int i = 0; i < 3; i++) {
		printf("%d\n", arr2[i]);
	}
	



	return 0;
}


void swap(int * a, int * b) // 포인트 a,b로 설정해야 함수 밖에서도 사용가능
{
	int temp = *a; //temp에서도 포인트
	*a = *b;
	*b = temp;
	printf("(주소값 전달)Swap 함수 내 => a: %d, b : %d\n", *a, *b);
}

void changeArray(int* ptr)
{
	ptr[2] = 50;
}
	*/
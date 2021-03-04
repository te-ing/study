	/*
#include <stdio.h>

int main(void)
{
	int subway_array[3]; // [0], [1], [2] 생성

	subway_array[0] = 30;
	subway_array[1] = 40;
	subway_array[2] = 50;

	for (int i = 0; i < 3; i++)
	{
		printf("지하철 %d호차에 %d명이 타고 있습니다\n", i+1, subway_array[i]);
	}

	//값 설정 방법 (값은 초기화를 반드시 해야 함)
	int arr[10] = { 1,2,3,4,5,6,7,8,9,10 };
	for (int i = 0; i < 10; i++)
	{
		printf("%d\n", arr[i]);
	}

	//int size = 10;
	//int arr[size]; 불가능. size에는 항상 상수를 선언
	
	int arr[10] = { 1, 2 }; // 3번째 값부터는 자동으로 '0'으로 초기화 됨
	for (int i = 0; i < 10; i++)
	{
		printf("%d\n", arr[i]);
	}
	int arr[] = { 1, 2 }; // arr[2]와 같은 의미


	// 문자 vs 문자열
	char c = 'A';
	printf("%c\n", c);
	
	char str[7] = "coding"; // [c] [o] [d] [i] [n] [g] [\0](\0=NULL문자)라는 배열이 문자열을 만드는 것
	printf("%s\n", str);
	printf("%d\n", sizeof(str)); // sizeof(str) str의 사이즈


	char kor[] = "나도코딩";
	printf("%s\n", kor);
	printf("%d\n", sizeof(kor)); //영어는 1글자에 1byte, 한글은 2byte
	

	char c_array[7] = { 'c','o','d','i','n','g','\0' };
	printf("%d\n", sizeof(c_array));

	return 0;
}
	*/
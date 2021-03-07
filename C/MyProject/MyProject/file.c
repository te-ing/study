/*
#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>
#define MAX 10000 // MAX == 10000으로 치환되는 상수

int main(void)
{// 파일 입출력

	// fputs, fgets 
	char line[MAX]; // char line[10000]
	FILE * file = fopen("c:\\test1.txt", "wb"); // 소스코드에서는 \를 2개 써야 인식함
	// r : 읽기전용 w : 쓰기전용 a : 이어쓰기 // t : 텍스트 b : 바이너리
	if (file == NULL)
	{
		printf("파일 열기 실패\n");
		return 1;
	}
	
	fputs("fputs 를 이용하여 적힌 글\n", file);
	fputs("작성 완료\n", file);

	fclose(file); // 파일을 열고 나서 닫지 않았을 때 프로그램에 문제가 생기면 데이터 손실이 생길 수 있으므로 fclose로 닫아주어야함

	return 0;
}
*/
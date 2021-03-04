/*
#include <stdio.h>
int main(void)
{
	int age = 12;
	printf("%d\n", age);
	age = 13;
	printf("%d\n", age);

	float f = 46.5;
	printf("%.2f\n", f); //%앞에 .2를 쓰면 2번째 자리수까지만 출력됨
	
	double d = 4.428;
	printf("%.2lf", d);  //double은 lf(LF) 사용 float는 4바이트, double은 8바이트

	const int YEAR = 2000; // const로써 상수 선언 상수는 대체로 대문자로 사용
	printf("태어난 년도 : %d\n", YEAR);
	
	//scanf 키보드 입력을 받아서 저장
	int input;
	printf("값을 입력하세요 : ");
	scanf_s("%d", &input); // &input 은 input에 값을 저장한다는 뜻
	printf("입력값 : %d\n", input);

	int one, two, three;
	printf("3개의 정수를 입력하세요 : ");
	scanf_s("%d %d %d", &one, &two, &three);
	printf("첫번째 값 : %d\n", one);
	printf("두번째 값 : %d\n", two);
	printf("세번째 값 : %d\n", three);

	char str[256]; //str의 크기를 256으로 지정
	scanf_s("%s", str, sizeof(str)); // sizeof(str) 256개의 문자만 받겠다는 뜻
	printf("%s\n", str);

	return 0;
}
*/
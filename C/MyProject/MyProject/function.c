/*
#include <stdio.h>
void p(int num); //선언
void function_without_return(); 
int fuction_with_return(); // int가 반환하는 부분
void function_without_params();
void fuction_with_params(int num1, int num2, int num3); // 3개의 정수를 받는 함수
int apple(int total, int ate); // total 개에서 ate개를 먹고 남은 수를 반환

int main(void)
{
	function_without_return();
	
	int ret = fuction_with_return();
	p(ret);

	function_without_params();

	fuction_with_params(5, 2, 1);

	int re = apple(5, 2); //5개의 사과 중에서 2개를 먹었다.
	printf("사과 5개 중에 2개를 먹으면 %d개가 남아요\n", re);
	printf("사과 %d개 중에 %d개를 먹으면 %d개가 남아요 \n", 10, 4, apple(10, 4));

	return 0;
}

void p(int num)
{
	printf("num은 %d 입니다\n", num);
}

void function_without_return()
{
	printf("반환값이 없는 함수입니다.\n");
}

int fuction_with_return()
{
	printf("반환값이 있는 함수입니다.\n");
	return 10; // printf 구문 실행 후 10을 내보내줌
}

void function_without_params() //파라미터(전달값)이 없는 함수
{
	printf("전달값이 없는 함수 입니다.\n");
}

void fuction_with_params(int num1, int num2, int num3)
{
	printf("전달값이 있는 함수이며 전달값은 %d, %d, %d 입니다.\n",
		num1, num2, num3);
}

int apple(int total, int ate)
{
	printf("전달값과 반환값이 있는 함수입니다.\n");
	return total - ate;
}
*/
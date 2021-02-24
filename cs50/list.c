#include <stdio.h>
#include <stdlib.h> // malloc, free 함수가 있는 헤더파일

int main(void){

  int *list = malloc(3 * sizeof(int)); // 4바이트 할당
  if (list == NULL){ // list에 아무것도 없다면 1을 반환하여 알려줌
    return 1;
  }

  list[0] = 1; // 4바이트를 가짐
  list[1] = 2; // 4바이트 뒤
  list[2] = 3; // 8바이트 뒤
// 포인터는 메모리의 주소이고, 배열은 메모리의 덩어리이다.

  int *tmp = realloc(list, 4 * sizeof(int)); // list에 4개의 정수크기를 재할당
  if (tmp == NULL){
    return 1; // 메모리가 부족한 경우 return 1
    }

  tmp[3] = 4;

    for (int i = 0; i < 4; i++){
      printf("%i\n", list[i]);
    }
    free(list); // 메모리 누수를 막기위해 list 초기화
  }

/*
realloc 사용 전
  int main(void){

  int *list = malloc(3 * sizeof(int)); // 4바이트 할당
  if (list == NULL){ // list에 아무것도 없다면 1을 반환하여 알려줌
    return 1;
  }

  list[0] = 1; // 4바이트를 가짐
  list[1] = 2; // 4바이트 뒤
  list[2] = 3; // 8바이트 뒤
// 포인터는 메모리의 주소이고, 배열은 메모리의 덩어리이다.

  int *tmp = malloc(4 * sizeof(int));
  if (tmp == NULL){
    return 1; // 메모리가 부족한 경우 return 1
    }

  for (int i = 0; i < 3; i++){
        tmp[i] = list[i];
      }
  tmp[3] = 4;

  free(list); // list에 해당된 메모리를 모두 초기화

  list = tmp; // 원래 포인터 이름을 그대로 쓰기 위해 

  // 오래된 배열에서 새로운 배열로 정수를 복사하는 코드

    for (int i = 0; i < 4; i++){
      printf("%i\n", list[i]);
    }

    free(list); // 메모리 누수를 막기위해 list 초기화
  }
*/
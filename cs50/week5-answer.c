#include <stdio.h>

void sort(int *a, int b);
int main()
{
    int arr[7] = { 0, 25, 10, 17, 6, 12, 9 }; 
    int n = 7;

    sort(arr, n);
return 0;
}

void sort(int *a, int b){
    
        for(int i=0; i<b; i++) {
            for(int j=0; j<b-i; j++) {
                if(*(a+j)>*(a+j+1)){
                    
                    int temp;
                    temp=*(a+j);
                    *(a+j)=*(a+j+1);
                    *(a+j+1)=temp; 
                }
        }
    }
    for(int i=0;i<b;i++)
        printf("%d ", a[i]);		
}
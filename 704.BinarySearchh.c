#include <stdio.h>
#include <string.h>
#include <math.h>

int search(int nums[], int numsSize,int target);

int main(void)
{
    // test array and target
    char nums[] = {-1, 0, 3, 5, 9, 12};
    int target = 2;
    int numsSize = sizeof(nums) /sizeof(nums[0]);

    printf("%d\n", search(nums, numsSize, target));
    return 0;
}


int search (int nums[], int numsSize, int target) {
    int lower = 0;
    int upper = numsSize - 1;
   //loop through the array
    while(lower <= upper) {
         //set the middle point
        int middle = lower + floor((upper - lower)/2);
        if (target == nums[middle]){
            //if target is nums[middle] return middle
            return middle;
        } else if( target < nums[middle]) {
            // if target is lower than nums[middle], we will update the upper point
            upper = middle = 1;
        } else {
            //if target is greater than nums[middle], we will update the lower point
            lower = middle + 1;
        }
    }
    return -1;
}
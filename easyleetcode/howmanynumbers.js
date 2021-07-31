/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = nums => {
    let result = [];
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let currentVal = nums[i];

        for (let j = 0; j < nums.length; j++) {
            let num = nums[j];

            if (currentVal > num) count++;
        }
    }

    result.push(count);
    count = 0;
}

return result;

}


//Steps
/** j ! = i ignore index 0 aka 8 
 * Hashmap: 
 * find how many numbers in array are small than 8
 * Key is the current [i]
 * Value is how many are smaller
 * [8,1,2,2,3]
 * [8] = 4
 * [1] = 0
 * [2] = 1
 * [2] = 1
 * [3] = 3
 * Set variables
 * Term count will count how many numbers are smaller than the current number 
 * make forloop starting at index zero, go through all numbers in array
 * make value or current variable - used to compare numbers 
 * check if current value is less than current number
 * if yes that we can increase count by 1 (count++)
 * return result 

*/

/** Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

 

Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

Constraints:

2 <= nums.length <= 500
0 <= nums[i] <= 100
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = function(nums, target) => {
    let storage = {}; //storage is word for object/ key and value

    for(let [index, num] of nums.entries()){
        if(storage[num] !== undefined) //checking if numbrs are defined in array  
        return [storage[num], index];   
        storage[target-num] = index;
    }
};

//output [0,1]

// key value pair = 7 key -numbers in array value
// creating an object 
// first time we go through loop index is 0, number is 2. Checking if storage exists ex. 9-2=7

// '7' : 0,

/** Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists
/** You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.

 
/**
 * @param {number[]} nums
 * @return {number}
 */
                    // integer array
                    var sumOfUnique = function(nums) {
                        // set empty hashmap
                        const uniqueElement = {};
                        // set a variable sum = 0 since the output will need to be the sum of the unique elements in the array 
                        let sum = 0;
                        // iterate through array
                        // first loop option was wrong: 
                        //for (i = 0; i < nums.length; i++);
                        for (let num of nums){
                            // setting items in array to num 
                        // lookup why we use this and add to for loop cheat sheet
                        // if object[item in array] is undefined not yet there, then we will add 1    
                        if (uniqueElement[num] === undefined){
                            sum += num
                            uniqueElement[num] = 1
                            // if it is more than 1 we will subtract 1
                        } else {
                            if (uniqueElement[num] === 1)
                                sum -= num
                            uniqueElement[num] = -1
                        }
                        }
                        // return sum means returning sum of unique elements 
                        return sum
                    };
                    // input/array is nums
                    // unique elements of an array are the elements that appear only once in an array
                    // the output will be the sum of all the unique elements
                    /** Hashmap would be keeping track of count of each number
                    ex. 
                    1:1
                    2:2 - if there is more than 1 - this would not be in total
                    3:1
                     
                    1. Loop over the nums array - if the number is not in the array add 1
                    2. If the number appears more than once remove it from the sum (-1) 
                    3. return sum - adds output */
                      
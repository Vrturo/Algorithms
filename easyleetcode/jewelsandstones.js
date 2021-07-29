/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(J, S) {
    let count = 0;
    
    // iterate over J first
    const jewelHM = {}; 
    for (const jewel of J) {
        jewelHM[jewel] = true;
    }
    
    // iterate over S now
    for (const stone of S) {
        if (stone in jewelHM){
            count += 1;
        }
    }
    return count;
};

// Output: 3

// Time complexity: O(J+S)
// Space complexity: O(J)


// Hash table - a: True, A: True


// Problem: 

/**
 * You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
 * 
 */
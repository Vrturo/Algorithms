/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique = function(nums) {
    const integerCount = {};
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++){
        if (integerCount[nums[i]]){
            integerCount[nums[i]] += 1;
        } else {
            integerCount[nums[i]] = 1;
        }
    }
    
    for (let key in integerCount){
        let integerCountOfKey = integerCount[key];  // set value variable
        if (integerCountOfKey === 1){
          sum += parseInt(key);
         }
    }
    return sum;
};




// what is the problem? 

// The input we are given is an array of integers
// We are asked to return the sum of all unique elements of the input.
// a unique element is an integer that appears exactly once

// Logic 

// We will start by iterating through the nums array
// we will set the counts which will store the hashmap 

// next we will iterate through the count, finding 1 of each character
// once we have our integers that are only shown one time
// then we will return the sum 


// psuedo code

// set empty hashmap 
// set sum result

// for loop through array of integers 
// if we see character for the first time set to 1
// if we see it again do nothing 

// loop through value
// set value variable
// if value is equal to 1
// sum is add or equal to parseIntKey(key)
// parseInt function parses a string argument and returns an integer
// this sums the i 
// return sum 



// save each item in the array and store the count 


// iterate - check each item
// save each item in the array and keeping track of the count 

// - more detail would be to 


// checking count of all the integers in the array

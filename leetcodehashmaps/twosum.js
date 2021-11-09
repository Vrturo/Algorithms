// we are given a array of integers as the first input
// second input we are given a single integer called 'target'
// return the indexs of the two integers that sum is equal to the target 

// iterate through nums
// create hashmap to store indexs
// set variable for targert - nums[i]
// if new variable === nums[i]
// return index 


var twoSum = function(nums, target) {
    let map = {};
    let result = [];
  
    for (let i=0; i < nums.length; i++){ // iterate through the items in the array
      map[nums[i]] = i // set hashmap to store the index with the number
    }
    for (let i = 0; i < nums.length; i++){ // iterate through items in the array
        let difference = target - nums[i] // set variable for difference 
          if (map[difference] !== undefined && map[difference] !== i){ // if we see difference in the map
              return [map[difference], i] // return map difference and number indices
          }
        }
      return result
    };


    var twoSum = function(nums, target) {
        var map = {};
      
        for(var i = 0; i<nums.length; i++) {
            if(map[nums[i]] === undefined) map[target-nums[i]] = i;
            else return [map[nums[i]], i];
        }
      };
      
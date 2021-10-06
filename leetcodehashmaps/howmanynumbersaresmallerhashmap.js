var smallerNumbersThanCurrent = function(nums) {
    const map = {};
    const result = [];
    //let i = 0;
   // let numsLength = nums.length;
  
    for (let i = 0; i < nums.length; i++) {
      let count = 0;
  
      for (let j = 0; j < nums.length; j++) {
        if (map[nums[i]]) {
          count = map[nums[i]];
          break;
        }
        if (nums[j] < nums[i]) count++;
      }
      map[nums[i]] = count;
  
      result.push(count);
      //i++;
    }
  
    return result;
  };
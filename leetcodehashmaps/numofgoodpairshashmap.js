
var numIdenticalPairs = function(nums) {
    const map = {}
    let count = 0

    for (i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            count += map[nums[i]];
            map[nums[i]] += 1;
        } else {
            map [nums[i]] = 1;
        }
    }
    return count;
}


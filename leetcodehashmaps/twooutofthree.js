// Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.

// Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
// Output: [3,2]


var twoOutOfThree = function(nums1, nums2, nums3) {
    let firstMap = {};
    let finalMap = {};
    let result = [];
    
    for (let i = 0; i < nums1.length; i++){
        if (!firstMap[nums1[i]]){
            firstMap[nums1[i]] = 1;
        }
    }
    
    let secondMap = {};
    for (let i = 0; i < nums2.length; i++){
        if (!secondMap[nums2[i]]){
            secondMap[nums2[i]] = 1
        }
        if (firstMap[nums2[i]]){
            if (!finalMap[nums2[i]]){
                finalMap[nums2[i]] = 1;
                result.push(nums2[i])
            }
        }
    }
    let thirdMap = Object.assign({}, firstMap, secondMap);
    for (let i = 0; i < nums3.length; i++){
        if (thirdMap[nums3[i]]){
            if (!finalMap[nums3[i]]){
                finalMap[nums3[i]] = 1;
                result.push(nums3[i])
            }
        }
    }
    return result;
};



// use three different hasmaps to store the count of each nums array
// within each map we will compare if the items in a different array are within the created hashmap
// if they contain at least 2/3 then we will push the result 
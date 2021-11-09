// what is the problem?
// input array of integers
// input array of integers
// return the index of which the integer in num1 appears in nums 2


// we would need to check first input with second input and find which index input 1 is in input 2
// return the index of where nums1 appears in nums2 


// starting with iterating through second array with number as key and index as the value
// this hashmap would turnout as 
// arr2 = {
//     50: 0
//     12: 1
//     32: 2
//     46: 3
//     28: 4
// }

// iterate through nums1
// then we push the indexs of nums1 into the array 


var anagramMappings = function(nums1, nums2) {
    let result = []; // result will be an array
    let anagramMap = {}; // use hashmap to store index
   
    
    for(let i=0 ; i< nums2.length ; i++) { //iterate through nums2, 
        anagramMap[nums2[i]] = i; //set key as nums2 characters with the value being the index
    }
    for(let i=0; i < nums1.length ; i++) { //iterate through nums1
        result.push(anagramMap[nums1[i]]); // now we push the indexs of the n
    }
    return result;
};



// var anagramMappings = function(nums1, nums2) {
//     let result = []; // result will be an array
//     let anagramMap = {}; // use hashmap to store index
   
      
//     for(let i=0 ; i< nums2.length ; i++) { //iterate through nums2, 
//         if (!anagramMap[nums2[i]]){
//         anagramMap[nums2[i]] = i; //set key as nums2 characters with the value being the index
//         }
//     }
//     for(let i=0; i < nums1.length ; i++)  { //iterate through nums1
//         result.push(anagramMap[nums1[i]]); // now we push the indexs of the nums1 into the result 
//     }
//     return result;
// }

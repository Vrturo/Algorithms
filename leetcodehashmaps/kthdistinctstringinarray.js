// kth distinct string in an array

// a distint string is a string that is pressent only once in an array

// What is the problem? 
// Given an array of strings arr, and an integer k, return the kth distinct string present in arr.
// if there are fewer than k distinct strings, return an empty string ''

// strings are considered in the order in which they appear


// iterate through each string in the array. We will check each one and store its count 
// we are storing the count to see if there is only one of a certain letter
// - if we see the character for the first time we will store it
// - if we see it again we will add to the count 

// we will check if the values (the count) are equal to one
// if they are equal to one then we will compare the count with the kth element 
// if there is fewer than k distring strings then we will return an empy string


var kthDistinct = function(arr, k) {
    let characterCount = {};
    let count = 1;

    for (let i = 0; i < arr.length; i++){ 
        if (characterCount[arr[i]]){
            characterCount++
        } else {
            characterCount = 1;
        }
    }

    for (let key in characterCount){
        if (characterCount[key] == 1)
        if (count == k){
            return key
        } else {
            count++
        }
    }
    return "";
    };

// first hashmap would create 
// 'd' : 1
// 'b' : 2
// 'c' : 2
// 'a' : 1



// Given array arr, give me a map of the count 
// of each number in the array.
var arr = [1,1,2,2,2];
var f = function(arr) {
    const map = {};
    for(let i = 0; i < arr.length; i ++) {
        if (map[arr[i]]) {
            map[arr[i]]++;
        } else {
            map[arr[i]] = 1;
        }
    }
    return map; 
}

f(arr) == {
    1: 2, 
    2: 3
};


var canBeEqual = function(target, arr){
     target.sort();
     arr.sort();

     for (let i = 0; i < arr.length; i++){
         if (target[i] !== arr[i]){
             return false;
         }
     }
    return true;
};


// given to integer arrays
// target = [1,2,3,4]
// arr = [2,4,1,3]

// true 

// start by sorting both inputs to be in order
// iterate through arr 
// check if items in arr are equal to items in target
// if they aren't return false
// if they are return true


// linear - check every single element 
// nested for loop expenential 

// most nested for loops take too long
// and we can still use them



// cheching through 


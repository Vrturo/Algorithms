// what is the problem?
// we are given an array of integers 
// if the number of occurences of each value is unique then we will return true.
// 3 - 1s, 2 - 2s, 1 - 3, return true


// general summary 

// to solve this we will need to track the count of each value 
// check if they are unique 
// if each of the counts are unique then we will return true


// create another hashmap saving unique only 
// unique characters 

// check through occurences 
// unique hashmap 


var uniqueOccurrences = function(arr) {
    
    const characterCount = {};   // setting empty map 
   // let numCount = 0;   // set count variable 
    
    for (let i = 0; i < arr.length; i++){   //looping through keys in hashmap
        const currentNumber = arr[i]
        
        // storing hashmap
        if (characterCount[currentNumber]){  
             // if its the second time we are seeing it add
            characterCount[currentNumber] += 1;   
        } else {
            // if its the first time we see it set it to one
            characterCount[currentNumber] = 1;   
        }
    }
    
    const uniqueOccurences = {};// seeing if counts are unique 
    // check every single value of characterCount
    // count - if we havent see it in there before then its true 
    // checking them 
    // i should only find them one time 
    // saving counts that we already checked into the new hashmap
      for (let key in characterCount){ // check if its there
        let count = characterCount[key];
         if (!uniqueOccurences[count]){
           uniqueOccurences[count] = true;
         } else {
             return false;
         }
    }
      return true;
};


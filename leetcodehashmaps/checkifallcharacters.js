// hashmap 

//'a' : 2
//'b' : 2
//'c' : 2

var areOccurrencesEqual = function(s) {
    const characterCount = {};   // setting empty map 
    let lastCount = 0;   // set count variable 
    
    for (let i = 0; i < s.length; i++){   //looping through keys in hashmap
        const currentCharacter = s[i]
        
        // storing hashmap
        if (characterCount[currentCharacter]){  
             // if its the second time we are seeing it add
            characterCount[currentCharacter] += 1;   
        } else {
            // if its the first time we see it set it to one
            characterCount[currentCharacter] = 1;   
        }
    }
 
    for (let key in characterCount) {
        let characterCountOfKey = characterCount[key]; // set variable to for value
        if (!lastCount){           // if count is 0
            lastCount = characterCountOfKey; // set count to 2 
        } else {
            if (lastCount !== characterCountOfKey) { 
                return false;
          
            }
        }
    } 
  return true;   
        
};


// iterate through string
// store key letter value count
// if its there for the first time, store, if its there again +1
// if value has same number of occurences then return true 


// first for loop we are setting the counts
// second for loop we are comparing the counts

// Whats the problem? 
// Given a string of lowercase alphabetical letters 
// if all characters in the string have equal number of occurences we will return true
// if they do not we will return false 

// Summary
// 1. we will need to use a hashmap to store the count of the characters in the string
// 2. using a for loop to iterate, if we see the character for the first time we will set it to Int16Array
// if we see it again we will add 1.
// 3. Hashmap is now created.

// 4. Now we are going to check the value(count of characters created in map)
// 5. We are going to create a count variable to keep track of number of occurences
// 6. If the last count is 0 then we will set it to the value 
// 7. if our count is not equal to the value then we will return false
// 8. if counts are equal then we will keep iterating through until all values/counts are checked
// 9. if all are equal the loop ends and we can return true 

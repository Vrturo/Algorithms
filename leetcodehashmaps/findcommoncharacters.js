/**
 * @param {string[]} words
 * @return {string[]}
 */
 var commonChars = function(words) {
    const commonCharacter = {};
    // save letter and count 
    const duplicateString = [];
    
       for (let i = 0; i < words.length; i++){
           const currentWord = words[i]
           
           for (let j = 0; j < currentWord.length; j++){
               const currentLetter = currentWord[j]
                // here lets check and update letters in hashmap as we need
               if(commonCharacter[currentLetter]) {
                    commonCharacter[currentLetter] += 1
                   
                    if(commonCharacter[currentLetter] === 3) {
                      duplicateString.push(currentLetter)
                      commonCharacter[currentLetter] = 0 
                    }
                } else {
                    commonCharacter[currentLetter] = 1
               }
           }    
       }
    
    return duplicateString;

};

// what is the problem? 
// we are given an array words
// we are asked to return an array of all characters that show up in all strings within the words - including duplicates 
// **  and can be returned in any order

// start by iterating through 









    // for loop through input -
    // we need to check letters, but input has words -
    // create nested for loop on words to check for letters -
       // reference trips problem -
    // count the letters -
      // if letter is in hashmap, update count -
      
      // check if letter is in hashmap 
        // if letter is in hashmap,
            // access hasmap using the letter as a key
            // access/get letter value in hasmap  
          
        // if letter isnt in hashmap (else) 
         // update count 
         // set hashmap using letter as key and setting the value to 1 (= 1) 
    


    
    
    
    //Accessing hashmap example
       // commonCharacter['b']
    
    // Setting Hashmap example
        // commonCharacter['b'] = 1
    
    // Update Hashmap example
        // commonCharacter['b'] = commonCharacter['b'] +1
    
    
    
    
    // for loop examples
    // not nested
    //for loop. some thing happens foor loop ends
    // for loop 2. | something happens | for loop2 ends
    
    // nestted for loop
    // for loop1
       // for loop2
          //something happens. 
      // for loop2. 
    //for loop1 ends



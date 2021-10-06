/*
  anagramPalindrome
  
  Write a function which accepts an input word (in string format) and returns true
  or false if there exists an anagram of that input word that is a palindrome.
  
  palindrome = 'dad' , 'mom' , 'racecar' aabaa  aabbbaa   // any amount of evens
                                                          // only one letter can be odd 
  
  anagram = 'act' => 'cat', 'tac' , 'tca', 'atc'...
  
  anagramPalindrome('carrace') => true
                        i
  
  characterCount = {c : 1    characterCount = 
                    a : 1
                    r : 2}                             // make sure understand question 
  
  characterCount = {r : 2
                    a : 2
                    c : 2
                    e : 1}  
  
  anagramPalindrome('cutoo') => false
  
 */

  var anagramPalindrome = function(word) {
    const characterCount = {};
    let oddCharacterCount = 0;
    
    // Create Map
    for (let i = 0; i < word.length; i++){
      if (characterCount[word[i]]){
          characterCount[words[i]] += 1;
      } else {
          characterCount[words[i] = 1
      }
    }

    // Check rules
    for (let [key, value] of characterCount) { 
     // for (let [key, value] of map)
   
     if (value % 2 == 1){
       oddCharacterCount++
     }
     
     if (oddCharacterCount > 1){
        return false;
      }
    }
    return true;
         // if character is even then do nothing 
         // if odd store it by equaling it to 1 
         // check to see if it was there before if so return false 
          
};
                             
 
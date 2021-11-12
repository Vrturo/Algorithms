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
    let oddCount = 0;
    
    // Create Map
    for (let i = 0; i < word.length; i++){
      if (characterCount[word[i]]){   //if it exists 
          characterCount[word[i]] += 1; // add one
      } else {
          characterCount[word[i]] = 1 // if it wasnt there set it to 1 
      }
    }

    // Check rules
    for (let [key, value] of characterCount) { 
     // for (let [key, value] of map)
       if (value % 2 == 1){ // if value is odd
         if (oddCount === 0){ // if we haven't seen it yet
           oddCount = 1; // set it to one 
         } else {
           return false; //if we have seen it return false 
         }

         return true; // go through entire loop if we have never seen it then we will return true 

       };



    //  if (value % 2 == 1){
    //    oddCharacterCount++
    //  }
     
    //  if (oddCharacterCount > 1){
    //     return false;
    //   }
    // }
    // return true;
         // if character is even then do nothing 
         // if odd store it by equaling it to 1 
         // check to see if it was there before if so return false 
          
};
                   

//   logic

// trying to find out if the given string of letters (anagram) is also a palindrom

// characters have to be even and there can not be more than one odd

// therefore if we find there is more than one odd, it will return false

// return true if we find no odds or if we find one letter as odd


// first we are going to iterate through the given string and store the count.

// if we see the character for the first time we will set it to one

// if we see it again we will add one

// this creates our hashmap


// second part is we will check the values

// using a count variable we will track the count of odds

// if we find an odd for the first time we will set to one

// if there is more than one we will return false 

// if we make it though the entire loop then we never found an odd or more than one and we can return true 


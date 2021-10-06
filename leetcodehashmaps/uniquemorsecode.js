/**
 * @param {string[]} words
 * @return {number}
 /** steps
  * returning how many different combinations of words we have using example
  * Morse code - can result in same code for different words 
  * see how many unique words we have in total 
  * using example 1, go through string/array of words 
  * key is the word/ morse code - value is the count
  * 1. going through array
  * 2. changing to morse code
  * 3. counting how many are the same 
  * 
  * Hashmap?:
  * "gin" -> "--...-."   = 1 
  * "zen" -> "--...-."   = 2
  * "gig" -> "--...--."  = 1
  * "msg" -> "--...--."  = 2
  * idk counting it out there is 2 of each version of the morse code 
  * define the codes - copied from example index 0 - 25
  * two functions - 
  * iterate through words and push result 
  * iterate through morse code index 0 - 25
  * set count and set keys (structure)
  * if the structure does not have morse rep then we will increase count by 1 
  * 
  */
  const codes = 
  [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

const wordToMorse = function(word) {
   const result = [];

   for (let i = 0; i < word.length; i ++) {
      const currentLetter = word[i];
      // charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
      // in this case we need the a - z code units which are 97 - 122
      // example: 'a'.charCodeAt() -> 97 | 'z'.charCodeAt() -> 122
      // We subtract 97 from the result integer, to make sure we always start at 0
      // We start at 0 because the codes array has the a - z morse characters starting with the letter 'a' on the first item in the array
      const index = currentLetter.charCodeAt() - 97;
      const code = codes[index];
      result.push(code);
   }
   return result.join('');
}

var uniqueMorseRepresentations = function(words) {
   let uniqueCount = 0;
   const morseCodesFound = {};

   words.forEach(word => {
      const morseCode = wordToMorse(word);

      if (!morseCodesFound[morseCode]) {
         uniqueCount += 1;
         morseCodesFound[morseCode] = true;

      };
   });
   return uniqueCount;
};


//Output: 2 

//





/** International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

'a' maps to ".-",
'b' maps to "-...",
'c' maps to "-.-.", and so on.
For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
Return the number of different transformations among all words we have.


/**Example 1:

Input: words = ["gin","zen","gig","msg"]
Output: 2
Explanation: The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."
There are 2 different transformations: "--...-." and "--...--.". */


/**Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 12
words[i] consists of lowercase English letters.
 */


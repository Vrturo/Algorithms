/**Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters. */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    const letterCount = {}
    // for anagrams if the strings do not match, letters are not the same ammount, it cannot be an anagram
    // set false if lengths don't match 
    if (s.length !== t.length) {
        return false
    }
    // iterate over first string 's'
    // if we have not seen the letter before we will add it
    // if we have seen it before we will add 1
    for (let letter of s){
        if (letterCount[letter] === undefined){
            letterCount[letter] = 1;
        } else {
            (letterCount[letter]++);
        }   
    }
    // iterate over second string 't'
    // if the letter in 't' is not in the first word (undefined)
    // this means it is not an anagram so we will return false
    for (letter of t){
        if (letterCount[letter] === undefined){
            return false;
        }
        // check if count of letter exceeds the count of letter in the first word
        if (letterCount[letter] < 1){
            return false;
        }
        // current count of letter we are on does not exceed count of letter of first word, decrement letter 
        letterCount[letter]--;
    }
    
    // pass all steps it is an anagram return true
    
    return true;
};

// anagram - word or phrase that can use the same letters to be rearranged into a different word
// input is two strings - words
// checking to see if second word is anagram of first word
// output is either true or false 
// hashmap is letter and count 
// iterate through both strings and count them
// if letter in second string exists in first string then add 1 
// example hasmpap
// 'abc' 'cba'
//'a' : 1
//'b' : 2
//'c' : 3
// start with first letter in data structure its not there, write a, 1, keep moving. When on to second data structure if you dont have it you will add it, if it is there you will add to the count 
// If the data structures are not the same length we can immediatly return false.


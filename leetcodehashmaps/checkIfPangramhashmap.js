/**A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:

Input: sentence = "leetcode"
Output: false */

/**
 * @param {string} sentence
 * @return {boolean}
 */
                    // sentence is 'input string'
                    var checkIfPangram = function(sentence) {
                        const dictionaries = {};
                              // object/hashmap variable
                       // iterate through the string using sentence.length
                        for (i = 0; i < sentence.length; i++) {
                            // accessing the key setting it to the value
                            dictionaries[sentence[i]] = true
                        }
                            /** can be seen as if(26 == Object.keys(dictionaries).length){
                                return true {
                                    else {
                                        return false 
                                    }
                                }
                                // meaning if each unique string is equal to 26 then it returns true 
                            } */
                         return 26 == Object.keys(dictionaries).length
                    };
                    
                    // set empty hashmap 
                    // check if every letter of the alphabet is in the sentence 
                    // using example 
                    
                    // iterate through sentence 
                    // check if we have as many characters as in the alphabet
                    // solution: check if hashmap stored 26 unique (keys) characters, from sentence/input provided
                    // Object.keys(x).length
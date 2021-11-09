// maximum number of words you can type 

// given a string of words separated by a single space
// given a string of letters
// we are asked to return the number of words that do not contain the letters in the second string


// example: 

// input: text = "hello world"
// brokenLetters = "ad"
// output: 1 because we can only type hello because the d is broken in world


// 


var canBeTypedWords = function(text, brokenLetters) {
    const words = text.split(' ') // using .split turns "hello world" into "hello", "world"
    let result = 0; // we will be returning the result so set a result to 0
    
    for (let i = 0; i < words.length; i++){  // iterate through words
        let matchCount = 0; 
        let currentWord = words[i]; // set letter variable
        for (let j = 0; j < currentWord.length; j++){ // iterate through the letters in the first string
            let currentLetter = currentWord[j]; // this is setting letter variable
            for (let k = 0; k < brokenLetters.length; k++){ // 
                let curBrokenLetter = brokenLetters[k];
                if (currentLetter === curBrokenLetter){
                    matchCount++
                }
            }
        }
     if (matchCount === 0){
         result++
     }   
    }
    return result;
};




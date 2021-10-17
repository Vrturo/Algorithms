// allowed = (string) "ab"
// words = (array) ["ad", "bd", "aaab", "badab"]

// return the number of consistent strings in the array 'words'


//logic

// logic
// returning the number of string words that are also in allowed 
// start with iterating through allowed 
// iterate through allowed - set characters in allowed to true 
// iterate through words 
// iterate through word
// if word is in allowed increment count
// return count 


// alternate solution using set not hashmap

var countConsistentStrings = function(allowed, words) {
    let res = 0;
    
    allowed = new Set(allowed);
    
    for (let word of words)
        res += isAllowed(word);
    
    return res;
    
    function isAllowed(word){
        for (let c of word)
            if (!allowed.has(c))
                return false;
        return true;
    }
};



// what is the problem? 

// we are given a string (allowed) consisting of distint characters and an array of string (words)
// a string is considered consistent if all characters in the string appear in allowed 
// the output will be the number of consistent strings in the array words 

// and example is:
// allowed = "ab" , words = ["ad", "bd" , "aaab" , "baa" , "badab"]
// the output would be 2 because 'aaab' and 'baa' are the same characters that are in the allowed string

//logic 


// first iteration will be through string allowed
// we will set these characters into the hashmap

// then we will iterate through words
// then we will iterate through word of words 

// if the characters in each string of words match the characters of allowed
// then we will return true
// we will track this using the count 



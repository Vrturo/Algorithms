// allowed = (string) "ab"
// words = (array) ["ad", "bd", "aaab", "badab"]

// return the number of consistent strings in the array 'words'

var countConsistentStrings = function(allowed, words) {
    const characterCount = {};
    let letterCount = 0;

    for (let i = 0; i < allowed.length; i++){
        characterCount[allowed[i]] = true;
    }
    
    for (let i = 0; i < words.length; i++){
       if (characterCount[words[i]]){
           letterCount++;
       }
    }
    return letterCount;
};

// incorrect solution 



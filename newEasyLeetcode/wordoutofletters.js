
// problem 

// input: word: banana   letters: banannzz  false
// word: food   letters: foooooood  true

// return true you can make word from letters



// psuedo code 


// if letters length is is less then word length then it is already false 

// for loop - iterate through letters
// set hashmap up - if we see it for the first time set to 1 
// if we see it again increment the count

// for loop - iterate through words 
// if the map does not contain word[i] return false
// if it does subtract the count 

// if we make it through without returning false - return true 



// code 


var findLetters = function(word,letters){
    const map = {};
    
    if (letters.length < word.length) {
        return false; 
    }

    for (let i = 0; i < letters.length; i++){
        if (!map[letters[i]]){
            map[letters[i]] = 1
        } else {
            map[letters[i]] ++
        }
    }

    for (let i = 0; i < word.length; i++){
        if (!map[word[i]]){
            return false
        } else {
           const newSum = map[word[i]] - 1
           map[word[i]] = newSum 
        }
    }
    return true;
};


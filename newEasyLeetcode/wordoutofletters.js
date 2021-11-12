
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
    const map = {}; // no point in having a map here if we'll potentiall never use it.
    // if letters is less than word we'l never use it. This should be under the length check.
    
    if (letters.length < word.length) {
        return false; 
    }

    for (let i = 0; i < letters.length; i++){
        if (!map[letters[i]]){
            map[letters[i]] = 1
        } else {
            map[letters[i]] ++ // you need to get better at ++ vs. +=
            // for loops are the only place you want to use ++. Everywhere else if you use ++ it won't save the new value
            // Should be -> map[letters[i]]+= 1
        }
    }

    for (let i = 0; i < word.length; i++){
        if (!map[word[i]]){
            return false
        } else {
           const newSum = map[word[i]] - 1
           map[word[i]] = newSum 
           // this works but lets do 
           // map[word[i]] -= 1
           // Reason being less variables is always better, but readability is always something to consider.
            // issue is I think -= 1 is actually easier to read
        }
    }
    return true;
};


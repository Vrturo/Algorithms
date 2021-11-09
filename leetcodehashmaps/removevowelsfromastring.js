// remove voewls from a string
// given a string s, remove the vowels 'a','e','i','o', and 'u' from it, and return the new string

// s = "aeiou"
// output - ""

// iterate through string 
// checking if the items are a vowel
// push all of the characters that are left over into the result 

var removeVowels = function(S) {
    let result='';
 
      for (let i = 0; i < S.length; i++){
         if(S[i]!=='a'&&S[i]!=='e'&&S[i]!=='i'&&S[i]!=='o'&&S[i]!=='u'){
            result+=S[i]
       }
    }
  return result;
};

//hashmap

var removeVowels = function(S) {
    let result='';
    var map = {
    'a' : true,
    'e' : true,
    'i' : true,
    'o' : true,
    'u' : true,
    };

    for (let i = 0; i < S.length; i++){
       if(!map[S[i]]){
          result+=S[i]
      }
    }
  
  return result;
};

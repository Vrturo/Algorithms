// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

 // what why 

 // store the vowels beacuse we are going to need to check them later - us creating our hashmap
 // check to see if there are vowels in the given string/ we track this by checking if its in the hashmap - to do this we will need to use a pointer one coming from left one coming from right to check the items at the same time
 // then once we identify vowels we will swap them 
 // then we will return the given string with its vowwels reversed  

// Example 1:

// Input: s = "hello"
// Output: "holle"



function reverseVowels(s){
    
    const vowels = {};
    for (const char of 'aeiouAEIOU') {
          vowels[char] = true;
    }
  
    const characters = s.split("");
  
    let left = 0; // left stars first character of the array
    let right = s.length - 1; // right starts on the last character 
  
    // this section goes through and sees if there are pointers 
    while (left < right) {
      while (left < right && !(s[left] in vowels)) { //if the left pointer is not at a valid vowel keep moving do same for right pointer 
              left += 1;
          }
          
      while (left < right && !(s[right] in vowels)) { // same for right pointer
              right -= 1;
          }
          
      swap(characters, left, right); // once the pointers are at valid vowels then we will swap them using the swaper function at the bottom
           left += 1;
           right -= 1;
      }
  
      return characters.join(""); // turn array back into string
  }
  
  function swap(arr, i, j) {
      const temp = arr[i]
      arr[i] = arr[j];
      arr[j] = temp;
  };


  // use pointers to check at the same time 


  // 1. set empty hashmap to store the vowels
  // 2. for loop to iterate over string with vowels 
  // 3. set key as vowels and set value to true 

  // 4. now we turn the string into an array to be able to modify - because we cant modify string directly 
  // 5. next we use pointers left and right to swap if they are vowels, keep shrinking if necessary until everything is swapped
  // 6. create a swap function to swap the indices of the vowels 
  // 7. then use that function to swap
  // 8. turn array back into string and return the given string with vowels reversed 



  function reverseVowels(s){
    
    const vowels = {
        'a': true,
        'e': true,
        'i' : true,
        'o' : true,
        'u' : true,
        'A' : true,
        'E' : true,
        'I' : true,
        'O' : true,
        'U' : true,
    }
    
      const characters = s.split("");
    
      let left = 0;
      let right = s.length - 1;
    
      while (left < right) {
        while (left < right && !(s[left] in vowels)) { //if the left pointer is not at a valid vowel keep moving do same for right pointer 
                left += 1;
            }
            
        while (left < right && !(s[right] in vowels)) { //if the left pointer is not at a valid vowel keep moving do same for right pointer 
                right -= 1;
            }
            
        swap(characters, left, right);
             left += 1;
             right -= 1;
        }
    
        return characters.join("");
    }
    
    function swap(arr, i, j) {
        const temp = arr[i]
        arr[i] = arr[j];
        arr[j] = temp;
    };
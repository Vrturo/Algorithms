
// input: [1, -4, 2, 3, 4, -1, 5]
// output: [1, 4]


// {
//    1 : 1
//    -4 : 1
//    2 : 1
//    3 : 1
// }

// result = [4, 1]

// 1. we are looking through the array and checking to see if the integer has its opposite in the array
// 2. if it does we will return the positive integer in the array

// - Create result array
// - iterate through the array
// - check to see if ineger has been seen before - if it has - set to 1
// - check to see if the opposite is there
// - if it is push the positive integer into the result 


const complementPair = (arr) => {

  const oppNumber = {};
  let result = [];

  for (let i = 0; i < arr.length; i++){
    let number = arr[i];

    let opposite = number * -1; // if we want to check the opposite we need to multiply by negative one 
    // we have access to opposite by multiplying by negative 1 

    // if we see the character for the first time save it
    if (!oppNumber[number]){
        oppNumber[number] = 1;  
    } 

    // checking for opposite 
    if (oppNumber[opposite]){
      // how to check if an integer is positive
      // if number is greater than zero 
      if (number > 0){
        // push positive into array 
        result.push(number)
      } else { // if not 
        // if its less than 0 or 0
        result.push(opposite)
        // }
      }
      
    }
  }
return result;
};

let test = [1, -4, 2, 3, 4, -1, 5]

console.log(complementPair(test));

// let test = 6;

// console.log("TEST: ", test);

// let opposite = test * -1;

// console.log("OPPOSITE: ", opposite);


// problem is?
// what the output 

// approach 


// Approach
// check each item, save positives
// check opposite muliply by negative one if we have too

// Steps 
// if we see number for first time we are going to save it
// as we are saving numbers we are going to check for opposites
// if the current number we are checking is positive we can push into result
// if it is less than zero we push the opposite
// keep going through each item until we go through all
// then we can return that 


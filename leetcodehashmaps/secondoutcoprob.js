
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
  const negativePositive = {};
  let result = [];

  for (let i = 0; i < arr.length; i++){
    let integerIndex = arr[i];

    let opposite = integerIndex * -1;

    // if we see the character for the first time set to 1
    if (!negativePositive[integerIndex]){
        negativePositive[integerIndex] = 1;  
    } 

    // if we see the opposite character then we return into array 
    if (negativePositive[opposite]){
      // push the positive of integerIndex or opposite to result 
      // how to check if an integer is positive
      // if number is greater than zero 
      if (integerIndex > 0){
        // push positive into array 
        result.push(integerIndex)
      } else {
        // if (integerIndex < 0){
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


/** Linear Search
 Problem: given an array arr[] of n elements, write a function to seatch a given element x in arr[]
 Example: arr[] = {10, 20, 80, 30, 60, 50, 110, 100, 130, 170}
 x = 110;
 Output: 6
 Element X is present at index 6
 function search (arr, n, x){
     for (i - 0; i < n; i++)
        if (arr[i] == x)
        return i;
    return -1; // else
 }
 */


 /** Multiple Pointers
  * Problems involving arrays, lists, and strings can require us to iterate with more than one pointer
  * Javascript has for loops that are more flexible and can be easily customized to hangle two or more pointers, so can a while loop
  * When there are multiple pointers to keep track of, avoid using built in iterators that simply loop from left to right 
  * iterating from both sides... used for combining values, or multiple inputs 
  * An algorithm that requires one to swap a bunch of values may require multiple pointers
  */

 /** Frequency Counting
  * technique that can be used to solve problems what requires tracking, counting, or looking up values
  * array, hashtable, string
  * problem should involve matching, counting, confirming values in the collection
  * hashtable: general all purpose use
  * array: values in the collection that are of a small range of integer values
  * set: if only needed to track if something exists
  * to populate the count we would have to loop through our input collection
  example:
  Given an array of integers, and a target value determine if there are two integers that add to the sum
  function twoSum(numbers, target){
      let hash = {};
      let current;
      for (let i = 0; i < numbers.length; i++){
          current = numbers[i];
          if (hash[current]) {
              return true;
          }
          hash[target - current] = true;
      }
      return false
  }
  */

 /** Basic Sorting: Insertion Selection, & bubble sort are basic sorts.
  * There are often many ways to solve the same problem.
  */

 /** Develop a Process for Problem Solving 
  Framework:
  1. Understanding the problem
     - ask clarifying questions
     - get the inputs, outputs, constraints (time/space)
     - get example case, edge conditions
     - clarify what functions/methods you have to work with
  2. Exploration of solutions
     - Communicate aloud (or with interviewer)
     - Diagramming (pencil/paper or on the whiteboard)
     - Explain the naive solution
     - Brainstorm
  3. Solution Analysis
     - Complexity analysis to verify solutions
     - Verifying solution edge conditions
  4. Coding
     - Pseudocoding
     - Coding out solution from pseudocode
     - Run example cases
     - Checking edge conditions
  */
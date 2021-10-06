/**Variables

Variables hold reusable data in a program and associate it with a name.
Variables are stored in memory.
The var keyword is used in pre-ES6 versions of JS.
let is the preferred way to declare a variable when it can be reassigned, and const is the preferred way to declare a variable with a constant value.
Variables that have not been initialized store the primitive data type undefined.
Mathematical assignment operators make it easy to calculate a new value and assign it to the same variable.
The + operator is used to concatenate strings including string values held in variables
In ES6, template literals use backticks ` and ${} to interpolate values into a string.
The typeof keyword returns the data type (as a string) of a value. */

/**Else/If/Conditional Statements
 These if-else decisions can be modeled in code by creating conditional statements. A conditional statement checks a specific condition(s) and performs a task based on the condition(s).
 */


 /** If Statement
  * if (true) {
  console.log('This message will print!');
  }
  if - keyword followed by () which is followed by coed block/statement 
  then curly braces{}
  - Inside the curly braces is what is going to execute 
  */

  /** If...Else Statements
In the previous exercise, we used an if statement that checked a condition to decide whether or not to run a block of code. In many cases, we’ll have code we want to run if our condition evaluates to false.

If we wanted to add some default behavior to the if statement, we can add an else statement to run a block of code when the condition evaluates to false. Take a look at the inclusion of an else statement:

if (false) {
  console.log('The code in this block will not run.');
} else {
  console.log('But the code in this block will!');
}
 
// Prints: But the code in this block will!
An else statement must be paired with an if statement, and together they are referred to as an if...else statement.

In the example above, the else statement:

Uses the else keyword following the code block of an if statement.
Has a code block that is wrapped by a set of curly braces {}.
The code inside the else statement code block will execute when the if statement’s condition evaluates to false.
if...else statements allow us to automate solutions to yes-or-no questions, also known as binary decisions.
*/

/**Comparison Operators
When writing conditional statements, sometimes we need to use different types of operators to compare values. These operators are called comparison operators.

Here is a list of some handy comparison operators and their syntax:

Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
Is equal to: ===
Is not equal to: !== */

/**Logical Operators
Working with conditionals means that we will be using booleans, true or false values. In JavaScript, there are operators that work with boolean values known as logical operators. We can use logical operators to add more sophisticated logic to our conditionals. There are three logical operators:

the and operator (&&)
the or operator (||)
the not operator, otherwise known as the bang operator (!) */

/**Truthy and Falsy
Let’s consider how non-boolean data types, like strings or numbers, are evaluated when checked inside a condition.

Sometimes, you’ll want to check if a variable exists and you won’t necessarily want it to equal a specific value — you’ll only check to see if the variable has been assigned a value.

Here’s an example: 
let myVariable = 'I Exist!';
 
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}

The code block in the if statement will run because myVariable has a truthy value; even though the value of myVariable is not explicitly the value true, when used in a boolean or conditional context, it evaluates to true because it has been assigned a non-falsy value.

So which values are falsy— or evaluate to false when checked as a condition? The list of falsy values includes:

0
Empty strings like "" or ''
null which represent when there is no value at all
undefined which represent when a declared variable lacks a value
NaN, or Not a Number
Here’s an example with numbers:
let numberOfApples = 0;
 
if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}
 
// Prints 'No apples left!'

The condition evaluates to false because the value of the numberOfApples is 0. Since 0 is a falsy value, the code block in the else statement will run.*/

/** Ternary Operator 
 * In the spirit of using short-hand syntax, we can use a ternary operator to simplify an if...else statement.

Take a look at the if...else statement example:
let isNightTime = true;
 
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}
We can use a ternary operator to perform the same functionality:
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
In the example above:

The condition, isNightTime, is provided before the ?.
Two expressions follow the ? and are separated by a colon :.
If the condition evaluates to true, the first expression executes.
If the condition evaluates to false, the second expression executes.
Like if...else statements, ternary operators can be used for conditions which evaluate to true or false.
 */

/**
 * Else If Statements
We can add more conditions to our if...else with an else if statement. The else if statement allows for more than two possible outcomes. You can add as many else if statements as you’d like, to make more complex conditionals!

The else if statement always comes after the if statement and before the else statement. The else if statement also takes a condition. Let’s take a look at the syntax:
 */

/**let stopLight = 'yellow';
 
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}
//** The else if statements allow you to have multiple possible outcomes. if/else if/else statements are read from top to bottom, so the first condition that evaluates to true from the top to bottom is the block that gets executed.

In the example above, since stopLight === 'red' evaluates to false and stopLight === 'yellow' evaluates to true, the code inside the first else if statement is executed. The rest of the conditions are not evaluated. If none of the conditions evaluated to true, then the code in the else statement would have executed.*/

/** 
The switch keyword
else if statements are a great tool if we need to check multiple conditions. In programming, we often find ourselves needing to check multiple values and handling each of them differently. For example: */

/**
 * let groceryItem = 'papaya';
 
if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}
 */

/**In the code above, we have a series of conditions checking for a value that matches a groceryItem variable. Our code works fine, but imagine if we needed to check 100 different values! Having to write that many else if statements sounds like a pain!

A switch statement provides an alternative syntax that is easier to read and write. A switch statement looks like this: */

/**let groceryItem = 'papaya';
 
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
 
// Prints 'Papayas are $1.29' */


/**The switch keyword initiates the statement and is followed by ( ... ), which contains the value that each case will compare. In the example, the value or expression of the switch statement is groceryItem.
Inside the block, { ... }, there are multiple cases. The case keyword checks if the expression matches the specified value that comes after it. The value following the first case is 'tomato'. If the value of groceryItem equalled 'tomato', that case‘s console.log() would run.
The value of groceryItem is 'papaya', so the third case runs— Papayas are $1.29 is logged to the console.
The break keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block. Note: Without break keywords, the first matching case will run, but so will every subsequent case regardless of whether or not it matches—including the default. This behavior is different from if/else conditional statements that execute only one block of code.
At the end of each switch statement, there is a default statement. If none of the cases are true, then the code in the default statement will run. */

/** 
 * Function Declarations 
 * The switch keyword initiates the statement and is followed by ( ... ), which contains the value that each case will compare. In the example, the value or expression of the switch statement is groceryItem.
Inside the block, { ... }, there are multiple cases. The case keyword checks if the expression matches the specified value that comes after it. The value following the first case is 'tomato'. If the value of groceryItem equalled 'tomato', that case‘s console.log() would run.
The value of groceryItem is 'papaya', so the third case runs— Papayas are $1.29 is logged to the console.
The break keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block. Note: Without break keywords, the first matching case will run, but so will every subsequent case regardless of whether or not it matches—including the default. This behavior is different from if/else conditional statements that execute only one block of code.
At the end of each switch statement, there is a default statement. If none of the cases are true, then the code in the default statement will run.
 */
/**function keyword   identifier */
/**       function greetWorld() {
 *           console.log('Hello, World');
 * }
 * A function declaration consists of:

The function keyword.
The name of the function, or its identifier, followed by parentheses.
A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, { }.
A function declaration is a function that is bound to an identifier, or name. In the next exercise we’ll go over how to run the code inside the function body.

We should also be aware of the hoisting feature in JavaScript which allows access to function declarations before they’re defined.

Take a look at example of hoisting:
greetWorld(); // Output: Hello, World!
 
function greetWorld() {
  console.log('Hello, World!');
}
 */
/** Notice how hoisting allowed greetWorld() to be called before the greetWorld() function was defined! Since hoisting isn’t considered good practice, we simply want you to be aware of this feature.

*/

//Function 
/** function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.');
}

function sayThanks(name) {
  console.log('Thank you for your purchase ' + name + '! We appreciate your business.')
}
sayThanks('Cole'); 
FUNCTIONS
Parameters and Arguments
So far, the functions we’ve created execute a task without an input. However, some functions can take inputs and use the inputs to perform a task. When declaring a function, we can specify its parameters. Parameters allow functions to accept input(s) and perform a task using the input(s). We use parameters as placeholders for information that will be passed to the function when it is called.

Let’s observe how to specify parameters in our function declaration:

JavaScript syntax for declaring a function with parameters
In the diagram above, calculateArea(), computes the area of a rectangle, based on two inputs, width and height. The parameters are specified between the parenthesis as width and height, and inside the function body, they act just like regular variables. width and height act as placeholders for values that will be multiplied together.

When calling a function that has parameters, we specify the values in the parentheses that follow the function name. The values that are passed to the function when it is called are called arguments. Arguments can be passed to the function as values or variables.

JavaScript syntax for invoking a function with arguments as values
In the function call above, the number 10 is passed as the width and 6 is passed as height. Notice that the order in which arguments are passed and assigned follows the order that the parameters are declared.

JavaScript syntax for invoking a function with arguments as variables
The variables rectWidth and rectHeight are initialized with the values for the height and width of a rectangle before being used in the function call.

By using parameters, calculateArea() can be reused to compute the area of any rectangle! Functions are a powerful tool in computer programming so let’s practice creating and calling functions with parameters.
*/

/** FUNCTIONS
Default Parameters
One of the features added in ES6 is the ability to use default parameters. Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.

Take a look at the code snippet below that uses a default parameter:*/
/** function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}
 
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger! */
/**In the example above, we used the = operator to assign the parameter name a default value of 'stranger'. This is useful to have in case we ever want to include a non-personalized default greeting!

When the code calls greeting('Nick') the value of the argument is passed in and, 'Nick', will override the default parameter of 'stranger' to log 'Hello, Nick!' to the console.

When there isn’t an argument passed into greeting(), the default value of 'stranger' is used, and 'Hello, stranger!' is logged to the console.

By using a default parameter, we account for situations when an argument isn’t passed into a function that is expecting an argument.

Let’s practice creating functions that use default parameters. */

/** Return Fuctions 
 * When a function is called, the computer will run through the function’s code and evaluate the result of calling the function. By default that resulting value is undefined.
 * function rectangleArea(width, height) {
  let area = width * height;
}
console.log(rectangleArea(5, 7)) // Prints undefined
In the code example, we defined our function to calculate the area of a width and height parameter. Then rectangleArea() is invoked with the arguments 5 and 7. But when we went to print the results we got undefined. Did we write our function wrong? No! In fact, the function worked fine, and the computer did calculate the area as 35, but we didn’t capture it. So how can we do that? With the keyword return!

function calculateArea (width, height) {
    const area = width*heigh;
    return area;
return keyword return value
}
To pass back information from the function call, we use a return statement. To create a return statement, we use the return keyword followed by the value that we wish to return. Like we saw above, if the value is omitted, undefined is returned instead.

When a return statement is used in a function body, the execution of the function is stopped and the code that follows it will not be executed. Look at the example below:
function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}
If an argument for width or height is less than 0, then rectangleArea() will return 'You need positive integers to calculate area!'. The second return statement width * height will not run.

The return keyword is powerful because it allows functions to produce an output. We can then save the output to a variable for later use.
 */

/** Helper Functions
 * Helper Functions
We can also use the return value of a function inside another function. These functions being called within another function are often referred to as helper functions. Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.

If we wanted to define a function that converts the temperature from Celsius to Fahrenheit, we could write two functions like:
function multiplyByNineFifths(number) {
  return number * (9/5);
};
 
function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};
 
getFahrenheit(15); // Returns 59
In the example above:

getFahrenheit() is called and 15 is passed as an argument.
The code block inside of getFahrenheit() calls multiplyByNineFifths() and passes 15 as an argument.
multiplyByNineFifths() takes the argument of 15 for the number parameter.
The code block inside of multiplyByNineFifths() function multiplies 15 by (9/5), which evaluates to 27.
27 is returned back to the function call in getFahrenheit().
getFahrenheit() continues to execute. It adds 32 to 27, which evaluates to 59.
Finally, 59 is returned back to the function call getFahrenheit(15).
We can use functions to section off small bits of logic or tasks, then use them when we need to. Writing helper functions can help take large and difficult tasks and break them into smaller and more manageable tasks.
 */

/** Function Expressions
Another way to define a function is to use a function expression. To define a function inside an expression, we can use the function keyword. In a function expression, the function name is usually omitted. A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.

Consider the following function expression:

const calculateArea = function (width, height) {
    const area = width * height;
    return area;
To declare a function expression:

Declare a variable to make the variable’s name be the name, or identifier, of your function. Since the release of ES6, it is common practice to use const as the keyword to declare the variable.

Assign as that variable’s value an anonymous function created by using the function keyword followed by a set of parentheses with possible parameters. Then a set of curly braces that contain the function body.

To invoke a function expression, write the name of the variable in which the function is stored followed by parentheses enclosing any arguments being passed into the function.
To declare a function expression:

Declare a variable to make the variable’s name be the name, or identifier, of your function. Since the release of ES6, it is common practice to use const as the keyword to declare the variable.

Assign as that variable’s value an anonymous function created by using the function keyword followed by a set of parentheses with possible parameters. Then a set of curly braces that contain the function body.

To invoke a function expression, write the name of the variable in which the function is stored followed by parentheses enclosing any arguments being passed into the function.

variableName(argument1, argument2)

Unlike function declarations, function expressions are not hoisted so they cannot be called before they are defined.

Let’s define a new function using a function expression.

Arrow Functions
ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” () => notation.

Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this:

const rectangleArea = (width, height) => {
  let area = width * height;
  return area;

  It’s important to be familiar with the multiple ways of writing functions because you will come across each of these when reading other JavaScript code.


};
} */
/** Global Scope
 * Scope is the context in which our variables are declared. We think about scope in relation to blocks because variables can exist either outside of or within these blocks.

In global scope, variables are declared outside of blocks. These variables are called global variables. Because global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks.

Let’s take a look at an example of global scope:
const color = 'blue';
 
const returnSkyColor = () => {
  return color; // blue 
};
 
console.log(returnSkyColor()); // blue
 */


/** Review: Scope
In this lesson, you learned about scope and how it impacts the accessibility of different variables.

Let’s review the following terms:

Scope is the idea in programming that some variables are accessible/inaccessible from other parts of the program.
Blocks are statements that exist within curly braces {}.
Global scope refers to the context within which variables are accessible to every part of the program.
Global variables are variables that exist within global scope.
Block scope refers to the context within which variables that are accessible only within the block they are defined.
Local variables are variables that exist within block scope.
Global namespace is the space in our code that contains globally scoped information.
Scope pollution is when too many variables exist in a namespace or variable names are reused.
As you continue your coding journey, remember to use best practices when declaring your variables! Scoping your variables tightly will ensure that your code has clean, organized, and modular logic. */


//Arrays
/** each item inside an array is called an element
 * We can also save an array to a variable
 */
//Accessing Elements
/** each element in an array has a numbered position known as its index. We can access individual items using their index, which is similar to referencing an item in a list based on the item's position. 
 * We access the element at index 0 in the array by doing example cities[0]
*/
//Updating Elements
/** once you have access to an element in an array, you can update its value
 * you can do this by putting variable[i] = 'Example'
 * Example would then be pushed into the array in place of what was already there
 */
// Accessing the number of items in an array
/** example: 
 * const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);
output: 3
*/
//Adding items to the end of an array
/** .push() allows us to add items to the end of an array
 * example: 
 * const itemTracker = ['item 0' , 'item 1', 'item 2'];
 * itemTracker.push('item 3', 'item 4');
 * console.log(itemTracker);
 */
//Removing an item from an array
/** .pop() method removes item from array  */


//Arrays and functions
/** 
 * const flowers = ['peony' , 'daffodil' , 'marigold'];
 * function addFlower(arr) {
 * arr.push('lily);
 * }
 * addFlower(flowers);
 * console.log(flowers);
 */

//Nester Arrays
/** arrays can store other arrays - when an array contains another array it is known as a nested array
 * example:
 * const nestedArr = [[1], [2, 3]];
 * using console.log(nesterArr[1]); will access second item of array 2,3
 */

//Loops
/** loops are often needed and with the word iterate - iterate refers to 'repeat' */
/** Loops iterate or repeat an action until a specific condition is met */

//for loops
/** a for loop contains three expressions seperated by ; inside the parentheses 
 * 1. initialization starts the loop and can also be used to declare the iterator variable
 * 2. a stopping condition is the condition that the iterator variable is evaluated against - if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop
 * 3. iteration statement is used to update the iterator variable on each loop
 * syntax looks like this:
 * for (let counter = 0; counter < 4; counter++) {
 * console.log(counter);
 * }
 * let counter = 0 - the loop will start counting at 0
 * counter < 4 - the loop will run as long as the iterator variable, counter is less that 4
 * iteration statement is counter++ - for each loop, the value of counter will increase by 1
 */

// Looping in reverse 
/** to loop in reverse we set the iterator variable to the highest desired value
 * set the stopping condition for when the iterator variable is less than the desired amount
 * iterator should decrease in intervals after each iteration
 */

//Looping through Arrays
/** use .length to access index of array using either less than .length or .length-1 */

//Nested Loops
/** example:
 const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};
each element in the outer loop array, my Array, the inner loop will run in its entirety comparing the current element from the outer array to
each element in the inner array, yourArray[j]
when it finds a match, it prints a string to the console.
 */

//While Loop
/** // A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}
 
// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
} 
The counterTwo variable is declared before the loop. We can access it inside our while loop since it’s in the global scope.
We start our loop with the keyword while followed by our stopping condition, or test condition. This will be evaluated before each round of the loop. While the condition evaluates to true, the block will continue to run. Once it evaluates to false the loop will stop.
Next, we have our loop’s code block which prints counterTwo to the console and increments counterTwo.
What would happen if we didn’t increment counterTwo inside our block? If we didn’t include this, counterTwo would always have its initial value, 1. That would mean the testing condition counterTwo < 4 would always evaluate to true and our loop would never stop running! Remember, this is called an infinite loop and it’s something we always want to avoid. Infinite loops can take up all of your computer’s processing power potentially freezing your computer.

So you may be wondering when to use a while loop! The syntax of a for loop is ideal when we know how many times the loop should run, but we don’t always know this in advance. Think of eating like a while loop: when you start taking bites, you don’t know the exact number you’ll need to become full. Rather you’ll eat while you’re hungry. In situations when we want a loop to execute an undetermined number of times, while loops are the best choice.
*/

//Look up Do While statements

//Break
/**
 * for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}
 
console.log('Orange you glad I broke out the loop!');
output:
Banana.
Banana.
Banana.
Orange you glad I broke out the loop!

break - statements can be helpful when looping through large data structures
   we can add test conditions besides the stopping condition and exit the loop when theyre met 
 */


// Higher-order functions
/**
 // Functions as data
 JavaScript functions behave like any other data tyle in the lang,
assign functions to variables and reassign them to new variables.

long function name example
const announceThatImDoingImportantWork = () => {
    console.log("I'm doing very important work!")
};

const busy = announceThatIAmDoingImportantWork;

busy ();
busy holds reference to the original function
 */
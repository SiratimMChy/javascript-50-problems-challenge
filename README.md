# JavaScript — 50 Problems Challenge

## Day 1 — Fundamentals, Arrays & Strings

1. **Positive, Negative, or Zero**
   Check whether a given number is positive, negative, or zero.
2. **Even or Odd**
   Check whether a given number is even or odd.
3. **Sum from 1 to N**
   Find the sum of all numbers from 1 to N.
4. **Factorial of a Number**
   Calculate the factorial of a given number.
5. **Maximum and Minimum**
   Find the largest and smallest numbers in an array.
6. **Count Even and Odd Numbers**
   Count how many even and odd numbers are present in an array.
7. **Reverse a String**
   Reverse a string without using the built-in reverse() method.
8. **Palindrome Check**
   Check whether a given string is a palindrome.

## Day 2 — Arrays, Strings & Array Methods

9. **Remove Duplicates**
   Remove all duplicate values from an array and return a new array containing only unique values.
10. **Second Largest Number**
    Find the second largest number in an array.
11. **Positive Numbers**
    Create a new array containing only the positive numbers from a given array.
12. **Square of Numbers**
    Create a new array containing the square of each number from a given array.
13. **Filter Adults**
    Given an array of people, return only the people whose age is 18 or older.
14. **Character Frequency**
    Count how many times each character appears in a given string.
15. **Longest Word**
    Find the longest word in a given sentence.
16. **Common Elements**
    Find the elements that are common between two arrays.

## Day 3 — Objects, Destructuring, Spread & Rest

17. **Object Destructuring**
    Given a student object, extract the name, age, and department properties using destructuring.
18. **Safe Property Access**
    Use optional chaining (?.) to safely access a property from a nested object.
19. **Default Value with Nullish Coalescing**
    Use nullish coalescing (??) to provide a default value when a property is null or undefined.
20. **Merge Objects**
    Merge two objects into a new object using the spread operator.
21. **Sum Object Values**
    Given an object containing numeric values, calculate the sum of all its numeric properties.
22. **Highest Paid Employee**
    Given an array of employee objects, find the employee with the highest salary.
23. **Extract Object Properties**
    Given an array of objects, create a new array containing only a specific property from each object.
24. **Sum Using Rest Parameters**
    Create a function that accepts any number of arguments using rest parameters and returns their total sum.

## Day 4 — Functions, Higher-Order Functions & Recursion

25. **Find the Largest Number**
    Create a function that accepts three numbers and returns the largest number.
26. **Callback Processor**
    Create a function that accepts an array and a callback function, then processes each array element using the callback.
27. **Execute a Function Twice**
    Create a higher-order function that accepts another function and executes it twice.
28. **Recursive Sum**
    Use recursion to calculate the sum of all numbers from 1 to N.
29. **Recursive String Reversal**
    Use recursion to reverse a given string.
30. **Prime Number Checker**
    Create a function that checks whether a given number is prime.
31. **Filter Even Numbers**
    Create a function that uses filter() to return only the even numbers from an array.
32. **Custom Map Function**
    Create a function that accepts an array and a callback, applies the callback to every element, and returns a new array.

## Day 5 — Closure, Currying & Performance

33. **Private Counter Using Closure**
    Create a counter using closure where the counter value cannot be accessed or modified directly from outside the function.
34. **Private User Data**
    Create a createUser() function using closure where user data remains private and can only be accessed through specific functions.
35. **Three-Level Currying**
    Create a curried function that allows the following syntax:
    `multiply(2)(3)(4)`
    It should return 24.
36. **Three-Level Currying**
    Create a curried function that allows the following syntax:
    `calculate(10)(20)(30)`
    It should return 60.
37. **Memoized Function**
    Create a memoized function that caches previously calculated results and avoids repeating the same calculation for the same input.
38. **Debounce Function**
    Implement a debounce function that executes a function only after a specified amount of time has passed since the last call.
39. **Throttle Function**
    Implement a throttle function that allows a function to execute at most once within a specified time interval.

## Day 6 — Asynchronous JavaScript & Event Loop

40. **Delayed Promise**
    Create a Promise that resolves with "Data loaded" after 2 seconds.
41. **Promise Success and Failure**
    Create a function that returns a Promise and properly handles both resolved and rejected states.
42. **Sequential Promises**
    Create three asynchronous operations and execute them sequentially, using the result of one operation in the next.
43. **Async/Await**
    Use async/await to retrieve and display the resolved value of a Promise.
44. **Handle Promise Errors**
    Use try...catch with async/await to handle a rejected Promise.
45. **Event Loop Output Prediction**
    Given a piece of code containing synchronous code, setTimeout, Promise callbacks, and async/await, predict the exact output order and explain why the output occurs in that order.
46. **Parallel Async Operations**
    Execute three asynchronous operations in parallel and retrieve all their results together.

## Day 7 — DOM & OOP

47. **Change Text with DOM**
    Create a button that changes the text of a paragraph when the button is clicked.
48. **Event Delegation**
    Create a list where click events on its items are handled using event delegation. The solution should also work for dynamically added items.

### OOP — 3 Problems

49. **Bank Account Class**
    Create a `BankAccount` class with a private `#balance` field. Implement `deposit()` and `withdraw()` methods and use getters/setters where appropriate. The balance should not be directly accessible from outside the class.
50. **Animal Inheritance & Polymorphism**
    Create an `Animal` parent class and `Dog` and `Cat` child classes. Use `extends`, `super()`, method overriding, and polymorphism. Each child class should implement its own version of the `sound()` method.

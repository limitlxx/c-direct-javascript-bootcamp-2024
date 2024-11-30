### Task Overview
The task is to complete the Addition function by adding a feature to check if the first parameter (params1) is greater than, less than, or equal to the second parameter (params2). Based on this comparison, you will update a text field in the HTML interface to show the comparison result.

### Instructions
Add an HTML Element for Output:

Find the <span> element in index.html with the id of "changeme". This is where you’ll display the comparison result (e.g., "x is greater than y").
Create a Comparison Function:

Inside index.js, define a new function called compareValues(x, y). This function should take two arguments, x and y, which represent the values entered in the params1 and params2 fields.
Implement the Comparison Logic:

Inside compareValues, add if, else if, and else statements to check the relationship between x and y.
- If x is greater than y, return the string "x is greater than y".
- If x is less than y, return the string "x is less than y".
- If x is equal to y, return the string "x is equal to y".

### Integrate compareValues with Addition:
In the Addition function, after calculating the sum z, call compareValues(x, y) and save the returned value in a variable, e.g., comparisonResult.
Update the <span> element with id="changeme" to display the comparisonResult.


## Read
1. Functions [https://www.w3schools.com/js/js_functions.asp]
2. Events [https://www.w3schools.com/js/js_events.asp]
3. If Else [https://www.w3schools.com/js/js_if_else.asp]
4. Operations [https://www.w3schools.com/js/js_operators.asp]
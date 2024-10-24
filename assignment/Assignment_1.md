# Assignment 

-- Create a html file >> index.html
-- Create a js file >> main.js
-- link your js file to your html file
-- Copy the below elements into your html and js file
-- Make sure code runs

```html

    <h1><span id="changeme" >Text here</span></h1>

    <button onclick="comparisonlist()">Click Me</button>

    <!-- Add Script tag here -->

```

```javascript

    const pi = 3.14;
    let r = 3;    

    function GetAreaofCircle() {  
        // pi = 7.89;  
        let formula = 2*pi*(r^2 )       
        document.getElementById("changeme").innerHTML = formula;
    }
```

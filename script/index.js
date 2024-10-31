    // Operators
    // =, +, *, /, >, <
    // ==, !=, <=, >=

    // String, Number, Bool
    //  " ", '', ` `
    // 0-9
    // true, false

    // BODMAS

    // +=, -=, *=, /=, %=, **=
    // Comparison operators
    // ==, ===, !=, !==, <, >, <=, >=, ?

    /****
     * 
     * 
     * ASSIGNMENT 1 START
     * 
     * SOLUTION
     */

    const pi = 3.14;
    var r;    

    function GetAreaofCircle() {  
        // pi = 7.89;  
        r = 3;
        let formula = 2*pi*(r^2 )       
        document.getElementById("changeme").innerHTML = formula;
    }


    /****
     * 
     * 
     * ASSIGNMENT 1 END
     */

     /****
     * 

    function GetArea() {
        let length = 2;
        let width = 3;

        let addAssign = addAssign()

        result = width + (length * width) * 2;
        document.getElementById("changeme").innerHTML = addAssign;
    }

    function addAssign() {
        let x = 10;
        x *= 5; // x = x - 5        
        document.getElementById("changeme").innerHTML = x;
    }
    
    function comparisonlist() {
        let john = 16;
        let joy = 20;
        let age_compared = `${john} is older than ${joy}, that's ${ john == joy}`
        // let age_compared = john + " is older than " + joy + ", that's " + (john > joy)
        document.getElementById("changeme").innerHTML = age_compared;
        
    }
**/


// Functions, Conditionals, Datatypes, Events
function Addition() {
    let x = parseFloat(document.getElementById("params1").value);
    let y = parseFloat(document.getElementById("params2").value);

    console.log(`x: ${x}, y: ${y}`);    

    if(x == "" || y == ""){
        alert("Enter a valye");
        return false;
    } else {
        
        z = x + y;
        console.log(`z: ${z}`);
        document.getElementById("solution").value = z;
    }
}


    

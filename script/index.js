


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


    

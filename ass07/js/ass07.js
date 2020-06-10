
window.onload = function() {
    //Events
    document.getElementById("button").addEventListener("click", function(event){
        event.preventDefault(); //Prevent default post of the button
        calculate(); // call the function
    });    
}

function calculate(){
    var miles = document.getElementById('driven').value; // Get the value from miles driven with the Id
    var gallons = document.getElementById('gallons').value; //Get the value from gallons of gsasdd with the Id
    n1 = parseFloat(miles);  //convert value top number
    n2 = parseFloat(gallons); //convert value top number
    var calc; //Vslue of the calculation
    
    if (!isNaN(n1) && !isNaN(n2)){ // Condition to check if it not a number the vslue given by the user
        calc = n1/n2;  //make the calculation
    } else {
        alert("Both entries must be numeric"); //Display an alert if the value is not s number
    }
    
    var total = document.getElementById('miles'); // Get the Id for the input to display total
    total.value = calc;  // Display calculation in the input
}

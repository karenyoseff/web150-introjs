function disp_prompt(){
    var name = prompt("Let's play the sum game \nPlease enter your name","");
    var num1 = prompt("Enter first number","");
    var num2 = prompt("Enter second number","");
    //converting numbers to integer
    n1 = parseFloat(num1);
    n2 = parseFloat(num2);
    var sum = n1 + n2; 

    if (name!=null && name!=""){
        if (n1 != null && n1 != ""){
            if (n2 != null && n2 != "")
            //message
                var message = "Hi, " + name + "! The sum of " + n1 + " + " + n2 + " is " + sum;
                var ms = document.getElementById('message');
                ms.textContent = message;         
}
}
}

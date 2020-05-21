//function prompt
function disp_prompt(){
    var input = prompt("Enter test score\nOr enter 999 to end entries","");
    //converting numbers to integer
    var num = parseFloat(input);
    //variable values
    var sum = 0;
    var count = 0;

    //creating the loop
    while (num!=999) {
        //Sum the new number with the sum of the past numbers
        sum = num + sum;
        //display the message and the prompt again
        input = prompt("Enter test score\nOr enter 999 to end entries","");
        //convert number to integer
        num = parseFloat(input);
        //count the number of num
        count++;
    }
    //Alert to show the average
    alert("Average score is:  " + sum / count);
}


//Prompting user to enter numbers in a range
let x = prompt("Enter first number: ");
let y = prompt("Enter second number: ");

//Parsing num1 and num2 as integers
let num1 = parseInt(x);
let num2 = parseInt(y);


//Looping from first number to second number 
//while printing each number one by one to the console
//assuming that num1 is greater than num2

if(num1 > num2){
    console.log("Error, first number cannot be greater than second number!");
}
else{
    console.log("Number is: ", num1);

    let number = num1 + 1;

    while(number <= num2){
        console.log("Number is: ", number);
        number++;
    }
}

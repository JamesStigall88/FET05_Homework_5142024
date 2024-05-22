//Grade calculator

//Prompting user to enter in a score
let score = prompt("Enter a score: ");
let grade;

//Using conditional statements to determine grade
//assigned to score
if(score < 60){
    grade = "F";
}
else if(score >= 60 && score <= 69){
    grade = "D";
}
else if(score >= 70 && score <= 79){
    grade = "C";
}
else if(score >= 80 && score <= 89){
    grade = "B";
}
else{
    grade = "A";
}

//Outputting grade to console
console.log("Your grade is: ", grade);
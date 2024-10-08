
//Demostrate some DOM manipulation in the exercise
/*
for example-
changing the value of a result div,hiding inputs once the butoon is clicked..

Arrays->

create a function which takes parameters a,b,l
l is a list of integers
find the sum of all the multiples of a or b in l

create a function which takes parameters a,b,l
a is a list of 2
l is a list of integers
find the sum of all the multiples of a in l

create a function which takes parameters a,l
a is a list of integers
l is a list of integers
find the sum of all the multiples of a or b in l

*/
function calculateSum() 
{

    let inputText1 = document.getElementById("userInput1").value;
    let inputText2 = document.getElementById("userInput2").value;
    let inputText3 = document.getElementById("userInput3").value;

    let a = Number(inputText1);
    let b = Number(inputText2);
    let n = Number(inputText3);

    let sum = 0;
    for (let i = 0; i < n; i++) 
    {
        if (i % a === 0 || i % b === 0) {
            sum += i;
        }
    }

    console.log(sum);
    document.getElementById("output").innerText = "Sum of all the multiples of " + a + " or " + b + " below " + n + " is " + sum;

    document.getElementById("inputForm").style.display="none";
}

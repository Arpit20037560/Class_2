/*
    Arrays->

create a function which takes parameters a,b,l
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

let list =  inputText3.split(',').map(num => parseInt(num.trim(),10));


const result = sum(a,list,b);

document.getElementById("output").innerText = "Sum of all the multiples of " + a + " or " + b + " inside " + list + " is " + result;

}

function sum(a,l,b)
{
    let ans =0;
    l.forEach(element => {
        if(element%a ==0 || element%b ==0)
        {
            ans+= element;
        }
    });

    return ans;
}
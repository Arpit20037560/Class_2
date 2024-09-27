
let a = 3;
let b = 5;


let n = 1000;

sum =0;
for(let i=0;i<1000;i++)
{
    if(i%a==0 || i%b ==0)
    sum+= i;
}
console.log(sum)
alert("Sum of all the multiples of 3 or 5 below 1000 is"+sum);
alert("Loaded Basket JS");

/*
Create a function that takes two objects,
basket and prices as parameters
where basket is a mapping from products (string) to quantities (number)
and prices is a mapping from products(String) to prices (number)
and returns the total cost of the basket
*/

function calculateSum() 
{

let inputText1 = document.getElementById("userInput1").value;

let inputText2 = document.getElementById("userInput2").value;


let baskets = inputText1.split(',').map(num => parseInt(num.trim(),10));


let prices = inputText2.split(',').map(num => parseInt(num.trim(),10));



const result = basketCost(a,list,b);

document.getElementById("output").innerText = "Basket Cost is " + result;

}

let basketCost = (basket, prices) => {
    let totalCost = 0;

    for (let product in basket) {
        if (prices[product]) { 
            totalCost += basket[product] * prices[product]; 
        }
    }

    return totalCost
}
alert(basketCost(basket, prices));
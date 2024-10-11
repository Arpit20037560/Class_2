alert("Loaded Basket JS");

/*
Create a function that takes two objects,
basket and prices as parameters
where basket is a mapping from products (string) to quantities (number)
and prices is a mapping from products(String) to prices (number)
and returns the total cost of the basket
*/

let basket = {'Milk': 2,'Bread': 1, "Tea":1}
let prices = {
    'Bread': 1.99,
    'Cheese': 2.99,
    'Milk': 1.99,
    'Tea':3.99
};

basketCost(basket,prices)

let basketCost = (basket, prices) => {
    let totalCost = 0;

    for (let product in basket) 
    {
        if(prices[product])
        {
            totalCost+= basket[product] * prices[product];
        }
        
    }

    return totalCost
}
alert(basketCost(basket, prices));
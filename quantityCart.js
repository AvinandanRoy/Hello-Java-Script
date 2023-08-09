const shoppingCart =[
    {Name : "Shoe" , price : 1200, quantity : 2},
    {Name : "pant" , price : 1200, quantity : 3 },
    {Name : "T-shirt" , price: 1300, quantity : 5},
    {Name : "Belt" , price : 500, quantity : 4}
]

function totalCoast(products){
    let total = 0 ;
    for(let i = 0 ; i < products.length ; i++){
        total += (products[i].price*products[i].quantity);
    }
    return total;
}

let result = totalCoast(shoppingCart);
console.log("Your total bill is :", result);
